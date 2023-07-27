import { db } from 'src/lib/db'

export const equipments = () => {
  return db.equipment.findMany()
}

export const equipment = ({ id }) => {
  return db.equipment.findUnique({
    where: { id },
  })
}

export const createEquipment = ({ input }) => {
  return db.equipment.create({
    data: input,
  })
}

export const updateEquipment = ({ id, input }) => {
  return db.equipment.update({
    data: input,
    where: { id },
  })
}

export const deleteEquipment = ({ id }) => {
  return db.equipment.delete({
    where: { id },
  })
}

export const Equipment = {
  Annonces: (_obj, { root }) => {
    return db.equipment.findUnique({ where: { id: root?.id } }).Annonces()
  },
}
