function Freelance(){
    const item = {
        title: 'J2PISOS',
        description: 'Instalação e manutenção de pisos laminados e pisos vinílicos.' ,
        image: ''
    }

    return (
        <SliderCard title="Projetos">
        {
          gitData.map((item, index)=>(
            <a key={index} href='https://jdoispisos.com.br/' target="_blank" rel="noreferrer" >
              <Card data={ item }/>
            </a>
          ))
        }
        </SliderCard>
      )
}

export default Freelance