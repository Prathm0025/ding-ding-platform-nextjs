import React from "react";

const Input = ({
  name,
  value,
  onChange,
  type,
  className,
  placeholder,
  icon,
}: any) => {
  return (
    <div className="w-full p-0-2vw bg-gradient-to-b from-[#E9B43F] from-[80%] via-[#F0F09B] via-[80%] to-[#C79017] to-[80%]  rounded-full overflow-hidden">
      <div className="bg-[#000000be] rounded-full">
        <div className="flex py-0-3vw px-1vw gap-0-5vw bg-gradient-to-b from-[#2B2B2BCC] from-[80%] via-[#212121CC] via-[80%] to-[#141414CC] to-[80%]  rounded-full bg-gradient-1">
          <div className="flex items-center justify-end">{icon}</div>
          <input
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className="placeholder-transparent font-medium focus:outline-none bg-gradient-to-b from-[#A98E44] via-[#F9F2DB] to-[#D7BF7C] bg-clip-text text-transparent w-full text-2vw"
            autoComplete={`new-${name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
