import client, { User } from "@/lib/appwrite";
import { getUserData } from "@/lib/auth";
import { DATABASE_ID, setSession } from "@/lib/serverAppwrite";
import {
  Account,
  Databases,
  ID,
  Models,
  Permission,
  Query,
  Role,
} from "appwrite";
import { Storage, Client as ServerClient, InputFile } from "node-appwrite";

export interface Anecdotarium extends Models.Document {
  name: string;
  users: string[];
}

export interface Anecdote extends Models.Document {
  anecdote: string;
  boardId: string;
  image?: string;
}

const ANECDOTES_COLLECTION_ID = "646d8358884d6c4080cc";
const PHOTOS_BUCKET_ID = "6477e59762fffc38b746";

export const getAnecdotes = async (boardId: string): Promise<Anecdote[]> => {
  setSession();
  const databases = new Databases(client);

  const anecdotes = (
    await databases.listDocuments<Anecdote>(
      DATABASE_ID,
      ANECDOTES_COLLECTION_ID,
      [Query.equal("boardId", boardId)]
    )
  ).documents;
  return anecdotes;
};

const storePhoto = async (file: File) => {
  const account = new Account(client);
  const jwt = await account.createJWT();
  console.log("jwt:", jwt);
  const serverClient = new ServerClient()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setJWT(jwt.jwt);
  const storage = new Storage(serverClient);
  const photoRes = await storage.createFile(
    PHOTOS_BUCKET_ID,
    ID.unique(),
    InputFile.fromBlob(file, "lala.png")
  );
  return photoRes.$id;
};

export const createAnecdote = async (
  anecdote: Omit<Anecdote, keyof Models.Document>,
  file?: File
) => {
  setSession();
  const userID = (await getUserData()).$id;
  const databases = new Databases(client);
  const response = await databases.createDocument<Anecdote>(
    DATABASE_ID,
    ANECDOTES_COLLECTION_ID,
    ID.unique(),
    anecdote,
    [
      Permission.read(Role.user(userID)),
      Permission.update(Role.user(userID)),
      Permission.delete(Role.user(userID)),
    ]
  );
  return response;
};
