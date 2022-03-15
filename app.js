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

  const countryHtmlCard = `
  <img src="${flag}" class="card-img-top border border-secondary" alt="Flag" />
      <div class="card-body">
        <h5 class="card-title">${countryName}</h5>
        <p class="card-text">${region}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span><i class="fas fa-2x fa-landmark"></i>${capital}</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-users"></i>${(
          population / 1_000_000
        ).toFixed(2)} M</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-comments"></i>${Object.values(
          languages
        )}</span></li>
        <li class="list-group-item">
          <span
            ><i class="fas fa-lg fa-money-bill-wave"></i>${
              Object.values(currencies)[0].name
            } ${Object.values(currencies)[0].symbol}
            </span
          >
        </li>
      </ul>
  `;

  if (type === "country") {
    const countryHtml = `
      <div class="container country">
        <div class="row justify-content-center mt-5">
          <div class="card country-card col col-sm-6 col-lg-3 py-3" >
                ${countryHtmlCard}
          </div>
        </div>
        <div class="row justify-content-start neighbour-container">
        </div>
      `;
    const main = document.querySelector("main");
    main.insertAdjacentHTML("afterbegin", countryHtml);
  } else if (type === "neighbour") {
    const neighbourHtml = `<div class="card col col-sm-6 col-lg-3 py-3 neighbour">${countryHtmlCard}</div>`;

    const neighbourDiv = document.querySelectorAll(".neighbour-container");
    neighbourDiv[0].insertAdjacentHTML("beforeend", neighbourHtml);
  }
};
