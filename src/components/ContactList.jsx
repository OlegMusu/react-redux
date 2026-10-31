import { useSelector, useDispatch } from "react-redux";
import { deleteCard, addCard } from "../redux/actions";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function ContactList() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault()
    if(!name || !number){
        return
    }
    dispatch(addCard({
        id: nanoid(),
        name,
        number,
    }))
    setName("")
    setNumber("")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={name} onChange={event => setName(event.target.value)} />
        <input type="text" placeholder="number" value={number} onChange={event => setNumber(event.target.value)} />
        <button type="submit">add</button>
      </form>
      <ul>
        {cards.map((contact) => {
          return (
            <li key={contact.id}>
              <h2>{contact.name}</h2>
              <p>{contact.number}</p>
              <button
                type="button"
                onClick={() => dispatch(deleteCard(contact.id))}
              >
                del
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
