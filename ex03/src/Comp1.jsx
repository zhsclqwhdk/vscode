function Comp1() {
  // 변수를 설정할때 들어가는자리
  const name = "한상호";
  const student = {
    school: "트리니티",
    name: "이오치 마리",
    gender: "여성",
  };
  return (
    <>
      <h2>Hello Prana</h2>
      <h1>어서오세요 {name} 선생님!</h1>
      <h3>학생이름:{student.name}</h3>
      <h3>소속학원:{student.school}</h3>
      <h3>성별:{student.gender}</h3>
    </>
  );
}
export default Comp1;
