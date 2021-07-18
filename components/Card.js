import styles from '../styles/components/Card.module.css'

function Card({ data }){

  return (
    <div className={styles.cardContainer}>
      <span className={styles.cardImage} style={{backgroundImage: `url(${data.image})`}} />
      <div className={styles.info}>
        <span className="about">{ data.title }</span>
        <span className="description">{ data.description }</span>
      </div>
    </div>
  )
}

export default Card