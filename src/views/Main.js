import Navbar from "../components/Navbar";
import About from "../components/About";

const Main = () => {
  return (
    <div className="container">
      <div style={{ minHeight: "10vh" }}>
        <Navbar />
      </div>
      <div style={{maxHeight: "90vh"}}>
        <About />
      </div>
    </div>
  );
};

export default Main;
