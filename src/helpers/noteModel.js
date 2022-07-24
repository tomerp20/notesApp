import { v4 as uuidv4 } from "uuid";

const noteModel = (body, title = "No Title", isArchived = false) => {
  return {
    id: uuidv4(),
    title: title,
    body: body,
    createdAt: Date.now(),
    isArchived: isArchived,
  };
};

export default noteModel;
