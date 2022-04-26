
import './styles.css'

export const FormItemValue = ({value, icon}) => {
  return <text className={'form-item-value'}>
      {value}
      <img src={icon} alt="" />
      </text>
}
