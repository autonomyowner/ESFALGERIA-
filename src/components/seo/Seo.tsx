import { useEffect } from 'react'

export interface SeoProps {
  title?: string
  description?: string
  image?: string
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOG(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ title, description, image }: SeoProps) {
  useEffect(() => {
    const baseTitle = 'ESFALGERIA'
    const fullTitle = title ? `${title} — ${baseTitle}` : baseTitle
    document.title = fullTitle
    if (description) setMeta('description', description)

    const url = window.location.origin + window.location.pathname
    setOG('og:title', fullTitle)
    if (description) setOG('og:description', description)
    setOG('og:url', url)
    if (image) setOG('og:image', image)
  }, [title, description, image])

  return null
}


