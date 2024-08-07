/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_SERVICE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/* VITE_API_URL="http://api-sys-uat-dc.kbzbank.com/apigee.cms.sys/api"
VITE_SERVICE_ID="56fcc035-4d10-4102-9f71-adcb21c875c0"*/
