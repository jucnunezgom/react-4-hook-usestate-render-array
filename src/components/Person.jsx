import React from "react";

export default function Person({
  person: { name, role, img },
  handleEdit,
  handleRemove,
  modalID,
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={img} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{role}</p>
        <div>
          <button className="btn btn-success me-2" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={handleRemove}
            data-bs-toggle="modal"
            data-bs-target={`#${modalID}`}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
