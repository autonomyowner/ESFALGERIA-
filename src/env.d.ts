interface ImportMetaEnv {
  readonly VITE_OWNER_NAME?: string
  readonly VITE_COUNTRY_CODE?: string
  readonly VITE_WHATSAPP_NUMBER?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


