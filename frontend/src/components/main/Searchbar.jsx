import React, { useState } from "react";
import "./searchbar.css";
import "./cards.css";

import Modal from "react-modal";
import { ArrowForward } from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";

function Searchbar() {
  const [search, setSearch] = useState("");
  const [cardData, setcardData] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "1px solid black",
      transform: "translate(-50%, -50%)",
      background: "#dadbf0",
    },
  };
  function closeModal() {
    setIsOpen(false);
  }

  async function SearchValue() {
    if (search === "") {
      toast.error("Enter the value");
      return;
    } else {
      await fetch("http://localhost:5000/cards/" + search).then((resp) => {
        resp.json().then((result) => {
          if (result.message === "Card not found") {
            toast.error("This is an error!");
          } else {
            setcardData(result);
            setIsOpen(true);
          }
        });
      });
    }
  }
  return (
    <div className="searchbarContainer">
      <div className="searchbarHeader">
        <h1 className="searchbarHeaderText">How can we help?</h1>
      </div>
      <div className="searchbar">
        <button onClick={SearchValue} className="searchbarButton">
          <ArrowForward />
        </button>
        <Toaster position="top-right" />
        <input
          className="searchbarInput"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <div className="cardContainer">
          <div className="card-body">
            <h2 className="card-title">{cardData.title}</h2>
            <hr className="cardHr" />
            <p className="card-content">{cardData.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Searchbar;
