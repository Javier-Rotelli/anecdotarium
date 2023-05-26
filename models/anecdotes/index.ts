import fixt from "./fixture.json";

export type Anecdote = {
  text: string;
  uid: number;
};

export const getAnecdotes = async (): Promise<Anecdote[]> => {
  return fixt;
};
