function getOwnerPhoneInternational(): string {
  const countryCode = import.meta.env.VITE_COUNTRY_CODE?.trim() || '213'
  const number = import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || '799303561'
  return `${countryCode}${number}`
}

export function buildWhatsAppLink(message?: string): string {
  const phone = getOwnerPhoneInternational()
  const base = `https://wa.me/${phone}`
  if (!message) return base
  const encoded = encodeURIComponent(message)
  return `${base}?text=${encoded}`
}

export function getOwnerName(): string {
  return import.meta.env.VITE_OWNER_NAME?.trim() || 'Abdenacer Djeddi'
}


