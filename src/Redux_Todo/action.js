const AddAction = (value, id) => {
  return {
    type: "add_todo",
    payload: {
      value: value,
      id: id,
    },
  };
};

const EditAction = (value, id) => {
  return {
    type: "edit_todo",
    payload: {
      value: value,
      id: id,
    },
  };
};

const DeleteAction = (id) => {
  return {
    type: "delete_todo",
    payload: id,
  };
};

export { AddAction, EditAction, DeleteAction };
