import React from 'react'
import { useEffect, useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState(()=> localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (

    <>

    </>

  )
}
