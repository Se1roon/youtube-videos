import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import InputGroup from "./InputGroup";
import getData from "../data";

const Search = () => {
  const [channelId, setChannelId] = useState("");
  const [videoId, setVideoId] = useState("");
  const [resultsNumber, setResultsNumber] = useState(16);
  const [apiKey, setApiKey] = useState(getData().apiKey);

  const handleChannelIdChange = (event) => {
    setChannelId(event.target.value);
  };

  const handleVideoIdChange = (event) => {
    setVideoId(event.target.value);
  };

  const handleResultsChange = (event) => {
    let value = event.target.value;
    if (!value) return;

    value = value <= 0 ? 16 : value;
    value = value > 20 ? 20 : value;
    setResultsNumber(value);
  };

  return (
    <main className="search">
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
        onResultsChange={handleResultsChange}
      />
      <Outlet
        context={[
          channelId,
          setChannelId,
          videoId,
          setVideoId,
          apiKey,
          resultsNumber,
          setResultsNumber,
        ]}
      />
    </main>
  );
};

export default Search;
