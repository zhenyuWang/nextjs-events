// this file is used to add additional tags in document

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          {/* sometimes this is helpful for overlays */}
          <div id='overlays' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
