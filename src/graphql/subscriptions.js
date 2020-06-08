/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      twitterId
      handle
      donations {
        items {
          id
          userID
          organization
          website
          hashtag
          amount
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
      twitterId
      handle
      donations {
        items {
          id
          userID
          organization
          website
          hashtag
          amount
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
      twitterId
      handle
      donations {
        items {
          id
          userID
          organization
          website
          hashtag
          amount
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
        twitterId
        handle
        donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      organization
      website
      hashtag
      amount
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
        twitterId
        handle
        donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      organization
      website
      hashtag
      amount
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
        twitterId
        handle
        donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      organization
      website
      hashtag
      amount
      accumulatedAmount
      numberOfCalls
      limit
      createdAt
      updatedAt
    }
  }
`;
