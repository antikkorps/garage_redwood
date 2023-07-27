import { render } from '@redwoodjs/testing/web'

import AnnonceDetailsPage from './AnnonceDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AnnonceDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnnonceDetailsPage />)
    }).not.toThrow()
  })
})
