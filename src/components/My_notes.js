import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "./Form";
import swal from "sweetalert";

const My_notes = (props) => {
  const [notes, setnotes] = useState([]);

  const deletenote = (e, ele) => {
    axios
      .delete(`http://dct-user-auth.herokuapp.com/api/notes/${ele._id}`, {
        headers: { "x-auth": localStorage.getItem("token") },
      })
      .then((response) => {
        const data1 = notes.filter((ele) => {
          if (ele._id != response.data._id) {
            return ele;
          }
        });
        setnotes(data1);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const popup = (e, ele) => {
    swal("my note", ele.body);
  };

  const addnote = (data) => {
    axios
      .post("http://dct-user-auth.herokuapp.com/api/notes", data, {
        headers: { "x-auth": localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        setnotes([{ ...result }, ...notes]);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    axios
      .get("http://dct-user-auth.herokuapp.com/api/notes", {
        headers: { "x-auth": localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        setnotes(result);
      });
  }, []);

  return (
    <div>
      {notes.length > 0 ? (
        <div>
          <h1>Total notes are-{notes.length}</h1>
          <ul>
            {notes.map((ele) => {
              return (
                <li key={ele._id}>
                  <p
                    onClick={(e) => {
                      popup(e, ele);
                    }}
                  >
                    {ele.body}
                  </p>
                  <button
                    onClick={(e) => {
                      deletenote(e, ele);
                    }}
                  >
                    delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <h1>No notes found</h1>
          <h2>Add notes</h2>
        </div>
      )}
      <Form addnote={addnote} />
    </div>
  );
};
export default My_notes;
