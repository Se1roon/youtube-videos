import Video from "./Video";

const Videos = ({ videos }) => {
  return (
    <section className="videos">
      {videos.map((video, index) => {
        if (video.id.kind === "youtube#video")
          return <Video key={index} video={video} />;
      })}
    </section>
  );
};

export default Videos;
