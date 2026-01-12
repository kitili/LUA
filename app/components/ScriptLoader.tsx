'use client'

import { useEffect } from 'react'

interface ScriptLoaderProps {
  scripts: string[]
  pageScripts?: string[]
}

export default function ScriptLoader({ scripts, pageScripts = [] }: ScriptLoaderProps) {
  useEffect(() => {
    const allScripts = [...scripts, ...pageScripts]

    allScripts.forEach((src) => {
      // Avoid duplicating the same script (prevents "identifier already declared" errors)
      const alreadyLoaded = document.querySelector(`script[src="${src}"]`)
      if (alreadyLoaded) return

      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
    })
  }, [scripts.join(','), pageScripts.join(',')])

  return null
}

