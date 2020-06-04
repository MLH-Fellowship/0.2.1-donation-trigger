/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      fullName
      handle
      token
      activeDonations {
        items {
          id
          userID
          trigger
          initialAmount
          accumulatedAmount
          numberOfCalls
          limit
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      fullName
      handle
      token
      activeDonations {
        items {
          id
          userID
          trigger
          initialAmount
          accumulatedAmount
          numberOfCalls
          limit
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      fullName
      handle
      token
      activeDonations {
        items {
          id
          userID
          trigger
          initialAmount
          accumulatedAmount
          numberOfCalls
          limit
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation {
    onCreateDonation {
      id
      userID
      user {
        id
        fullName
        handle
        token
        activeDonations {
          nextToken
        }
        createdAt
        updatedAt
      }
      trigger
      initialAmount
      accumulatedAmount
      numberOfCalls
      limit
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation {
    onUpdateDonation {
      id
      userID
      user {
        id
        fullName
        handle
        token
        activeDonations {
          nextToken
        }
        createdAt
        updatedAt
      }
      trigger
      initialAmount
      accumulatedAmount
      numberOfCalls
      limit
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation {
    onDeleteDonation {
      id
      userID
      user {
        id
        fullName
        handle
        token
        activeDonations {
          nextToken
        }
        createdAt
        updatedAt
      }
      trigger
      initialAmount
      accumulatedAmount
      numberOfCalls
      limit
      createdAt
      updatedAt
    }
  }
`;
