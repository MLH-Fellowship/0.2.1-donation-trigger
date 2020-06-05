/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      twitterId
      handle
      donations {
        items {
          id
          userID
          organization
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      twitterId
      handle
      donations {
        items {
          id
          userID
          organization
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      twitterId
      handle
      donations {
        items {
          id
          userID
          organization
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
export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
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
export const updateDonation = /* GraphQL */ `
  mutation UpdateDonation(
    $input: UpdateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    updateDonation(input: $input, condition: $condition) {
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
export const deleteDonation = /* GraphQL */ `
  mutation DeleteDonation(
    $input: DeleteDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    deleteDonation(input: $input, condition: $condition) {
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
