import React from 'react'
import { MainCard } from '../../styledComponents/MainCard';
import styles from "./ProfileCard.module.css";
import data from "../../data.json";
import { Button } from '../../styledComponents/Button';
import TextCard from '../TextCard/TextCard';

const allButtonsData = [
    {
        title : "Feed",
        icon : "https://social.webestica.com/assets/images/icon/home-outline-filled.svg"
    },
    {
        title : "Connections",
        icon : "https://social.webestica.com/assets/images/icon/person-outline-filled.svg"
    },
    {
        title : "Latest News",
        icon : "https://social.webestica.com/assets/images/icon/earth-outline-filled.svg"
    },
    {
        title : "Events",
        icon : "https://social.webestica.com/assets/images/icon/calendar-outline-filled.svg"
    },
    {
        title : "Groups",
        icon : "https://social.webestica.com/assets/images/icon/chat-outline-filled.svg"
    },
    {
        title : "Notifications",
        icon : "https://social.webestica.com/assets/images/icon/notification-outlined-filled.svg"
    },
    {
        title : "Settings",
        icon : "https://social.webestica.com/assets/images/icon/cog-outline-filled.svg"
    }
]

const ProfileCard = () => {
    const {bannerImage,avatar, name, post, description, postFollowersData} = data.userDetails;
    const textCardProps = {name, post, fontSize:"19px"}
  return (
    <MainCard padding="0px">
     <div className={styles.imageContainer}>
        <img className={styles.banner} src={bannerImage} alt="bg-image" />
        <a href="">
        <img className={styles.avatar} src={avatar} alt="user_pic" />
        </a>
     </div>
     <div className={styles.details}>
        <TextCard {...textCardProps} textCenter="center"/>
        <p className={styles.desc}>{description}</p>
        <div className={styles.post_followers}>
            {postFollowersData?.map(item => {
                return  <div key={item.id} className={styles.data}>
                <h6 className={styles.number}>{item.number}</h6>
                <small className={styles.text}>{item.title}</small>
            </div>
            })}
     </div>
     </div>

<div className={styles.allBtns}>
{allButtonsData.map((btn, index) => {
    return <Button href='' key={index} fontSize="15px" >
        <img className='icon' src={btn.icon} alt="logo" />
       {btn.title}
    </Button>
})}  
</div>
<Button href='' textAlign="center" color="#0F6FEC" topBorder='1px solid #E9E6E6'>View Profile</Button>
    </MainCard>
  )
}
 
export default ProfileCard