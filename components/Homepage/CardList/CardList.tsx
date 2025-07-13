import React from "react";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className="flex-5">
      <h1 className="text-4xl font-bold my-10">Recent Posts</h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
