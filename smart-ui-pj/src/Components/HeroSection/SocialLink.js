import React from "react";
import {HeroSocialLink, HeroSocialImg} from './HeroElements'

const SocialLink = (props) => {
    return (
      <HeroSocialLink upwork={props.upwork} href={props.href} target='_blank'>
        <HeroSocialImg src={props.icon} alt="icon"/>
        {props.text}
      </HeroSocialLink>
    )
};

export default SocialLink;