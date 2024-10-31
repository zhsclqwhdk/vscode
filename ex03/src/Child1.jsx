function Child1(props) {
  console.log(props);
  return (
    <>
      <h2>Child1.jsx</h2>
      <h2>전달된 값: {props.p2}</h2>
    </>
  );
}
export default Child1;
