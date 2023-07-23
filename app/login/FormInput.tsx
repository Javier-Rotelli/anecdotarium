import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
const FormInput = (props: InputProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        className="input input-bordered"
        type={props.type}
        id={props.name}
        placeholder={props.placeholder ?? props.label}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormInput;
