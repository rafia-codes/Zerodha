import React from 'react'
import Hero from './Hero'
import Trust from './Trust'
import Pricing from './Pricing'
import Education from './Education'
import OpenAcc from '../../OpenAcc'


function HomePage() {
  return (
    <div>
      <Hero/>
      <Trust/>
      <Pricing/>
      <Education/>
      <OpenAcc/>
    </div>
  )
}

export default HomePage;
