import React, { useEffect, useState } from "react";
import "./main.css";
import Cards from "./Cards";
function Main() {
  const [data, setData] = useState([]);

  async function HealthApi() {
    await fetch("http://localhost:5000/cards")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }
  useEffect(() => {
    HealthApi();
  }, []);

  return (
    <div className="mainContainer">
      {data.map((info) => (
        <Cards
          key={info._id}
          title={info.title}
          description={info.description}
        />
      ))}
    </div>
  );
}

export default Main;
