import React from 'react'

const Result = (props) => {
  const {house,answers} = props
  return (
    <div id='result'>
      <img src={`/${house}.png`} />
      <p>You ought to be in...{house(answers)}!</p>
    </div>
  )
}

export default Result
