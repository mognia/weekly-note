import {Note} from "../../models/note";

export const note1: Note = {
  id: 1,
  title: "Quick try on DB",
  startDate: 1641164400,
  endDate: 1641164400,
  labels: [1, 3],
  summary: "One morning, when Gregor Samsa woke from troubled dreams."
};
export const note2: Note = {
  id: 2,
  title: "Dirty check",
  startDate: 1641250800,
  endDate: 1641250800,
  labels: [2],
  summary: "MTV"
};

export const notesArray : Note[] = [note1,note2]
