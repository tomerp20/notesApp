import { format } from "date-fns";
import localforage from "localforage";

export const convertDate = (epochNumber) => {
  return format(new Date(epochNumber), "LLLL do yyyy, HH:mm");
};

export const loadNotes = (callback) =>
  (async () => {
    try {
        localforage.getItem("notes").then((localNotes) => {
        if (localNotes && Object.keys(localNotes).length) callback(localNotes);
      });
    } catch (err) {
      console.log(err);
    }
  })();

export const storeNotes = (notes) => {
  if (Object.keys(notes).length) {
    (async () => {
        localforage.setItem("notes", notes).catch((err) => {
        console.error(err);
      });
    })();
  }
};