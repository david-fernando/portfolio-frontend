import Carousel from './Carousel'

function Projects({ gitData }){
  return (
    <Carousel title="Projetos" slides={gitData} />
  )
}

export default Projects