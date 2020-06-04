/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
