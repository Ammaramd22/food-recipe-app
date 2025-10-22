import React from "react";
import foodrecipe from "../assets/foodrecipe.jpg";
// import Recipe from "../../../../backend/models/recipe";
import Recipeitems from "../components/Recipeitems";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </h5>
          <button onClick={() => navigate("/addRecipe")}>Share Your Recipe</button>
        </div>
        <div className="right">
          <img src={foodrecipe} width="320px" height="300px"></img>
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d4f6e8"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,149.3C672,181,768,203,864,186.7C960,171,1056,117,1152,85.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="recipe">
        <Recipeitems />
      </div>
    </>
  );
}
