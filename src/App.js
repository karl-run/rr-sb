import React from 'react'
import ReactHowler from 'react-howler'

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
      <div>
        Spiller nå:{' '}
        {playingIndex != null ? Object.keys(jingles)[playingIndex] : 'Itj nå'}
      </div>
      {Object.keys(jingles).map((key, index) => (
        <div>
          <div>{key}</div>
          <ReactHowler
            preload
            src={STATIC_URL + jingles[key]}
            playing={index === playingIndex}
            onEnd={() => setPlaying(null)}
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
