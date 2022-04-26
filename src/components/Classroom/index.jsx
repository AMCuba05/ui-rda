
import './styles.css'

export const Classroom = ({name, icon}) => {
  return <div className={'button-class'}>
      <text> {name} </text>
      <img src={icon} alt={''}/>
  </div>
}
