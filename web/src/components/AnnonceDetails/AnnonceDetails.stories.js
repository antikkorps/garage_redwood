// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AnnonceDetails {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AnnonceDetails from './AnnonceDetails'

export const generated = () => {
  return <AnnonceDetails />
}

export default {
  title: 'Components/AnnonceDetails',
  component: AnnonceDetails,
}
