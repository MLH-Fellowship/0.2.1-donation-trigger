/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      twitterId
      handle
      donations {
        items {
          id
          userID
          organization
          hashtags
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        twitterId
        handle
        donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
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
      hashtags
      amount
      accumulatedAmount
      numberOfCalls
      limit
      createdAt
      updatedAt
    }
  }
`;
export const listDonations = /* GraphQL */ `
  query ListDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          twitterId
          handle
          createdAt
          updatedAt
        }
        organization
        hashtags
        amount
        accumulatedAmount
        numberOfCalls
        limit
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
