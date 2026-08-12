/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ACTIVE_PROFILE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
