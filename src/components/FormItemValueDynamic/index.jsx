import "./styles.css";

export const FormItemValueDynamic = ({options, onChange}) => {

  return (
      <select onChange={ onChange } className={"form-item-value-dynamic"}>
        {
            options.map(
                item => <option value={item.value ? item.value : item}>{item.label ? item.label : item}</option>
            )
        }
      </select>
  );
};
