import React from "react";
import UserCard from "../userCard/UserCard";
import data from "../../data.json";
import { Button } from "../../styledComponents/Button";
import { MainCard } from "../../styledComponents/MainCard";

const FollowCard = () => {
  return (
    <MainCard>
      <h2 className="mainHeading">Who to follow</h2>
      <div className="cardsContainer">
      {data?.followers?.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
      </div>

      <Button
        textAlign="center"
        hover="hover"
        href=""
        aria-label="View more persons"
        bgColor="#E7F0FD"
        color="#0F6FEC"
      >
        View more
      </Button>
    </MainCard>
  );
};

export default FollowCard;
