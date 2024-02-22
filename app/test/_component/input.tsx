"use client";

interface InputProp {
  // name: string;
  value?: string;
  setValue: (value: string) => void;
  id: string;
  placeholder?: string;
}

export const Input = ({ id, placeholder, value, setValue }: InputProp) => {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full h-8 rounded-md outline-none focus:ring focus:ring-slate-900 focus:ring-offset-0 transition mb-2"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
