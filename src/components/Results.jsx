import { useOutletContext } from "react-router";
import { useEffect } from "react";

const Results = () => {
  const [channelId, setChannelId, videoId, setVideoId] = useOutletContext();

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

  return (
    <div>
      <p>{channelId}</p>
      <p>{videoId}</p>
    </div>
  );
};

export default Results;
