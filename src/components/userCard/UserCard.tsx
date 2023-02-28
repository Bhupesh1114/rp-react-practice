import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "./UserCard.module.css";
import { FaUserCheck } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import TextCard from "../TextCard/TextCard";

type propTypes = {
  id?: number;
  name?: string;
  post?: string;
  avatar?: string;
  time? : string,
  description? : string,
  comment? : string,
  ngColor? : string,
  bgColor? : string,
  padding? : string,
  bannerImage? : string
};
const UserCard = ({ name, post, avatar , time, description, comment, bgColor, padding, bannerImage}: propTypes) => {
  const [sendRequest, setSendRequest] = useState(false);
  const textCardProps = {name,post,time, description,comment}
  return (
    <div className={styles.userCard}>
      <a href="">
      <img className={styles.image} src={avatar} alt="avatar" />
      </a>
      <div>
       
     <TextCard {...textCardProps} bgColor={bgColor} padding={padding}/>       
      </div>
      {comment ? null :  <button
        aria-label="send follow request"
        className={styles.plusIcon}
        onClick={() => setSendRequest(!sendRequest)}
      >
        {bannerImage ? <BsThreeDots /> :  sendRequest ? <FaUserCheck /> : <BsPlusLg />}
       
      </button>}

    </div>
  );
};

export default UserCard;
