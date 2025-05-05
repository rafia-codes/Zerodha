import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductsPage() {
  return (
    <div>
      <Hero/>
      <LeftSection title="Kite" desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." link1="Try demo" link2="
Learn more" img="/assets/image/kite.png"/>
      <RightSection img="/assets/image/console.png" title="Console" desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link="Learn more "/>
      <LeftSection img="/assets/image/coin.png" title="Coin" desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." link1="Coin "/>
      <RightSection img="/assets/image/kiteconnect.png" title="Kite Connect API" desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link="Kite Connect "/>
      <LeftSection img="/assets/image/varsity.png" title="Varsity mobile" desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."/>
      <Universe/>
    </div>
  )
}

export default ProductsPage
