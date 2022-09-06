const Video = ({ video }) => {
  return (
    <div className="videos__item">
      <img src={video.snippet.thumbnails.medium.url} alt="Miniature" />
      <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
        Check Out!
      </a>
    </div>
  );
};

export default Video;
