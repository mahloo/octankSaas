/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClaimBootcamp = /* GraphQL */ `
  subscription OnCreateClaimBootcamp(
    $claim_id: String
    $claimedBy: String
    $tenant_id: String
    $dateClaimed: AWSDate
    $title: String
  ) {
    onCreateClaimBootcamp(
      claim_id: $claim_id
      claimedBy: $claimedBy
      tenant_id: $tenant_id
      dateClaimed: $dateClaimed
      title: $title
    ) {
      claim_id
      claimedBy
      tenant_id
      dateClaimed
      title
      oneCar
    }
  }
`;
export const onUpdateClaimBootcamp = /* GraphQL */ `
  subscription OnUpdateClaimBootcamp(
    $claim_id: String
    $claimedBy: String
    $tenant_id: String
    $dateClaimed: AWSDate
    $title: String
  ) {
    onUpdateClaimBootcamp(
      claim_id: $claim_id
      claimedBy: $claimedBy
      tenant_id: $tenant_id
      dateClaimed: $dateClaimed
      title: $title
    ) {
      claim_id
      claimedBy
      tenant_id
      dateClaimed
      title
      oneCar
    }
  }
`;
export const onDeleteClaimBootcamp = /* GraphQL */ `
  subscription OnDeleteClaimBootcamp(
    $claim_id: String
    $claimedBy: String
    $tenant_id: String
    $dateClaimed: AWSDate
    $title: String
  ) {
    onDeleteClaimBootcamp(
      claim_id: $claim_id
      claimedBy: $claimedBy
      tenant_id: $tenant_id
      dateClaimed: $dateClaimed
      title: $title
    ) {
      claim_id
      claimedBy
      tenant_id
      dateClaimed
      title
      oneCar
    }
  }
`;
