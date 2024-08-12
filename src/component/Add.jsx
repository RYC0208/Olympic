import React from "react";
import { useState } from "react";

import Button from "./Button";
import List from "./List";

const Add = () => {
  // 국가들, 국가, 메달 수
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [medals, setMedals] = useState({
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const handleAddCountry = (event) => {
    event.preventDefault();
    const duplicateCheck = countries.find((c) => c.country === country);

    if (!country || country.trim() === "") {
      alert("국가명이 빈칸입니다.");
      return;
    }
    if (duplicateCheck) {
      alert("이미 등록된 국가명입니다.");
      return;
    }
    // 정보 상태에 추가
    setCountries([...countries, { country, ...medals }]);
    // 초기화
    initialize();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMedals((Medals) => ({
      ...Medals,
      [name]: Number(value),
    }));
  };

  const handleUpdate = () => {
    const findCountry = countries.find((c) => c.country === country);
    if (findCountry) {
      const updatedCountries = countries.map((c) =>
        c.country === country
          ? {
              ...c,
              gold: medals.gold,
              silver: medals.silver,
              bronze: medals.bronze,
            }
          : c
      );
      setCountries(updatedCountries);
      initialize();
    } else {
      alert("등록되지 않은 국가입니다.");
      initialize();
    }
  };

  const initialize = () => {
    setCountry("");
    setMedals({ gold: 0, silver: 0, bronze: 0 });
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <form className="input-group" onSubmit={handleAddCountry}>
        <div className="input-filed">
          <label>국가명</label>
          <input
            type="text"
            placeholder="국가 입력"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="input-filed">
          <label>금메달</label>
          <input
            type="number"
            placeholder="0"
            name="gold"
            value={medals.gold}
            onChange={handleChange}
          />
        </div>
        <div className="input-filed">
          <label>은메달</label>
          <input
            type="number"
            placeholder="0"
            name="silver"
            value={medals.silver}
            onChange={handleChange}
          />
        </div>
        <div className="input-filed">
          <label>동메달</label>
          <input
            type="number"
            placeholder="0"
            name="bronze"
            value={medals.bronze}
            onChange={handleChange}
          />
        </div>
        <Button
          handleAddCountry={handleAddCountry}
          handleUpdate={handleUpdate}
        />
      </form>
      <List countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default Add;
