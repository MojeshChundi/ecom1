import React from "react";
import { Button, Stack } from "react-bootstrap";

function ItemList(props) {
  const price = props.price.toFixed(2);
  return (
    <div>
      <Stack gap={2}>
        <h3>{props.title}</h3>
        <div>{<img src={props.imageUrl} alt="img" />}</div>
        <div>${price}</div>
      </Stack>
      <Button>Add To Cart</Button>
    </div>
  );
}

export default ItemList;
