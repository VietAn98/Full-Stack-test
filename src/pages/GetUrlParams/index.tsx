import React, { useState } from "react";

export default function GetUrlParams() {
  const [value, setValue] = useState("");
  const [objResult, setObjResult] = useState({});
  const patternString = "staticOne/:paramOne/staticTwo/:paramTwo/:paramThree";
  const patternString2 = "staticOne/:paramOne/Static2/:paramTwo/:paramThree";

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setObjResult(getUrlParams(value));
    // console.log(getUrlParams(value));
  };

  const getUrlParams = (path: string) => {
    const arrPath = path.split("/");
    const arrPattern = path.includes("Static2") ? patternString2.split("/") : patternString.split("/");
    const objResultTmp = {};

    if (arrPath && arrPath.length > 0) {
      arrPattern.map((element, index) => {
        if (element === arrPath[index] && !element.includes(":")) {
          Object.assign(objResultTmp, {
            [`${arrPattern[index + 1].replace(":", "")}`]: arrPath[index + 1],
          });
        }
        return objResultTmp;
      });
    }
    return objResultTmp;
  };

  return (
    <div className="container">
      <h2>getUrlParams</h2>
      <form id="get_url_form" onSubmit={handleSubmit}>
        <label htmlFor="pathString">pathString:</label> &nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="pathString"
          name="pathString"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: 450 }}
        />
        <button type="submit">Extract</button>
      </form>
      <br />
      <div>
        <b>Result:</b> {JSON.stringify(objResult)}
      </div>
      <br />
      <a href="/objectLiteral">ObjectLiteral</a>
    </div>
  );
}
