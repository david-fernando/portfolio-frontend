import SliderCard from './SliderCard'
import Card from './Card'

function MediumArticles({ dataMedium }){
  
  return (
    <SliderCard title="Artigos no Medium">
    {
      dataMedium.map((item, index)=>(
        <a key={index} href={item.link} target="_blank" rel="noreferrer" >
          <Card data={ item }/>
        </a>
      ))
    }
    </SliderCard>
  )
}

export default MediumArticles