import {
  annonces,
  annonce,
  createAnnonce,
  updateAnnonce,
  deleteAnnonce,
} from './annonces'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('annonces', () => {
  scenario('returns all annonces', async (scenario) => {
    const result = await annonces()

    expect(result.length).toEqual(Object.keys(scenario.annonce).length)
  })

  scenario('returns a single annonce', async (scenario) => {
    const result = await annonce({ id: scenario.annonce.one.id })

    expect(result).toEqual(scenario.annonce.one)
  })

  scenario('creates a annonce', async () => {
    const result = await createAnnonce({
      input: { title: 'String' },
    })

    expect(result.title).toEqual('String')
  })

  scenario('updates a annonce', async (scenario) => {
    const original = await annonce({ id: scenario.annonce.one.id })
    const result = await updateAnnonce({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a annonce', async (scenario) => {
    const original = await deleteAnnonce({
      id: scenario.annonce.one.id,
    })
    const result = await annonce({ id: original.id })

    expect(result).toEqual(null)
  })
})
