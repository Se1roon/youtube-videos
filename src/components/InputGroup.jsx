import Input from "./Input";
import Button from "./Button";

const InputGroup = ({ onChannelIdChange, onVideoIdChange }) => {
  return (
    <div className="input-group">
      <Input
        options={{ placeholder: "Channel ID", Id: "channelId" }}
        onChange={onChannelIdChange}
      />
      <Input
        options={{ placeholder: "Video ID", Id: "videoId" }}
        onChange={onVideoIdChange}
      />
      <Button content={"Search"} path="/search" />
    </div>
  );
};

export default InputGroup;
