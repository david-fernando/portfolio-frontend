import SliderCard from './SliderCard'
import Card from './Card'

function Projects({ gitData }){
  
  return (
    <SliderCard title="Projetos">
    {
      gitData.map((item, index)=>(
        <a key={index} href={item.link} target="_blank" rel="noreferrer" >
          <Card data={ item }/>
        </a>
      ))
    }
    </SliderCard>
  )
}

export default Projects