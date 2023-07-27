import { render } from '@redwoodjs/testing/web'

import AnnonceDetails from './AnnonceDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnnonceDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnnonceDetails />)
    }).not.toThrow()
  })
})
