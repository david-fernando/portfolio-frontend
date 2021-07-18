import styles from '../styles/components/CardSkills.module.css'

function CardSkills({children}) {
  return (
    <div className={styles.cardSkillsContainer}>
      {
        children
      }
    </div>
  )
}

export default CardSkills