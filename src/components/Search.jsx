import { useState } from "react";
import Header from "./Header";
import InputGroup from "./InputGroup";
import Button from "./Button";

const Search = () => {
  const [channelId, setChannelId] = useState("");
  const [videoId, setVideoId] = useState("");

  const handleChannelIdChange = (event) => {
    setChannelId(event.target.value);
  };

  const handleVideoIdChange = (event) => {
    setVideoId(event.target.value);
  };

  return (
    <main className="search circle-anim">
      <Header
        content={
          <h1>
            Search for <span>Videos!</span>
          </h1>
        }
      />
      <InputGroup
        onChannelIdChange={handleChannelIdChange}
        onVideoIdChange={handleVideoIdChange}
      />
    </main>
  );
};

export default Search;
