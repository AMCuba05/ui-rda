import "./styles.css";

export const FormItemValueDynamic = ({options, onChange}) => {

  return (
      <select onChange={ onChange } className={"form-item-value-dynamic"}>
        {
            options.map(
                item => <option value={item}>{item}</option>
            )
        }
      </select>
  );
};
