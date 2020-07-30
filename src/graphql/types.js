import gql from "graphql-tag";

const types = gql`
  type User {
    id: String
    email: String
    username: String
    __typename: String
  }

  type ErrorResult {
    id: String
    path: String!
    message: String!
    __typename: String
  }

  type ValidationFailed {
    id: String
    path: String!
    messages: [String!]
    __typename: String
  }

  type CognitoError {
    id: String
    path: String!
    code: String!
    message: String!
    __typename: String
  }

  type UsernameNotFound {
    id: String
    path: String!
    message: String!
    __typename: String
  }

  type UserNotConfirmed {
    id: String
    path: String!
    message: String!
    __typename: String
  }

  type UsernameExists {
    id: String
    path: String!
    message: String!
    __typename: String
  }

  type IncorrectCredentials {
    id: String
    path: String!
    message: String!
    __typename: String
  }

  type TooManyPasswordAttempts {
    id: String
    path: String!
    message: String!
    __typename: String
  }

  union LoginResult =
      CognitoTokens
    | IncorrectCredentials
    | UsernameNotFound
    | UserNotConfirmed
    | ValidationFailed
    | ErrorResult
    | TooManyPasswordAttempts

  union SignUpResult =
      User
    | IncorrectCredentials
    | UsernameExists
    | ValidationFailed
    | ErrorResult
`;

export default types;
