
import './styles.css'

export const Classroom = ({name, icon}) => {
  return <div className={'button-class'}>
      <text className={'classroom-name'}> {name} </text>
      <img src={icon} alt={''}/>
  </div>
}
