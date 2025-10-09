import "./Message.css";
import "../Box/Box.css";

function Message({ elementFoundStatus }) {
  let messageObj = {
    text: "",
    styles: "d-none",
  };

  switch (elementFoundStatus) {
    case null:
      messageObj.text = "";
      messageObj.styles = "d-none";
      break;

    case true:
      messageObj.text = "Found";
      messageObj.styles = "element-found in-range";
      break;

    case false:
      messageObj.text = "Not Found";
      messageObj.styles = "element-not-found not-in-range";
      break;
    default:
      break;
  }

  return (
    <div className={`message-container box ${messageObj.styles}`}>
      <h2>{messageObj.text}</h2>
    </div>
  );
}

export default Message;
