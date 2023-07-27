import { equipments, equipment, deleteEquipment } from './equipments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('equipments', () => {
  scenario('returns all equipments', async (scenario) => {
    const result = await equipments()

    expect(result.length).toEqual(Object.keys(scenario.equipment).length)
  })

  scenario('returns a single equipment', async (scenario) => {
    const result = await equipment({ id: scenario.equipment.one.id })

    expect(result).toEqual(scenario.equipment.one)
  })

  scenario('deletes a equipment', async (scenario) => {
    const original = await deleteEquipment({
      id: scenario.equipment.one.id,
    })
    const result = await equipment({ id: original.id })

    expect(result).toEqual(null)
  })
})
