const renderCountry = (data, type = "country") => {
  // const flag = data.flag.svg;
  // const countryName = data.name.common;
  // const region = data.region;
  // const capital = data.capital;
  // const population = data.population;
  // const language = data.languages;
  // const currencies = data.currencies;

  const {
    region,
    population,
    capital,
    languages,
    currencies,
    name: { common: countryName },
    flags: { svg: flag },
  } = data;
};
