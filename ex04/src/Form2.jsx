import { useState } from "react";

function Form2() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    email: "",
  });
  const inputUpdate = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
    // profile 변수를 가져와 변경된 부분만 수정해줌(전개연산자)
    setProfile({
      ...profile,
      [name]: value,
    });
    console.log(profile);
  };
  return (
    <>
      <h2>Form2.jsx</h2>
      이름:
      <input type="text" name="name" onChange={inputUpdate} />
      <br />
      나이:
      <input type="text" name="age" onChange={inputUpdate} />
      <br />
      이메일:
      <input type="text" name="email" onChange={inputUpdate} />
    </>
  );
}
export default Form2;
