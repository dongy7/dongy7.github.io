const React = require("react")

const themeScript = `
(function() {
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();
`

exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: "en" })
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-script",
      dangerouslySetInnerHTML: { __html: themeScript },
    }),
  ])
}
