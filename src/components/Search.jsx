import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import InputGroup from "./InputGroup";

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
      <Outlet context={[channelId, setChannelId, videoId, setVideoId]} />
    </main>
  );
};

export default Search;
