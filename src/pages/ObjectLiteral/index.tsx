import React, { useEffect, useState } from "react";
import data from "../../services/api.json";
import { DataType } from "../../type";

export default function ObjectLiteral() {
  const [value, setValue] = useState(JSON.stringify(data));
  const [objResult, setObjResult] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    fetch("http://localhost:9000/fstest/objectLiteral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: value,
    })
      .then((res) => res.text())
      .then((res) => setObjResult(res));
  };

  return (
    <div className="container">
      <h2>objectLiteral</h2>
      <form id="get_url_form" onSubmit={handleSubmit} method="POST">
        <label htmlFor="textarea">New object:</label> &nbsp;&nbsp;&nbsp;
        <textarea
          name="textarea"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          //   style={{ width: 450 }}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        <b>Result:</b> {objResult}
      </div>
      <br />
      <a href="/">GetUrlParams</a>
    </div>
  );
}
