import React from "react";
import "./Menu.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSpring, animated } from "react-spring";

function Menu({ newest, recent, handleClick }) {
  return (
    <ListGroup horizontal className="menu">
      <ListGroup.Item onClick={recent}>Popular</ListGroup.Item>
      <ListGroup.Item onClick={newest}>Upcoming</ListGroup.Item>
      <ListGroup.Item onClick={handleClick}>Best ranked</ListGroup.Item>
      <ListGroup.Item>horizontally!</ListGroup.Item>
    </ListGroup>
  );
}

export default Menu;
