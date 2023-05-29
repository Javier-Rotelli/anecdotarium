import { Client } from "appwrite";

export type User = {
  id: string;
  name: string;
};
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

export default client;
