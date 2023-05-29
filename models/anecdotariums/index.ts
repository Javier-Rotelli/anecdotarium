import client, { User } from "@/lib/appwrite";
import { setSession } from "@/lib/serverAppwrite";
import { Account, Databases, Models } from "appwrite";

export type Anecdotarium = {
  name: string;
  users: User[];
};

// {
//     name: 'probando',
//     users: [],
//     '$id': '646d86076aa12ecd57aa',
//     '$createdAt': '2023-05-24T03:35:35.437+00:00',
//     '$updatedAt': '2023-05-24T03:36:59.433+00:00',
//     '$permissions': [Array],
//     '$collectionId': '646d8369c534be9890fe',
//     '$databaseId': '646d8345b96a69483bf2'
//   }

export const getAnecdotariums = async (): Promise<Anecdotarium[]> => {
  setSession();
  const databases = new Databases(client);

  const anecdotariums = await databases.listDocuments<
    Anecdotarium & Models.Document
  >(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, "646d8369c534be9890fe");
  console.log(anecdotariums);
  return anecdotariums.documents;
};
