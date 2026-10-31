export const deleteCard = (id) => {
  return {
    type: "DELETE_CARD",
    payload: id,

  };
};

export const addCard = (contact) => {
    return {
        type: "ADD_CARD",
        payload: contact,
    }
}