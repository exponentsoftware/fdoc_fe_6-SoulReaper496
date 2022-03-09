import React, { Component } from "react";
import "./App.css";
import Albums from "./Components/Albums.js";

class App extends Component {
  state = {
    albums: [
      {
        id: 0,
        artist: "Doja Cat, The Weeknd",
        album: "Planet Her",
        albumCover:
          "https://upload.wikimedia.org/wikipedia/pt/1/16/Planet_Her_-_Doja_Cat.png",
        songs: "",
      },
      {
        id: 1,
        artist: "Nicki Minaj",
        album: "Pink Friday: Roman Reloaded – The Re-Up",
        albumCover:
          "https://4.bp.blogspot.com/-K9AD48T1N2c/UKvwwIkRTnI/AAAAAAAANLU/Ne1R8u6gHuE/s1600/Nicki-Minaj-Pink-Panther.jpg",
        songs: "",
      },
      {
        id: 2,
        artist: "The Weeknd",
        album: "After Hours",
        albumCover:
          "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
        songs: "",
      },
      {
        id: 3,
        artist: "Ariana Grande",
        album: "Positions",
        albumCover:
          "https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png",
        songs: "",
      },
      {
        id: 4,
        artist: "One Direction",
        album: "Four",
        albumCover:
          "https://upload.wikimedia.org/wikipedia/en/d/d1/One_Direction_-_Night_Changes_Single_Cover.png",
        songs: "",
      },
      {
        id: 5,
        artist: "The Chainsmokers",
        album: "Collage",
        albumCover:
          "https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png",
        songs: "",
      },
    ],
  };
  render() {
    return (
      <>
        <div className="container">
          <h1 className="album-heading">Albums</h1>
          <div className="albums">
            <Albums albums={this.state.albums} artist={this.state.artist} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
