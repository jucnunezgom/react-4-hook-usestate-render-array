import React from "react";
import Person from "./Person";

export default function People({ people, setPeople }) {
  const [editingID, setEditingID] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editingPerson, setEditingPerson] = React.useState({
    id: null,
    name: "",
    role: "",
    img: "",
  });
  const [removingID, setRemovingID] = React.useState(null);
  const [isRemoving, setIsRemoving] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingPerson((currentState) => ({ ...currentState, [name]: value }));
  };

  const handleEdit = (personID) => {
    setEditingID(personID);
    setIsEditing(true);
    const personToEdit = people.find((person) => person.id === personID);
    setEditingPerson({ ...personToEdit });
  };

  const handleUpdate = () => {
    setPeople(
      people.map((person) => (person.id === editingID ? editingPerson : person))
    );
    setEditingID(null);
    setIsEditing(false);
    setEditingPerson({ id: null, name: "", role: "", img: "" });
  };

  const handleRemove = (personID) => {
    setRemovingID(personID);
    //setPeople(people.filter((person) => person.id !== personID));
  };

  const handleConfirmRemove = () => {
    setPeople(people.filter((person) => person.id !== removingID));
    setRemovingID(null);
  };

  const handleCancelRemove = () => {
    setRemovingID(null);
  };

  const handleCreate = () => {
    people.push({
      id: people.length + 1,
      ...editingPerson,
    });
    setPeople(people);
    setEditingPerson({ id: null, name: "", role: "", img: "" });
  };

  return (
    <div className="flex-column justify-content-center align-items-center mt-5">
      <h2 className="text-center">IT Team</h2>
      <div className="flex-container mt-5">
        {people.map((person) => {
          return (
            <Person
              person={person}
              key={person.id}
              handleEdit={() => handleEdit(person.id)}
              handleRemove={() => handleRemove(person.id)}
              modalID="remove-modal"
            />
          );
        })}
      </div>

      <div className="mt-4 row gap-3 text-center">
        <h2>{isEditing ? "Update" : "Create"}</h2>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Name"
          value={editingPerson.name}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="text"
          name="role"
          placeholder="Role"
          value={editingPerson.role}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="text"
          name="img"
          placeholder="Image URL"
          value={editingPerson.img}
          onChange={handleChange}
        />
        <div>
          <button
            className="btn btn-primary"
            onClick={isEditing ? handleUpdate : handleCreate}
          >
            {isEditing ? "Update" : "Create"}
          </button>
        </div>
      </div>

      <div
        id="remove-modal"
        className="modal fade"
        tabIndex="-1"
        style={{ color: "black" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Remove</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="close"
                onClick={handleCancelRemove}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Are you you sure you want to remove{" "}
                {people.find((person) => person.id === removingID)?.name}?
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCancelRemove}
              >
                No, go back
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleConfirmRemove}
              >
                Yes, remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
