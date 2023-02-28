import React from 'react';
import { Button } from '../../styledComponents/Button';
import { MainCard } from '../../styledComponents/MainCard'
import UserCard from '../userCard/UserCard';
import styles from "./PostThoughts.module.css";
import {AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import Comments from '../Comments/Comments';
import PostData from '../PostData/PostData';

// export type commentsTypes = {
//   id? : number,
//   name : string,
//   avatar : string,
//   time : string,
//   likes : number,
//   comment : string,
//   // allReplies : []
// }

//  type propsTypes = {
//   name : string,
//   avatar : string,
//   post : string,
//   bannerImage : string,
//   description: string,
//   time : string,
//   likes : number,
//   commentsCount : number,
//   share : number,
//    comments : commentsTypes[]
// }

const PostThoughts = ({id,name, 
  avatar, post, bannerImage, 
  description, time, likes,
  commentsCount, share,comments}) => {
    const userCardProps = {name,avatar, post,time, bannerImage};
    const postDataProps = {id,likes, share, commentsCount}
  return (
    <MainCard >
     <UserCard 
      {...userCardProps}
      />
      <div className={styles.postThoughts}>
      <p className={styles.desc}>{description}</p>
      <img className={styles.image} src={bannerImage} alt="banner_image" />
      </div>
       
      {/*Post Data like and commnets*/}
      <PostData {...postDataProps}/>

     
    <Comments comments={comments}/>
     
    </MainCard>
  )

}

export default PostThoughts