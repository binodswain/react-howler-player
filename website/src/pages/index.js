import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Prism from "prismjs"
import Player from "react-howler-player"
import Footer from "../components/footer"
import PackageLinks from "../components/packageLinks"

const AUDIO_URL =
  "https://github.com/binodswain/react-howler-player/raw/develop/example/audio_file.mp3"

const htmlcode = `import React, { Component, PureComponent } from 'react
import Player from "react-howler-player"

export default class App extends PureComponent {
  render() {
      return (
          <div>
            <Player
                src={[AUDIO_URL]}
            />
            <Player
                src={[AUDIO_URL]}   
                isDark={true}
            />
          </div>
      )
  }
}
`

const IndexPage = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
    setShowFlag(true)
  })
  const [showPlayer, setShowFlag] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <Layout>
        <SEO title="Demo" />
        <PackageLinks />
        <section className="demo">
          <div className="demo-header">
            <h2>Demo</h2>
            <button className="dark-mode" onClick={()=>setDarkMode(!darkMode)} type="button">
              dark mode {darkMode ? 'on': "off"}
            </button>
          </div>
          {showPlayer ? (
            <ol>
              <li>
                <h4>Default view</h4>
                <Player src={[AUDIO_URL]} isDark={darkMode} />
              </li>
              <li>
                <Link to="/local-file/">
                  <h4>Local audio file</h4>
                </Link>
              </li>
            </ol>
          ) : null}
        </section>
        <h2>Usage</h2>
        Install the package
        <pre>
          <code className="language-ssh">
            npm install --save react-howler-player
          </code>
        </pre>
        Import the package
        <pre>
          <code className="language-jsx">
            import Player from "react-howler-player"
          </code>
        </pre>
        Pass an audio url in props.
        <pre className="line-numbers">
          <code className="language-jsx">{htmlcode}</code>
        </pre>

        <a href="https://github.com/binodswain/react-howler-player#readme" target="_blank">
          More config
        </a>
      </Layout>
      <Footer />
    </>
  )
}

export default IndexPage
