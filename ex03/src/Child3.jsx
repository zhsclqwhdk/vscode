function Child3(props) {
  const { p1, p2, p3, student } = props;
  return (
    <>
      <h2>Child3.jsx</h2>
      <h2>{p1}</h2>
      <h2>{p2}</h2>
      <h2>{p3}</h2>
      <h2>{student.name}</h2>
      <h2>{student.age}</h2>
    </>
  );
}
export default Child3;
