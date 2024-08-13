import React from "react";
import { useState } from "react";
import Form from "../component/Form";
import List from "../component/List";

const Add = () => {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  // 중복되어서 따로 분리
  const findCountry = countries.find((c) => c.country === formData.country);

  const addCountry = (event) => {
    event.preventDefault();

    if (!formData.country || formData.country.trim() === "") {
      alert("국가명이 빈칸입니다.");
      return;
    }
    if (findCountry) {
      alert("이미 등록된 국가명입니다.");
      return;
    }
    setCountries([...countries, formData]);
    initialize();
  };

  const updateFormData = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "country" ? value : Number(value),
    }));
  };

  const updateCountry = () => {
    if (findCountry) {
      setCountries((prevCountries) => 
        prevCountries.map((c) =>
          c.country === formData.country ? { ...c, ...formData } : c 
        )  
      );
    } else {
      alert("등록되지 않은 국가입니다.");
    }
    initialize();
  };

  const initialize = () => {
    setFormData({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <Form
        formData={formData}
        updateFormData={updateFormData}
        addCountry={addCountry}
        updateCountry={updateCountry}
      />
      <List countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default Add;
