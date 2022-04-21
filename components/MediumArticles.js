import Carousel from './Carousel'

function MediumArticles({ dataMedium }){
  
  return (
    <Carousel title="Artigos no Medium" slides={dataMedium} />
  )
}

export default MediumArticles