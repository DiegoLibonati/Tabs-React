import React from "react";

export const ButtonExp = ({ company, index, setValue, value, setOpacity }) => {
  const handleCompany = () => {
    setOpacity(0);

    setTimeout(() => {
      setOpacity(1);
      setValue(index);
    }, 400);
  };

  return (
    <>
      <button
        className={`job-btn ${index === value && "active"}`}
        onClick={() => handleCompany()}
      >
        {company}
      </button>
    </>
  );
};
