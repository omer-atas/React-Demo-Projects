import React from "react";

import "./Card.css";

const Card = (props) => {
  // Sarmalarken alt elemtin css özellikleri şu şekilde aktarılır - props.className kullanılır..
  const classes = "card " + props.className;

  // React da elementler html deki gibi sarmalanamaz.
  //Sarmalanan etiketteki texti props olarak diğer bileşene aktarmak amacıyla props.childreen kullanılır..
  return <div className={classes}>{props.children}</div>;
};

export default Card;
