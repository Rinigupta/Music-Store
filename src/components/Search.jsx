import { useRef } from "react";

export const Search = ( {fn}) => {
  const artist = useRef();  // Used to Get Value from the field
  return (
    <>
      <label>Artist Name</label>
      <input
        ref={artist}
        type="text"
        className="form-control"
        placeholder="Search Artist"
      />
      <button
        className="btn btn-success"
        onClick={() => {
          fn(artist.current.value);
        }}
      >
        Search
      </button>
    </>
  );
};
