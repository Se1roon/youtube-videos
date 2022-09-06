import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import Info from "./Info";
import Videos from "./Videos";

const Results = () => {
  const [channelId, setChannelId, videoId, setVideoId, apiKey] =
    useOutletContext();
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.querySelector("#channelId").setAttribute("disabled", true);
    document.querySelector("#videoId").setAttribute("disabled", true);

    return function () {
      if (
        !(
          document.querySelector("#channelId") &&
          document.querySelector("#videoId")
        )
      )
        return;

      document.querySelector("#channelId").removeAttribute("disabled");
      document.querySelector("#videoId").removeAttribute("disabled");
    };
  });

  useEffect(() => {
    if (videoId) {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setChannelId(result.items[0].snippet.channelId);
        });
    }

    if (channelId) {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=16&key=${apiKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setVideos(result.items);
        });

      fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setChannel(result);
          setIsLoaded(true);
        });
    }
  }, []);

  if (isLoaded) {
    return (
      <div className="results">
        <Info channel={channel} resultsNumber={16} />
        <Videos videos={videos} />
      </div>
    );
  }
};

export default Results;
