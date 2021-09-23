import React, { useState } from "react";

const Form = (props) => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [err, seterr] = useState(false);
  const { addnote } = props;

  const handel_change = (e, identifyer) => {
    if (identifyer == "value") {
      settitle(e.target.value);
    } else {
      setbody(e.target.value);
    }
  };

  const handel_Submit = (e) => {
    e.preventDefault();
    const data = { title: title, body: body };
    if (data.title.length == 0) {
      seterr(true);
    } else {
      seterr(false);
      settitle("");
      setbody("");
      addnote(data);
    }
  };

  return (
    <div>
      <form onSubmit={handel_Submit}>
        <input
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(e) => {
            handel_change(e, "value");
          }}
        />
        <br />
        {err && <p style={{ color: "red" }}>Title can't be blank</p>}
        <input
          type="text-area"
          value={body}
          placeholder="Enter ur note"
          onChange={handel_change}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Form;
