import React, { useState } from "react";
import axios from "../../../api/Index";
import "./Create.css";
const initials = {
  name: "",
};

function Create() {
  const [data, setData] = useState(initials);
  const handleCreate = (e) => {
    e.preventDefault();
    axios.post("/products", data);
  };
  return (
    <div>
      <form onSubmit={handleCreate} action="">
        <input
          placeholder="Home ga tushadi"
          className="inp"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
        />
        <button className="btn_s">Submit</button>
      </form>
    </div>
  );
}

export default Create;
