import React from "react";
type Props = {
  type?: string;
  name?: string;
  placeholder?: string;
} & React.HTMLProps<HTMLInputElement>;

const Input = ({ type, name, placeholder }: Props): React.ReactElement => {
  return (
    <div className="w-[500px] mb-6">
      <input
        className="w-full appearance-none rounded-lg bg-white border-2 p-[13px] h-[44px] border-secGray "
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
