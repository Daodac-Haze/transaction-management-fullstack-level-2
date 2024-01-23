import { Element } from "../types/types";

const FormElement = ({ label, id, dataType, type, ...rest }: Element) => {
  return (
    <div className="form-input-container">
      {label && (
        <label className="form-label" htmlFor={dataType}>
          {label}
        </label>
      )}
      <input
        {...rest}
        type={type}
        id={id}
        name={dataType}
        data-type={dataType}
      />
    </div>
  );
};

export default FormElement;
