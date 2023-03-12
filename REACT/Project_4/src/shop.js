import React, { useState } from "react";
import ItemsList from "./itemslist";
import AddItem from "./additem";
import uuid from 'react-uuid';

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    setName("");
    setDesc("");

    if (name.trim().length === 0 || desc.trim().length === 0) {
      alert("Не все поля заполнены!");
    } else {
      setItems([...items, { name, desc, id: uuid() }]);
    }
  }

  function handleRemoveClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleNameValue(e) {
    setName(e.target.value)
  }
  function handleDescValue(e) {
    setDesc(e.target.value)}

  return (
    <>
      <AddItem onNameValue={handleNameValue} onDescValue={handleDescValue} name={name} desc={desc} onFormSubmit={handleFormSubmit}/>
      <div>
        {items.length < 1 && <p className="ui-title">Добавьте первый товар</p>}
      </div>
      <ItemsList onRemoveClick={handleRemoveClick} items={items} />
    </>
  );
}
