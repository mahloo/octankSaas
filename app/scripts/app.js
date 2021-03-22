'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', ['ngRoute', 'angular-jwt']);

angular.module('clientApp').factory('httpRequestInterceptor', function ($rootScope) {
  return {
    request: function (config) {
      if ($rootScope.bearerToken)
        config.headers['Authorization'] = 'Bearer ' + $rootScope.bearerToken;
      return config;
    }
  };
});


angular.module('clientApp').config(function ($routeProvider, $httpProvider, $locationProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.interceptors.push('httpRequestInterceptor');
  $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'ConfirmCtrl',
        controllerAs: 'confirm'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/tenants', {
        templateUrl: 'views/tenants.html',
        controller: 'TenantsCtrl',
        controllerAs: 'tenants'
      })
      .when('/tenant/edit/:id', {
        templateUrl: 'views/tenant-edit.html',
        controller: 'TenantEditCtrl',
        controllerAs: 'tenantEdit'
      })
      .when('/tenant/delete/:id', {
        templateUrl: 'views/tenant-delete.html',
        controller: 'TenantDeleteCtrl',
        controllerAs: 'tenantDelete'
      })
       .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/user/add', {
        templateUrl: 'views/user-add.html',
        controller: 'UserAddCtrl',
        controllerAs: 'userAdd'
      })
      .when('/user/edit/:id', {
        templateUrl: 'views/user-edit.html',
        controller: 'UserEditCtrl',
        controllerAs: 'userEdit'
      })
      .when('/user/delete/:id', {
        templateUrl: 'views/user-delete.html',
        controller: 'UserDeleteCtrl',
        controllerAs: 'userDelete'
      })
      .when('/user/enable/:id', {
        templateUrl: 'views/user-enable.html',
        controller: 'UserEnableCtrl',
        controllerAs: 'userEnable'
      })
      .when('/claims', {
        templateUrl: 'views/claims.html',
        controller: 'ClaimsCtrl',
        controllerAs: 'claims'
      })
      .when('/claim/add', {
        templateUrl: 'views/claim-add.html',
        controller: 'ClaimAddCtrl',
        controllerAs: 'claimAdd'
      })
      .when('/claim/edit/:id', {
        templateUrl: 'views/claim-edit.html',
        controller: 'ClaimEditCtrl',
        controllerAs: 'claimEdit'
      })
      .when('/claim/delete/:id', {
        templateUrl: 'views/claim-delete.html',
        controller: 'ClaimDeleteCtrl',
        controllerAs: 'claimDelete'
      })
      .otherwise({
        redirectTo: '#!/login'
      });

  });

angular.module('clientApp').run(function ($rootScope, $location, $http, Constants) {
  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    // redirect to login page if not logged in and trying to access a restricted page

    var restrictedPage = false;
    var userLoggedOut = false;
    if ($location.path() === '/logout') {
      $rootScope.isUserLoggedIn = false;
      $rootScope.bearerToken = '';
      $rootScope.currentUser = '';
      $rootScope.userDisplayName = '';
      userLoggedOut = true;
    }
    else {
      restrictedPage = $.inArray($location.path(), ['/login', '/register', '/confirm']) === -1;
      if ($rootScope.isUserLoggedIn === undefined)
        $rootScope.isUserLoggedIn = false;
    }

    //var loggedIn = true;
    if ((userLoggedOut) || (restrictedPage && !$rootScope.isUserLoggedIn)) {
      $location.path('/login');
    }
  });

  $rootScope.isAdminUser = function() {
    return (($rootScope.userRole === Constants.SYSTEM_ADMIN_ROLE) || ($rootScope.userRole === Constants.TENANT_ADMIN_ROLE));
  };

  $rootScope.isSystemAdminUser = function() {
    return ($rootScope.userRole === Constants.SYSTEM_ADMIN_ROLE);
  };

  $rootScope.isTenantAdminUser = function() {
    return ($rootScope.userRole === Constants.TENANT_ADMIN_ROLE);
  };

  $rootScope.isSystemUser = function() {
    var systemUser = false;
    if (($rootScope.userRole === Constants.SYSTEM_ADMIN_ROLE) || ($rootScope.userRole === Constants.SYSTEM_SUPPORT_ROLE))
      systemUser = true;
    return systemUser;
  };

  $rootScope.isTenantUser = function() {
    var tenantUser = false;
    if (($rootScope.userRole === Constants.TENANT_ADMIN_ROLE) || ($rootScope.userRole === Constants.TENANT_USER_ROLE))
      tenantUser = true;
    return tenantUser;
  };

  $rootScope.roleToDisplayName = function(userRole) {
    var displayName = '';
    if (userRole === 'TenantAdmin')
      displayName = 'Administrator';
    else if (userRole === 'TenantUser')
      displayName = 'Claim Manager';
    else if (userRole === 'SystemAdmin')
      displayName = 'System Admin';
    else if (userRole === 'SystemUser')
      displayName = 'Customer Support';

    return displayName;
  }

  $rootScope.isActiveLink = function (viewLocation) {
    var active = (viewLocation === $location.path());
    return active;
  };

  $rootScope.isLinkEnabled = function (viewLocation) {
    var enabled = false;
    if ($rootScope.isUserLoggedIn) {
      if ($.inArray(viewLocation, ['/login', '/']) >= 0)
        enabled = true;
      else if (viewLocation === '/tenants') {
        enabled = $rootScope.isSystemUser();
      }
      else if (viewLocation === '/users') {
        enabled = $rootScope.isAdminUser();
      }
      else if (viewLocation === '/claims') {
        //enabled = $rootScope.isTenantUser();
        enabled = true;
      }
    }
    else {
      if ($.inArray(viewLocation, ['/login', '/register', 'confirm']) >= 0)
        enabled = true;
    }
    return enabled;
  };
});
