import { useState } from 'react'
import { DarkModeContext } from './DarkModeHook'


export default function ContextWrapper(props) {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(darkMode => !darkMode)
  }

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {props.children}
    </DarkModeContext.Provider>
  )
}