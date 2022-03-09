import React from "react";

export default function Album(props) {
  return (
    <div className="album">
      <img src={props.albumCover} alt="Album-cover" className="album_img" />
      <div className="album_info">
        <p>{props.albumTitle}</p>
        <p>{props.album}</p>
        <span className="album_category">{props.artist}</span>
      </div>
    </div>
  );
}
