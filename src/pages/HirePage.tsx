import React from 'react'
import Packages from '../components/Packages'
import Contact from '../components/Contact'
import SubscribeSection from '../components/subscribe'

const HirePage = () => {
  return (
    <div className='bg-gray-100 rounded-b-[50px]'>
      <Packages/>
      <Contact/>
      <SubscribeSection/>
    </div>
  )
}

export default HirePage
