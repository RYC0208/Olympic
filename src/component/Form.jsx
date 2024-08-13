import React from "react";
import Button from "./Button";

const Form = ({ formData, updateFormData, addCountry, updateCountry }) => {
  return (
    <form className="input-group" onSubmit={addCountry}>
      <div className="input-field">
        <label>국가명</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={updateFormData}
          placeholder="국가 입력"
        />
      </div>
      <div className="input-field">
        <label>금메달</label>
        <input
          type="number"
          name="gold"
          value={formData.gold}
          onChange={updateFormData}
          placeholder="0"
        />
      </div>
      <div className="input-field">
        <label>은메달</label>
        <input
          type="number"
          name="silver"
          value={formData.silver}
          onChange={updateFormData}
          placeholder="0"
        />
      </div>
      <div className="input-field">
        <label>동메달</label>
        <input
          type="number"
          name="bronze"
          value={formData.bronze}
          onChange={updateFormData}
          placeholder="0"
        />
      </div>
      <Button addCountry={addCountry} updateCountry={updateCountry} />
    </form>
  );
};

export default Form;
