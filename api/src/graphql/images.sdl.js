export const schema = gql`
  type Image {
    id: Int!
    name: String
    featuredImage: Boolean!
    Annonce: Annonce
    AnnonceId: Int
    url: String
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: Int!): Image @requireAuth
  }

  input CreateImageInput {
    name: String
    featuredImage: Boolean!
    AnnonceId: Int
    url: String
  }

  input UpdateImageInput {
    name: String
    featuredImage: Boolean
    AnnonceId: Int
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
