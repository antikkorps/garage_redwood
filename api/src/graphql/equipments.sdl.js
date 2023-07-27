export const schema = gql`
  type Equipment {
    id: Int!
    name: String
    Annonces: [Annonce]!
  }

  type Query {
    equipments: [Equipment!]! @requireAuth
    equipment(id: Int!): Equipment @requireAuth
  }

  input CreateEquipmentInput {
    name: String
  }

  input UpdateEquipmentInput {
    name: String
  }

  type Mutation {
    createEquipment(input: CreateEquipmentInput!): Equipment! @requireAuth
    updateEquipment(id: Int!, input: UpdateEquipmentInput!): Equipment!
      @requireAuth
    deleteEquipment(id: Int!): Equipment! @requireAuth
  }
`
