import React, { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  function handleAddList() {
    const newItem = document.getElementById("listItem").value;
    document.getElementById("listItem").value = "";
    setList((l) => [...l, newItem]);
  }
  function handleRemoveList(index) {
    setList((l) => list.filter((_, i) => i !== index));
  }
  function handleCompleteList(index) {
    setCompletedList;

    handleRemoveList(index);
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To do List</h1>
        <ul>
          {list.map((list, index) => (
            <li key={index}>
              {list}{" "}
              <button onClick={() => handleCompleteList(index)}>done</button>
              <button onClick={() => handleRemoveList(index)}>Remove</button>
            </li>
          ))}
        </ul>

        <input type="text" id="listItem" placeholder="Add New Item" />
        <button onClick={handleAddList}>Add Item</button>
      </div>
    </>
  );
}

export default ToDoList;
