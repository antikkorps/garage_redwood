export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String
    createdAt: DateTime!
    updatedAt: DateTime!
    Annonces: [Annonce]!
    Role: Role
    roleId: Int
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String
    roleId: Int
  }

  input UpdateUserInput {
    name: String
    email: String
    roleId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
