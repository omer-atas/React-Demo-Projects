import UseCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = UseCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
