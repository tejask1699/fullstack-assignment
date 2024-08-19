import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Searchbar from "../../components/main/Searchbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";

function Home() {
  return (
    <div className="Container">
      <header>
        <Header />
      </header>
      <section>
        <Searchbar />
      </section>
      <article className="articleContainer">
        <Main />
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
