import { roles, role, deleteRole } from './roles'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('roles', () => {
  scenario('returns all roles', async (scenario) => {
    const result = await roles()

    expect(result.length).toEqual(Object.keys(scenario.role).length)
  })

  scenario('returns a single role', async (scenario) => {
    const result = await role({ id: scenario.role.one.id })

    expect(result).toEqual(scenario.role.one)
  })

  scenario('deletes a role', async (scenario) => {
    const original = await deleteRole({ id: scenario.role.one.id })
    const result = await role({ id: original.id })

    expect(result).toEqual(null)
  })
})
