import React from 'react'
// import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const HomePage: React.FC = () => {
  // const { t, i18n } = useTranslation()
  const [isSSR, setIsSSr] = useState(true)

  useEffect(() => {
    setIsSSr(false)
  }, [])
  if (isSSR) return null

  // useEffect(() => {
  //   const lng = navigator.language
  //   i18n.changeLanguage(lng)
  // }, [])

  // const lng = navigator.language
  return (
    <div className='main'>
      <Header></Header>
      <div className='container mx-auto'>
        <div className='w-full'>
          <div className=''><Sidebar></Sidebar></div>
        </div>
      </div>
    </div>
  )
}

export default HomePage