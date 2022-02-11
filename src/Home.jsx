import React from "react";
import "./Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://unade.edu.mx/wp-content/uploads/2021/03/ventajas-y-desventajas-del-ecommerce.jpg"
            alt="ecommerce"
            className="home__image"
          />
          <div className="home__row">
            <Product 
            id="1"
            title="Targeal 7.1 Surround Sound Gaming Headset for PS4 PS5 Switch PC Laptop Tablet, Over Ear Wired USB Gaming Headphones with Omni-Directional Noise Canceling Mic, RGB LED Light,Without Type C Cable"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Dka2FNWQL._AC_UY218_.jpg"
            />
            <Product 
            id="2"
            title="Amazon Basics Racing/Gaming Style Office Chair - Green"
            price={92.24}
            rating={4}
            image="https://m.media-amazon.com/images/I/91H2qnSpARL._AC_UL320_.jpg"
            />
          </div>
          <div className="home__row">
            <Product 
            id="3"
            title="Fiodio Rainbow Membrane Gaming Keyboard, Quiet Wired Computer Keyboard, 104 Silent Keys, 26 Anti-Ghosting Keys, Spill Resistant, Multimedia Control for PC and Desktop"
            price={30.74}
            rating={4}
            image="https://m.media-amazon.com/images/I/71z6gsI87bL._AC_UY218_.jpg"
            />
            <Product 
            id="4"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
            price={59.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
            />
            <Product 
            id="5"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={299}
            rating={5}
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UL320_.jpg"
            />
          </div>
          <div className="home__row">
            <Product 
            id="6"
            title="Pokémon Assorted Cards, 50 Pieces"
            price={7.75}
            rating={5}
            image="https://m.media-amazon.com/images/I/61VJWSztDcL._AC_UL320_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
