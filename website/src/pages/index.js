import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Prism from 'prismjs'
import Gfork from "../components/githubFork";
import Player from "react-howler-player";

const htmlcode = `import React, { Component, PureComponent } from 'react
import Player from "react-howler-player"

export default class App extends PureComponent {
  render() {
      return (
          <div>
            <Player
                src={[
                    'http://www.archive.org/download/solo_pride_librivox/prideandprejudice_01-04_austen_apc_64kb.mp3'
                ]}
            />
            <Player
                src={[
                    'http://www.archive.org/download/solo_pride_librivox/prideandprejudice_01-04_austen_apc_64kb.mp3'
                ]}   
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

  return (
    <Layout>
      <SEO title="Demo" />
      
      <section className="badges">
        <a href="https://www.npmjs.com/package/react-howler-player">
          <img src="https://badgen.net/npm/v/react-howler-player" alt="release" />
        </a>
        <a href="https://github.com/binodswain/react-howler-player/issues">
          <img
            src="https://badgen.net/github/issues/binodswain/react-howler-player"
            alt="issues"
          />
        </a>
        <a href="https://github.com/binodswain/react-howler-player/blob/master/LICENSE">
          <img
            src="https://badgen.net/github/license/binodswain/react-howler-player"
            alt="license"
          />
        </a>
      
      </section>
      <section className="demo">
        <h2>Demo</h2>
        {showPlayer ?
          <ol>
            <li>
              <h4>Default view</h4>
              <Player
              src={[
                  'http://www.archive.org/download/solo_pride_librivox/prideandprejudice_01-04_austen_apc_64kb.mp3'
              ]}
              
              />
              
            </li>
            <li>
              <h4>Dark mode</h4>
              <Player
              src={[
                  'http://www.archive.org/download/solo_pride_librivox/prideandprejudice_01-04_austen_apc_64kb.mp3'
                ]}
                isDark={true}
              />
            </li>
            <li>
              <Link to="/local-file/">
                <h4>Local audio file</h4>  
              </Link>
            </li>
          </ol>
          : null
        }
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
    </Layout>
  )
}

export default IndexPage
