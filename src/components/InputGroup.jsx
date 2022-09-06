import Input from "./Input";
import Button from "./Button";

const InputGroup = ({
  onChannelIdChange,
  onVideoIdChange,
  onResultsChange,
}) => {
  return (
    <div className="input-group">
      <Input
        options={{ placeholder: "Channel ID", Id: "channelId", type: "text" }}
        onChange={onChannelIdChange}
      />
      <Input
        options={{ placeholder: "Video ID", Id: "videoId", type: "text" }}
        onChange={onVideoIdChange}
      />
      <Input
        options={{
          placeholder: "Max results (max: 20)",
          Id: "resultsNumber",
          type: "number",
        }}
        onChange={onResultsChange}
      />
      <Button content={"Search"} path="results" />
    </div>
  );
};

export default InputGroup;
