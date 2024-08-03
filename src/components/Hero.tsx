import "./styles/Hero.css";

const Hero = () => {
  return (
    <div
      id="hero-section"
      className="items-center mt-24 sm:mt-40 xl:mt-44 mb-96 mx-3 md:mx-28 lg:mx-32 xl:ml-52 xl:mr-28"
      style={{
        zIndex: "10",
      }}
    >
      <h2 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        i write code to
      </h2>
      <h2
        className="moving-gradient text-6xl md:text-7xl lg:text-8xl xl:text-9xl inline"
        style={{
          letterSpacing: "10",
        }}
      >
        make a change
      </h2>
      <div className="divider-line py-10 h-10 flex items-center gap-2 lg:gap-6 xl:gap-8">
        <div
          className="flex-shrink-1 hidden sm:flex"
          style={{
            width: "30vw",
            height: "8px",
            background: "linear-gradient(90deg, #e45ffd 0%, #542cf9 100%)",
          }}
        ></div>
        <div className="flex-grow-0 inline-flex flex-basis-content">
          <h3
            className="text-white text-2xl sm:text-3xl xl:text-5xl tracking-wide xl:tracking-widest"
            style={{
              fontFamily: "Tabular, monospace",
              borderRight: "3px solid",
              width: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              animation:
                "typing 2s steps(13) infinite alternate, cursor 0.4s step-end infinite alternate",
            }}
          >
            &lt;developer/&gt;&nbsp;
          </h3>
        </div>
      </div>
      <div
        className="text-xl text-white sm:text-2xl xl:text-2xl mb-6"
        style={{ fontFamily: "Tabular, monospace" }}
      >
        Think I'm a great fit for you? ✨ Reach out to me here: 📩
        <a href="mailto:kaushikpattnaik24@gmail.com">kaushikpattnaik24@gmail.com</a>
      </div>
      <a
        href="https://drive.google.com/file/d/14UcLioZH_v_UG-2BUgzWs-o0Vyq8lODB/view?usp=sharing"
        target="_blank"
        className="resume-btn text-xl xl:text-3xl px-4 xl:px-6 py-2 xl:py-3 text-white font-bold rounded-lg xl:rounded-2xl border-l border-t border-fuchsia-200"
      >
        <div
          className="inline-block"
          style={{
            fontFamily: "ClashDisplay-Medium",
            letterSpacing: "2px",
          }}
        >
          Résumé
        </div>
      </a>
    </div>
  );
};

export default Hero;
