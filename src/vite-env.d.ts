/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ACTIVE_PROFILE?: string;
  readonly VITE_WHATSAPP_PHONE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
