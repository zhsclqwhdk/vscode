import { useState } from "react";

function Form1() {
  const [name, setName] = useState(""); // 초기값을 문자로 주기위해 ""로 설정
  const [age, setAge] = useState(0);
  const inputName = (e) => {
    console.log("함수호출");
    console.log(e.target.value);
    setName(e.target.value);
  };
  /*const inputAge = (a) => {
    setAge(a.target.value);
  };*/
  return (
    <>
      <h2>Form1.jsx</h2>
      이름:
      <input type="text" onChange={inputName} />
      나이:{""}
      <input type="text" onChange={(e) => setAge(e.target.value)} />
      <br />
      입력한이름:{name}
      <br />
      입력한나이:{age}
    </>
  );
}
export default Form1;
