'use strict';

/**
 * @ngdoc overview
 * @name constants
 * @description
 * # constants
 *
 * Main module of the application.
 */
angular.module('clientApp')
  .constant('Constants', {
    // AUTH_MANAGER_URL: 'http://localhost:3000',
    // USER_MANAGER_URL: 'http://localhost:3001',
    // TENANT_MANAGER_URL: 'http://localhost:3003',
    // TENANT_REGISTRATION_URL: 'http://localhost:3004',
    // CLAIM_MANAGER_URL: 'http://localhost:3015',
    // SYSTEM_REGISTRATION_URL: 'http://localhost:3011',

    //AUTH_MANAGER_URL: 'DOMAIN_URL',
    AUTH_MANAGER_URL: 'https://zb49ur0xf6.execute-api.eu-central-1.amazonaws.com/v1',
    USER_MANAGER_URL: 'https://zb49ur0xf6.execute-api.eu-central-1.amazonaws.com/v1',
    TENANT_MANAGER_URL: 'https://zb49ur0xf6.execute-api.eu-central-1.amazonaws.com/v1',
    TENANT_REGISTRATION_URL: 'https://zb49ur0xf6.execute-api.eu-central-1.amazonaws.com/v1',
    CLAIM_MANAGER_URL: 'Dhttps://zb49ur0xf6.execute-api.eu-central-1.amazonaws.com/v1',
    SYSTEM_REGISTRATION_URL: 'Dhttps://zb49ur0xf6.execute-api.eu-central-1.amazonaws.com/v1',
    SYSTEM_ADMIN_ROLE: 'SystemAdmin',
    SYSTEM_SUPPORT_ROLE: 'SystemUser',
    TENANT_ADMIN_ROLE: 'TenantAdmin',
    TENANT_USER_ROLE: 'TenantUser'
  });