import React from "react";
import { MainCard } from "../../styledComponents/MainCard";
import data from "../../data.json";
import styles from "./NewsCard.module.css";
import { BsThreeDots } from "react-icons/bs";
import TextCard from "../TextCard/TextCard";

const NewsCard = () => {
  return (
    <MainCard>
      <h2 className="mainHeading">Today's news</h2>
      {data?.todayNews?.map(news => {
        return <TextCard {...news} key={news.id} list="none"/>
      })}
      <a aria-label="open this news" className={styles.link} href=""><BsThreeDots /> View all latest news</a>
    </MainCard>
  );
};

export default NewsCard;
 