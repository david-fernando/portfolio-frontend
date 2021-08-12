import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si'
import { IoIosPaper } from 'react-icons/io'

import styles from '../styles/components/SocialLink.module.css'

function SocialLink(){
  const iconSize = 16

  return (
    <span className={styles.socialLink}>
    <a href="http://github.com/david-fernando" target="_blank" rel="noreferrer" >
      <SiGithub className="icon-link" size={iconSize} />
      <span>GitHub</span>
    </a>
    <a href="https://www.linkedin.com/in/david-fernando-souza/" target="_blank" rel="noreferrer" >
      <SiLinkedin className="icon-link" size={iconSize} />
      <span>Linkedin</span>
    </a>
    <a href="http://medium.com/david-fernando" target="_blank" rel="noreferrer" >
      <SiMedium className="icon-link" size={iconSize} />
      <span>Medium</span>
    </a>
    <a href="/curriculo-desenvolvedor-frontend.pdf" target="_blank" rel="noreferrer" >
      <IoIosPaper className="icon-link" size={iconSize} />
      <span>Currículo</span>
    </a>
  </span>
  )
}

export default SocialLink