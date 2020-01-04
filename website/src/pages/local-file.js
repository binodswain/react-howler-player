import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Prism from 'prismjs'
import Player from "react-howler-player";


import './local-file.scss'

const SecondPage = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
    setShowFlag(true)
  })
  const [showPlayer, setShowFlag] = useState(false)
  const [filepath, setFilepath] = useState('')
  const [name, setName] = useState('')
  const [expand, setExpand] = useState(false)

  const onChange = (event) => {
    if (!event.target.files[0]) {
      return
    }
    let filepath = URL.createObjectURL(event.target.files[0]);
    const {
      type,
      name
    } = event.target.files[0];
    setFilepath(filepath)
    setName(name)
  }
  const removeAudio = (e) => {
    e.preventDefault();
    setFilepath('')
    setName('')
  }
  return (
    <Layout>
      <SEO title="Local audio" />
      <h2>Local audio file</h2>
      <div className="form-element">
        <input type="file" 
            className="file-input" 
            id="file-input" 
            name="audio_file" 
            accept="audio/*" 
            onChange={(e) => onChange(e)}
            id="audio-file"
            hidden
        />
        <label htmlFor="audio-file">
            <div className="form-label">
                {name || 'Select an audio file'} 
            </div>

            {filepath ? 
                <div className="icon-close" onClick={(e)=>removeAudio(e)}>
                    <i className="material-icons">
                        close
                    </i>
                </div>
                :null
            }
        </label>
      </div>
      {filepath ? 
          <Player
              src={[filepath]}
              format={['wav', 'mp3']}
          /> : null
      }
      <button
        onClick={() => setExpand(!expand)}
        className={'button-code'}
      >
        {expand? 'Hide':'Show'} Source code
      </button>
      <div className={["expandable-section", expand ? 'expand': 'close'].join(' ')}>
        <pre className="line-numbers">
          <code className="language-jsx">{htmlcode}</code>
        </pre>
      </div>

    </Layout>
  )
}

const htmlcode = `import React, { useEffect, useState } from "react"
import Player from "react-howler-player";


const Component = () => {
  const [filepath, setFilepath] = useState('')
  const [name, setName] = useState('')

  const onChange = (event) => {
    if (!event.target.files[0]) {
      return
    }
    let filepath = URL.createObjectURL(event.target.files[0]);
    const {
      type,
      name
    } = event.target.files[0];
    setFilepath(filepath)
    setName(name)
  }
  const removeAudio = (e) => {
    e.preventDefault();
    setFilepath('')
    setName('')
  }
  return (
    <div>
      <div className="form-element">
        <input type="file" 
            className="file-input" 
            id="file-input" 
            name="audio_file" 
            accept="audio/*" 
            onChange={(e) => onChange(e)}
            id="audio-file"
            hidden
        />
        <label htmlFor="audio-file">
            <div className="form-label">
                {name || 'Select an audio file'} 
            </div>

            {filepath ? 
                <div className="icon-close" onClick={(e)=>removeAudio(e)}>
                    <i className="material-icons">
                        close
                    </i>
                </div>
                :null
            }
        </label>
      </div>
      {filepath ? 
          <Player
              src={[filepath]}
              format={['wav', 'mp3']}
          /> : null
      }
    </div>
  )
}`
export default SecondPage
