import React from "react";
import Button from "./common/Button";
const CountryList = ({ countries, setCountries }) => {
  const sortedCountries = [...countries].sort((a, b) => {
    if (b.gold !== a.gold) return b.gold - a.gold;
    if (b.silver !== a.silver) return b.silver - a.silver;
    return b.bronze - a.bronze;
  });

  const deleteCountry = () => {
    sortedCountries.map((country) => {
      const filteredCountry = sortedCountries.filter((c) => c !== country);
      setCountries(filteredCountry);
    });
  };

  return (
    <div>
      {sortedCountries.length === 0 ? (
        <p>등록된 국가가 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {sortedCountries.map((country, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#e0e0e0f8" : "#f7f7f7f8",
                }}
              >
                <td>{country.country}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td>
                  <Button text="삭제" onClick={deleteCountry}></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CountryList;
