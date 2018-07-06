const _ = require('lodash')

module.exports = function({ ratios, variants } = { ratios: {}, variants: [] }) {
  return function({ addUtilities, e }) {
    ratios = Object.assign(
      {
        '16/9': [16, 9],
        '4/3': [4, 3],
        '2/1': [2, 1],
      },
      ratios
    )
    const base = [
      {
        ['[class*="o-aspect-ratio"]']: {
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
        },
      },
      {
        ['[class*="o-aspect-ratio"] > *']: {
          position: 'absolute',
          width: '100%',
          height: '100% !important',
        },
      },
      {
        ['[class*="o-aspect-ratio"]::before']: {
          content: `''`,
          float: 'left',
          paddingTop: '100%',
          position: 'relative',
        },
      },
    ]
    const utilities = _.map(ratios, ([width, height], name) => ({
      [`.${e(`o-aspect-ratio-${name}`)}::before`]: {
        paddingTop: `${(Math.round(height) / Math.round(width) * 100).toFixed(2)}%`,
      },
    }))

    addUtilities([...base, ...utilities], variants)
  }
}
