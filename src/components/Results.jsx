import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";

const Results = () => {
  const [channelId, setChannelId, videoId, setVideoId, apiKey] =
    useOutletContext();
  const [videos, setVideos] = useState([]);

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
    if (videoId && !channelId) {
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
    }
  }, []);

  return (
    <div>
      <p>{channelId}</p>
      <p>{videoId}</p>
    </div>
  );
};

export default Results;