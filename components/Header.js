import Image from 'next/image'
import SocialLink from './SocialLink'

import photo from '../public/photo.jpeg'

import styles from '../styles/components/Header.module.css'

function Header(){
  return (
    <header className={styles.headerContainer}>
      <span>
        <div className={styles.imageContainer}>
          <Image src={photo} layout="responsive" className={styles.image} alt="David Fernando" />
        </div>
        <div className={styles.profile}>
          <span>David Fernando</span>
          <span className="title" >Desenvolvedor Frontend</span>
          <span className={styles.about}>
          Estudei web design na Microcamp. Considerado um dos melhores alunos da escola, nunca tirei notas abaixo de oito. Atualmente trabalhando apenas com projetos pessoais, mas em busca de novos desafios.
          </span>
        <span className={styles.mobileLink}>
  /        <SocialLink />
        </span>
        </div>
      </span>
        <div className={styles.desktopLink}>
          <SocialLink />
        </div>
    </header>
  )
}

export default Header