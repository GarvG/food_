import "./styles.css";
import React, { useState } from "react";

const Indian = ["5/5 chole Bhature", "4/5 Paw Bhaji"];

const Chinese = ["5/5 Fried Rice", "4/5 Hakka Noddles"];

const Continental = ["5/5 Au gartin", "4/5 Spagehtti"];

export default function App() {
  const [userInput, SetuserInput] = useState("");
  const [displayName, setDisplayName] = useState(Indian);

  const buttonInput = (type) => {
    if (type === "indian") {
      setDisplayName(Indian);
    }

    if (type === "chinese") {
      setDisplayName([Chinese]);
    }

    if (type === "continental") {
      setDisplayName(Continental);
    }
  };

  console.log("display", displayName);

  return (
    <div className="App">
      <h1 style={{ fontSize: "bold" }}>🥗Food</h1>

      <p style={{ fontSize: "small" }}>
        Checkout my favorite Food Cusine. Select a genre to get started
      </p>

      <div style={{ display: "flex" }}>
        <button
          onClick={() => buttonInput("indian")}
          style={{
            padding: "0.5rem 1rem",
            cursor: "pointer",
            margin: "1rem 0.3rem",
            borderRadius: "0.5rem",
            border: "1px solidblack"
          }}
        >
          Indian
        </button>
        <button
          onClick={() => buttonInput("chinese")}
          style={{
            padding: "0.5rem 1rem",
            cursor: "pointer",
            margin: "1rem 0.3rem",
            borderRadius: "0.5rem",
            border: "1px solidblack"
          }}
        >
          {" "}
          Chinese{" "}
        </button>
        <button
          onClick={() => buttonInput("continental")}
          style={{
            padding: "0.5rem 1rem",
            cursor: "pointer",
            margin: "1rem 0.3rem",
            borderRadius: "0.5rem",
            border: "1px solidblack"
          }}
        >
          {" "}
          Continental{" "}
        </button>
      </div>

      <hr style={{ Align: "center", width: "50%" }}></hr>

      <div>
        {displayName.map((name, index) => {
          return (
            <div
              style={{
                border: "1px solid #000",
                padding: "10px",
                width: "100%",
                marginBottom: "10px"
              }}
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
