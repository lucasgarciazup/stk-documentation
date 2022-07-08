const React = require("react")
const theme = require('./src/theme')
const { ThemeProvider } = require("@citric/core")

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}