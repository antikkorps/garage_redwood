import { render } from '@redwoodjs/testing/web'

import GarageLayout from './GarageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GarageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GarageLayout />)
    }).not.toThrow()
  })
})
