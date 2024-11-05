import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h2>Home.jsx</h2>
      <Link
        to={{
          pathname: "/param/1",
        }}
      >
        path variable 전송
      </Link>
      <Link
        to={{
          pathname: "/param",
          search: "q=react&page=10",
        }}
      >
        query string 전송
      </Link>
      {/* 간단버전 */}
      <Link to="/param/10">path parameter</Link>
      <Link to="/param?q=안녕&page=20">query string</Link>
    </>
  );
};
export default Home;
