const Info = ({ channel, resultsNumber }) => {
  return (
    <header className="info">
      <p className="link-underline">
        Showing {resultsNumber} videos of channel{" "}
        <span>
          <a
            href={`https://www.youtube.com/channel/${channel.items[0].id}`}
            target="_blank"
          >
            {channel.items[0].snippet.title}
          </a>
        </span>
      </p>
      <div className="info-img">
        <img
          src={channel.items[0].snippet.thumbnails.medium.url}
          alt="Avatar of the channel"
        />
      </div>
    </header>
  );
};

export default Info;
