import { Send } from "@material-ui/icons";

const Newsletter = () => {
  return (
    <div className="news-container">
      <div className="title"><h1>Newsletter</h1></div>
      <div className="desc">Get timely updates of your favourite products.</div>
      <div className="input-container">
        <input placeholder="Your Email" />
        <button><Send /></button>
      </div>
    </div>
  );
};

export default Newsletter;
