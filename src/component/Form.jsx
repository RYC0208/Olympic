import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const Form = ({ formData, updateFormData, addCountry, updateCountry }) => {
  const inputFields = [
    { label: "국가명", name: "country", type: "text", placeholder: "국가 입력" },
    { label: "금메달", name: "gold", type: "number", placeholder: "0" },
    { label: "은메달", name: "silver", type: "number", placeholder: "0" },
    { label: "동메달", name: "bronze", type: "number", placeholder: "0" }
  ];

  return (
    <form className="input-group" onSubmit={addCountry}>
      {inputFields.map(({ label, name, type, placeholder }) => (
        <InputField
          label={label}
          name={name}
          value={formData[name]}
          onChange={updateFormData}
          placeholder={placeholder}
          type={type}
        />
      ))}
      <Button addCountry={addCountry} updateCountry={updateCountry} />
    </form>
  );
};

export default Form;
