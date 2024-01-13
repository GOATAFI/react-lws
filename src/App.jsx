import { useState } from "react";

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];


const List = () => {
  // const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);
  return (
    <div>
      <h1>Sculptures: </h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}
          <button onClick={()=>{
            setArtists(
              artists.filter(a => a.id !== artist.id)
            )
          }}>
            Delete
          </button>
          </li>
        ))}
      </ul>
      {/* <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default List;
