import React from "React"
const PackageLinks = () => {
  return (
    <section className="badges">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/package/react-howler-player"
      >
        <img src="https://badgen.net/npm/v/react-howler-player" alt="release" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/binodswain/react-howler-player/open-issues"
      >
        <img
          src="https://badgen.net/github/open-issues/binodswain/react-howler-player"
          alt="open issues"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/binodswain/react-howler-player/blob/master/LICENSE"
      >
        <img
          src="https://badgen.net/github/license/binodswain/react-howler-player"
          alt="license"
        />
      </a>
    </section>
  )
}

export default PackageLinks
