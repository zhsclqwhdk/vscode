const Param2 = () => {
  const [params] = useSearchParams();
  const q = params.get("q");
  const page = params.get("page");
  return (
    <>
      <h2>Param2.jsx</h2>
      <h3>
        전달받은 값: {q}, {page}
      </h3>
    </>
  );
};
export default Param2;
