export const schema = gql`
  type Annonce {
    id: Int!
    title: String!
    description: String
    kilometrage: Int
    yearofcirculation: Int
    price: Int
    published: Boolean!
    author: User
    authorId: Int
    createdAt: DateTime!
    Equipment: [Equipment]!
    Image: [Image]!
  }

  type Query {
    annonces: [Annonce!]! @skipAuth
    annonce(id: Int!): Annonce @skipAuth
  }

  input CreateAnnonceInput {
    title: String!
    description: String
    kilometrage: Int
    yearofcirculation: Int
    price: Int
    published: Boolean!
    authorId: Int
  }

  input UpdateAnnonceInput {
    title: String
    description: String
    kilometrage: Int
    yearofcirculation: Int
    price: Int
    published: Boolean
    authorId: Int
  }

  type Mutation {
    createAnnonce(input: CreateAnnonceInput!): Annonce! @requireAuth
    updateAnnonce(id: Int!, input: UpdateAnnonceInput!): Annonce! @requireAuth
    deleteAnnonce(id: Int!): Annonce! @requireAuth
  }
`
