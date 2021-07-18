import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si'

import styles from '../styles/components/SocialLink.module.css'

function SocialLink(){
  return (
    <span className={styles.socialLink}>
    <a href="http://github.com/david-fernando" target="_blank" rel="noreferrer" >
      <SiGithub className="icon-link" size={16} />
      <span>&nbsp; Github</span>
    </a>
    <a href="https://www.linkedin.com/in/david-fernando-9790311b1/" target="_blank" rel="noreferrer" >
      <SiLinkedin className="icon-link" size={16} />
      <span>&nbsp; Linkedin</span>
    </a>
    <a href="http://medium.com/david-fernando" target="_blank" rel="noreferrer" >
      <SiMedium className="icon-link" size={16} />
      <span>&nbsp; Medium</span>
    </a>
  </span>
  )
}

export default SocialLink