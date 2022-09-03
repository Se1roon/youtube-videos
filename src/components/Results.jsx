import { useOutletContext } from "react-router";

const Results = () => {
  const [channelId, setChannelId, videoId, setVideoId] = useOutletContext();
  return (
    <div>
      <p>{channelId}</p>
      <p>{videoId}</p>
    </div>
  );
};

export default Results;
