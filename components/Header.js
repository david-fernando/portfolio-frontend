import Image from 'next/image'
import SocialLink from './SocialLink'

import photo from '../public/photo.jpeg'

import styles from '../styles/components/Header.module.css'

function Header(){
  return (
    <div className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <Image src={photo} layout="fill" className={styles.image} alt="David Fernando" />
      </div>
      <div className={styles.profile}>
        <span>David Fernando</span>
        <span className="title" >Desenvolvedor Frontend</span>
        <span className={styles.about}>
          Tenho formação técnica em WebDesign pela Microcamp. Considerado um dos melhores alunos da escola, nunca tirei notas abaixo de oito. Atualmente trabalho em projetos pessoais com React JS e Electron.
        </span>
        <SocialLink />
      </div>
    </div>
  )
}

export default Header