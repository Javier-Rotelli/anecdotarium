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

export interface Anecdotarium extends Models.Document {
  name: string;
  users: string[];
}

export interface Anecdote extends Models.Document {
  anecdote: string;
  boardId: string;
  image?: string;
}

const ANECDOTARIUMS_COLLECTION_ID = "646d8369c534be9890fe";
const ANECDOTES_COLLECTION_ID = "646d8358884d6c4080cc";

export const getAnecdotariums = async (): Promise<Anecdotarium[]> => {
  setSession();
  const databases = new Databases(client);

  const anecdotariums = await databases.listDocuments<Anecdotarium>(
    DATABASE_ID,
    ANECDOTARIUMS_COLLECTION_ID
  );
  return anecdotariums.documents;
};

export const createAnecdotarium = async (
  anecdotarium: Omit<Anecdotarium, keyof Models.Document>
) => {
  setSession();
  console.log(anecdotarium);
  const userID = (await getUserData()).$id;
  const databases = new Databases(client);
  const response = await databases.createDocument<Anecdotarium>(
    DATABASE_ID,
    ANECDOTARIUMS_COLLECTION_ID,
    ID.unique(),
    anecdotarium,
    [
      Permission.read(Role.user(userID)),
      Permission.update(Role.user(userID)),
      Permission.delete(Role.user(userID)),
    ]
  );
  return response;
};

export const getAnecdotarium = async ($id: string) => {
  setSession();
  const databases = new Databases(client);
  const anecdotarium = await databases.getDocument<Anecdotarium>(
    DATABASE_ID,
    ANECDOTARIUMS_COLLECTION_ID,
    $id
  );

  const anecdotes = (
    await databases.listDocuments<Anecdote>(
      DATABASE_ID,
      ANECDOTES_COLLECTION_ID,
      [Query.equal("boardId", $id)]
    )
  ).documents;

  return {
    anecdotarium,
    anecdotes,
  };
};
