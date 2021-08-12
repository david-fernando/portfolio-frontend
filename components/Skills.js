import { SiHtml5, SiCss3, SiTypescript, SiNodeDotJs, SiReact, SiNextDotJs, SiElectron, SiJavascript } from 'react-icons/si'

import SliderCard from './SliderCard'
import CardSkills from './CardSkills'

function Skills(){
  return (
    <SliderCard title="Habilidades">
      <CardSkills>
        <span><SiHtml5 size={34} />&nbsp; HTML5</span>
        <span><SiCss3 size={34} />&nbsp; CSS3</span>
        <span><SiJavascript size={34} />&nbsp; JavaScript</span>
        <span><SiNodeDotJs size={34} />&nbsp; NodeJS</span>
      </CardSkills>
      <CardSkills>
        <span><SiTypescript size={34} />&nbsp; TypeScript</span>
        <span><SiReact size={34} />&nbsp; ReactJS</span>
        <span><SiNextDotJs size={34} />&nbsp; NextJS</span>
        <span><SiElectron size={34} />&nbsp; Electron</span>
      </CardSkills>
    </SliderCard>
  )
}

export default Skills