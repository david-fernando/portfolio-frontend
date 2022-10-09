import SliderCard from "./SliderCard"
import Card from "./Card"

function Freelance(){
    const item = {
        title: 'J2PISOS',
        description: 'Instalação e manutenção de pisos laminados e pisos vinílicos.' ,
        image: '/j2pisos.png'
    }

    return (
        <SliderCard title="Freelance">
            <a href='https://jdoispisos.com.br/' target="_blank" rel="noreferrer" >
                <Card data={ item }/>
            </a>
        </SliderCard>
      )
}

export default Freelance