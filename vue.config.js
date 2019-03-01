module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/main.scss";'
      }
    }
  },
  rules: {
    "no-console": "off"
  },
  pluginOptions: {
    i18n: {
      locale: 'fr',             // The locale of project localization
      fallbackLocale: 'en',     // The fallback locale of project localization
      localeDir: 'locales',     // The directory where store localization messages of project
      enableInSFC: false        // Enable locale messages in Single file components
    }
  }
}
