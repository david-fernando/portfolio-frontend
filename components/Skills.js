import { SiHtml5, SiCss3, SiTypescript, SiNodedotjs, SiReact, SiNextdotjs, SiElectron, SiJavascript } from 'react-icons/si'

import SliderCard from './SliderCard'
import CardSkills from './CardSkills'

function Skills(){
  const iconSize = 34

  return (
    <SliderCard title="Habilidades">
      <CardSkills>
        <span><SiHtml5 size={iconSize} />&nbsp; HTML5</span>
        <span><SiCss3 size={iconSize} />&nbsp; CSS3</span>
        <span><SiJavascript size={iconSize} />&nbsp; JavaScript</span>
        <span><SiNodedotjs size={iconSize} />&nbsp; NodeJS</span>
      </CardSkills>
      <CardSkills>
        <span><SiTypescript size={iconSize} />&nbsp; TypeScript</span>
        <span><SiReact size={iconSize} />&nbsp; ReactJS</span>
        <span><SiNextdotjs size={iconSize} />&nbsp; NextJS</span>
        <span><SiElectron size={iconSize} />&nbsp; Electron</span>
      </CardSkills>
    </SliderCard>
  )
}

export default Skills