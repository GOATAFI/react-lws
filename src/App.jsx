import { useState } from "react";

let nextId = 0;

const List = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  return (
    <div>
      <h1>Sculptures: </h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button
        onClick={() => {
          setArtists([ { id: nextId++, name: name }
          , ...artists,
          ]);
          console.log(artists);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
