export const Player = ({ fn,song }) => {
    return (
      <div>
        <button
          onClick={() => {
            fn(false, null);
          }}
          className="btn btn-success"
        >
          Back To Songs
        </button>
        <br />
        <br />
        <p>
          <div className="col-4">
            <img src={song.artworkUrl100} />
          </div>
          <p></p>
          <p>Artist Name: {song?.artistName}</p>
          <p>Song Name: {song?.trackName}</p>
        </p>
  
        <audio controls>
          {/* ? is for conditional checking .. At starting song initial value is NULL if we use . then code will brust  it will only access when it is not NULL */}
          <source src={song?.previewUrl} type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };
  