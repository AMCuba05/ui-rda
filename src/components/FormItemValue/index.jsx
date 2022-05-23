
import './styles.css'

export const FormItemValue = ({value, icon, onClickIcon}) => {
  return <text className={'form-item-value'}>
      {value}
      <img src={icon} alt="" onClick={onClickIcon} />
      </text>
}
