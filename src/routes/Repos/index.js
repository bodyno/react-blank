if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import Repos from './Repos'

export default () => ({
  path: 'repos',
  component: Repos
})
