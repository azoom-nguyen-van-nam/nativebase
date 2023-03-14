module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~assets': './assets',
            '~components': './app/components',
            '~helpers': './app/helpers',
            '~screens': './app/screens',
            '~navigation': './app/navigation',
            '~plugins': './app/plugins',
            '~store': './app/store',
            '~services': './app/services'
          }
        }
      ]
    ]
  }
}
