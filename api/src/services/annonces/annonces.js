import { db } from 'src/lib/db'

export const annonces = () => {
  return db.annonce.findMany()
}

export const annonce = ({ id }) => {
  return db.annonce.findUnique({
    where: { id },
  })
}

export const createAnnonce = ({ input }) => {
  return db.annonce.create({
    data: input,
  })
}

export const updateAnnonce = ({ id, input }) => {
  return db.annonce.update({
    data: input,
    where: { id },
  })
}

export const deleteAnnonce = ({ id }) => {
  return db.annonce.delete({
    where: { id },
  })
}

export const Annonce = {
  author: (_obj, { root }) => {
    return db.annonce.findUnique({ where: { id: root?.id } }).author()
  },
  Equipment: (_obj, { root }) => {
    return db.annonce.findUnique({ where: { id: root?.id } }).Equipment()
  },
  Image: (_obj, { root }) => {
    return db.annonce.findUnique({ where: { id: root?.id } }).Image()
  },
}
