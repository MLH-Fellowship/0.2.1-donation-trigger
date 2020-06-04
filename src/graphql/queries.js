/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      fullName
      handle
      token
      activeDonations {
        items {
          id
          userID
          organization
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        fullName
        handle
        token
        activeDonations {
          nextToken
        }
        createdAt
        updatedAt
      }
      organization
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
          fullName
          handle
          token
          createdAt
          updatedAt
        }
        organization
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
  }
`;
