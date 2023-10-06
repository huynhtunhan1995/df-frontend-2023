'use client'

import { useEffect, useState } from 'react'
import { getInitThemeMode } from '../data/modeData'
import '../css/toggleCss.css'

export type Mode = 'light' | 'dark'


const ToggleMode = () => {
  const [colorMode, rawSetColorMode] = useState<Mode>(getInitThemeMode)

  const updateColorMode = (newValue: Mode) => {
    if (newValue === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  const setColorMode = (newValue: Mode) => {
    rawSetColorMode(newValue)
    localStorage.setItem('color-mode', newValue)
    updateColorMode(newValue)
  }

  useEffect(() => {
    updateColorMode(colorMode)
  }, [colorMode])

  return (
    <div>
      <label>
        <input
          type="checkbox"
          id="dark-mode-toggle"
          checked={colorMode === 'dark'}
          onChange={(ev) => {
            setColorMode(ev.target.checked ? 'dark' : 'light')
          }}
        />
        <span className="fill"></span>
      </label>
    </div>

  )
}

export default ToggleMode
