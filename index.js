const Button = (props) => {
  //  Write your code here.
  const { className, buttonEl } = props;
  return <button className={className}>{buttonEl}</button>;
};

const element = (
  //  Write your code here.

  <div className="bg-container">
    <h1 className="heading"> SOCIAL BUTTONS </h1>
    <div className="button-container">
      <Button className="like" buttonEl="Like" />
      <Button className="comment" buttonEl="Comment" />
      <Button className="share" buttonEl="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
