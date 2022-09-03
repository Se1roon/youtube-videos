import Input from "./Input";
import Button from "./Button";

const InputGroup = () => {
  return (
    <div className="input-group">
      <Input options={{ placeholder: "Channel ID", Id: "channelId" }} />
      <Input options={{ placeholder: "Video ID", Id: "videoId" }} />
      <Button content={"Search"} path="/search" />
    </div>
  );
};

export default InputGroup;
