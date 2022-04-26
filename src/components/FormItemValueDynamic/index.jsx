import "./styles.css";

export const FormItemValueDynamic = ({options}) => {

  return (
      <select className={"form-item-value-dynamic"}>
        {
            options.map(
                item => <option value={item}>{item}</option>
            )
        }
      </select>
  );
};
