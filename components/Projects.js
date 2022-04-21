import SliderCard from './SliderCard'
import Carousel from './Carousel'
import Card from './Card'

function Projects({ gitData }){
  
  return (
    <Carousel title="Projetos" slide={gitData} />
  )
}

export default Projects