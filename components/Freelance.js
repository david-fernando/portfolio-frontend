import classnames from "classnames"
import Card from "./Card"

import styles from '../styles/components/Freelance.module.css'

function Freelance(){
    const item = {
        title: 'J2PISOS',
        description: 'Instalação e manutenção de pisos laminados e pisos vinílicos.' ,
        image: '/j2pisos.png'
    }

    return (
        <span className={styles.container}>
            <span className={classnames(styles.freelanceTitle, 'title')}>Freelance</span>
            <a href='https://jdoispisos.com.br/' target="_blank" rel="noreferrer" >
                <Card data={ item }/>
            </a>
        </span>
      )
}

export default Freelance