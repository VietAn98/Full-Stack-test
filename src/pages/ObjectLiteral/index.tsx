import React, { useState } from "react";
import data from "../../services/api.json";
import { DataType } from "../../type";

export default function ObjectLiteral() {
  const [value, setValue] = useState(JSON.stringify(data));
  const [objResult, setObjResult] = useState({});

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(objectLiteral(JSON.parse(value)));
  };
  const isDataType = (obj: DataType) => {
    return (obj as DataType).id && (obj as DataType).count && (obj as DataType).name;
  };

  const objectLiteral = (target: DataType) => {
    const source = JSON.parse(value);
    console.log(isDataType(target));

    // Object.keys(source).map(prop=>{
    //     if()
    // });
  };

  return (
    <div className="container">
      <h2>objectLiteral</h2>
      <form id="get_url_form" onSubmit={handleSubmit}>
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
        <b>Result:</b> {JSON.stringify(objResult)}
      </div>
    </div>
  );
}
