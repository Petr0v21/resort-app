import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = ({ active, setActive }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div
      className={active ? "modal" : "modal_active"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content" : "modal_content_active"}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <input
            type="text"
            placeholder="Имя"
            id="name"
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Номер Телефона"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button className="ButtonSendPost">Send</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
