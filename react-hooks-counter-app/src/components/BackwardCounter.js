import UseCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  const counter = UseCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
