import React from 'react'
import ReactHowler from 'react-howler'
import Header from './components/header/Header'
import Playing from './components/playing/Playing'
import List from './components/grid/Grid'

const STATIC_URL = 'https://static.rr.karl.run'

const App = () => {
  const [jingles, setJingles] = React.useState(null)
  const [playingIndex, setPlaying] = React.useState(null)

  React.useEffect(() => {
    fetch(STATIC_URL + '/jingles.json')
      .then(res => res.json())
      .then(res => {
        setJingles(res)
      })
  }, [])

  if (!jingles) return <div>Loading</div>

  return (
    <div>
      <Header />
      <List jingles={jingles} />
      <Playing />
      <div>
        Spiller nå:{' '}
        {playingIndex != null ? Object.keys(jingles)[playingIndex] : 'Itj nå'}
      </div>
      {Object.keys(jingles).map((key, index) => (
        <div key={key}>
          <div>{key}</div>
          <ReactHowler
            preload={false}
            src={STATIC_URL + jingles[key]}
            playing={index === playingIndex}
            onEnd={() => setPlaying(null)}
            onLoad={it => {
              console.log(key)
            }}
          />
          <button
            onClick={() => {
              setPlaying(index)
            }}
          >
            Play
          </button>
        </div>
      ))}
      <button onClick={() => setPlaying(null)}>Stop</button>
    </div>
  )
}

export default App
