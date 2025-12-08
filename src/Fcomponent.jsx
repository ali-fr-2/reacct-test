import React, { forwardRef, useEffect, useRef, useState } from "react";

let counter = 0;

const Fcomponent = (prop,ref) => {
  const [name, setName] = useState("");
  // const myInput = useRef();

  const handleChangeName = () => {
    setName(ref.current.value);
  };
  // useEffect(() => {
  //   myInput.current.focus();
  // }, []);

  return (
    <div className="form-fa-group text-center mt-4 p-3">
      <h4 className="text-center text-dark">word</h4>

      <input
        ref={ref}
        type="text"
        className="form-control"
        autoComplete="off"
      />

      <button className="btn btn-warning my-3" onClick={handleChangeName}>
        submit
      </button>

      <button
        className="btn btn-secondary my-3 mx-2"
        onClick={() => {
          ref.current.value = "";
        }}
      >
        hidden
      </button>

      <br />

      <span>{counter++}</span>
    </div>
  );
};
export default forwardRef(Fcomponent);
