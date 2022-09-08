import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import Info from "./Info";
import Videos from "./Videos";

const Results = () => {
  const [
    channelId,
    setChannelId,
    videoId,
    setVideoId,
    apiKey,
    resultsNumber,
    setResultsNumber,
  ] = useOutletContext();
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const channelInp = document.querySelector("#channelId");
    const videoInp = document.querySelector("#videoId");
    const resultsInp = document.querySelector("#resultsNumber");

    channelInp.setAttribute("disabled", true);
    videoInp.setAttribute("disabled", true);
    resultsInp.setAttribute("disabled", true);

    return function () {
      if (!(channelInp && videoInp && resultsInp)) return;

      channelInp.removeAttribute("disabled");
      videoInp.removeAttribute("disabled");
      resultsInp.removeAttribute("disabled");
    };
  }, []);

  useEffect(() => {
    if (videoId) {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
      )
        .then(async (res) => {
          if (res.status >= 400)
            throw new Error("Error occured when getting video data.");

          return res.json();
        })
        .then((result) => {
          setChannelId(result.items[0].snippet.channelId);
        })
        .catch((error) => console.log(`An error has occured - ${error}`));
    }

    if (channelId) {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${resultsNumber}&key=${apiKey}`
      )
        .then(async (res) => {
          if (res.status >= 400)
            throw new Error(
              "Error occured when getting channel data and setting videos."
            );

          return res.json();
        })
        .then((result) => {
          setVideos(result.items);
        })
        .catch((error) => console.log(`An error has occured - ${error}`));

      fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
      )
        .then(async (res) => {
          if (res.status >= 400)
            throw new Error("Error occured when setting channel.");

          return res.json();
        })
        .then((result) => {
          setChannel(result);
          setIsLoaded(true);
        })
        .catch((error) => console.log(`An error has occured - ${error}`));
    }
  }, []);

  if (videos.length !== 0) {
    let result = 0;
    for (let item of videos) {
      result += 1;

      if (item.id.kind === "youtube#channel") result -= 1;
    }

    setResultsNumber(result);
  }

  if (isLoaded) {
    return (
      <div className="results">
        <Info channel={channel} resultsNumber={resultsNumber} />
        <Videos videos={videos} />
      </div>
    );
  }
};

export default Results;
