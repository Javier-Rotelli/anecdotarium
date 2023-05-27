declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_APPWRITE_ENDPOINT: string;
    readonly NEXT_PUBLIC_APPWRITE_PROJECT: string;
    readonly NEXT_PUBLIC_APPWRITE_DATABASE_ID: string;
  }
}
