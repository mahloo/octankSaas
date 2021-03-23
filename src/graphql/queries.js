/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClaimBootcamp = /* GraphQL */ `
  query GetClaimBootcamp($tenant_id: String!, $claim_id: String!) {
    getClaimBootcamp(tenant_id: $tenant_id, claim_id: $claim_id) {
      claim_id
      claimedBy
      tenant_id
      dateClaimed
      title
      oneCar
    }
  }
`;
export const listClaimBootcamps = /* GraphQL */ `
  query ListClaimBootcamps(
    $filter: TableClaimBootcampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClaimBootcamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        claim_id
        claimedBy
        tenant_id
        dateClaimed
        title
        oneCar
      }
      nextToken
    }
  }
`;
export const queryClaimBootcampsByClaimedByIndex = /* GraphQL */ `
  query QueryClaimBootcampsByClaimedByIndex(
    $claimedBy: String!
    $first: Int
    $after: String
  ) {
    queryClaimBootcampsByClaimedByIndex(
      claimedBy: $claimedBy
      first: $first
      after: $after
    ) {
      items {
        claim_id
        claimedBy
        tenant_id
        dateClaimed
        title
        oneCar
      }
      nextToken
    }
  }
`;
