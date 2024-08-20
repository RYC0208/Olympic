import React from "react";
import { useState } from "react";
import AddCountryForm from "./AddCountryForm";
import CountryList from "./CountryList";

const OlympicMedalRecorder = () => {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const updateFormData = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "country" ? value : Number(value),
    }));
  };

  const addCountry = (event) => {
    event.preventDefault();
    const findCountry = countries.find((c) => c.country === formData.country);

    if (!formData.country || formData.country.trim() === "") {
      alert("국가명이 빈칸입니다.");
    } else if (findCountry) {
      alert("이미 등록된 국가명입니다.");
      initialize();
    } else {
      setCountries([...countries, formData]);
      initialize();
    }
  };
  const updateCountry = () => {
    const findCountry = countries.find((c) => c.country === formData.country);
    if (findCountry) {
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.country === formData.country ? { ...c, ...formData } : c
        )
      );
      initialize();
    } else {
      alert("등록되지 않은 국가이며, 국가를 추가해주세요.");
    }
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
      <AddCountryForm
        formData={formData}
        updateFormData={updateFormData}
        addCountry={addCountry}
        updateCountry={updateCountry}
      />
      <CountryList countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default OlympicMedalRecorder;
