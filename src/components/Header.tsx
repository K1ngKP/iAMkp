import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="grid md:grid-cols-3 gap-10 p-8 lg:px-10 xl:px-16 sticky top-0 z-10"
      style={{
        height: "15vh",
        background: "rgba(16, 9, 29, 0.95)",
      }}
    >
      <div className="col-1 align-center justify-center flex">
        <h3 className="logo text-fuchsia-400 text-3xl xl:text-5xl tracking-wide text-center self-center xl:text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
          I'm Kaushik/
        </h3>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
