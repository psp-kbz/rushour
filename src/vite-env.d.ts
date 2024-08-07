/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_SERVICE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
