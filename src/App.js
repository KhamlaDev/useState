import React, { useState } from "react";

import "./App.css";

function App() {
  // create state: addCount:

  // variable : let, var, const

  // state = ນໍາໄປໃຊ້ງານ
  // setState = ຕັ້ງຄ່າໃຫມ່ໃສ
  // useState(initial value) = initial value ຫຼື ຄ່າ default : ຄ່າເລີ່ມຕົ້ນທີ່ກຳນົດໄວ້

  const [state, setState] = useState("ຄຳເເພງ");

  // const [state, setState] = React.useState("ຄຳເເພງ");

  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(23423);
  const [state3, setState3] = useState([]);

  let value = "ຄຳຫຼ້າ";

  // ວິທິ 2:

  const onClick = () => {
    setState("ChorYang");
  };

  // ວິທິ 3:
  const onClickParams = (param) => {
    setState(param);
  };

  // ໂຈດທີ 2:

  const [isShow, setIsShow] = useState(true);

 
  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <button
        style={{ width: "100px", height: "60px", color: "red" }}
        // ວິທິ 1: onClick={() => setState("ChorYang")}

        // ວິທິ 2:  onClick={onClick}

        // ວິທິ 3:

        onClick={() => onClickParams("ChorYang")}
      >
        ສະເເດງ ChorYang
      </button>

      <button
        style={{ width: "100px", height: "60px", color: "green" }}
        onClick={() => setState("YongThao")}
      >
        ສະເເດງ YongThao
      </button>

      <h1 style={{ flexDirection: "row", alignItems: "center" }}>
        ສະເເດງຊື່: {state} (state)
      </h1>

      <h1 style={{ flexDirection: "row", alignItems: "center" }}>
        ສະເເດງຊື່: {value} (variable)
      </h1>
      <button
        style={{ width: "100px", height: "60px", color: "green" }}
        onClick={() => {
          value = "ອ້າຍຄຳກ້ຽງ";
          console.log({ value });
        }}
      >
        reset
      </button>

      <hr />

      <button
        style={{ width: "100px", height: "60px", color: "green" }}
        onClick={() => setIsShow(false)}
        hidden={isShow}
      >
        ຮູບ 1
      </button>

      <button
        style={{ width: "100px", height: "60px", color: "green" }}
        onClick={() => setIsShow(true)}
     
      >
         ຮູບ 2
      </button>
      


    </div>
  );
}

export default App;
