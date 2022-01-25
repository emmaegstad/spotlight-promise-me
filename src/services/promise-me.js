/**
 * TODO: write a fetch request to an API url using .then()
 * TODO: write a fetch request to an API url using async/await
 */

export async function fetchData() {
  const data = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const parsedData = await data.json();
  console.log('fetchData', parsedData);
}

export function fetchDataWithThen() {
  fetch('https://ponball.herokuapp.com/api/v1/machines')
    .then((data) => data.json())
    .then((parsedData) => console.log('fetchDataWithThen', parsedData));
}

/**
 * TODO: Return a list of titles
 */

export async function fetchTitles() {
  const data = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const parsedData = await data.json();
  const titleList = parsedData.map((item) => item.title);
  console.log('fetchTitles', titleList);
}

export function fetchTitlesWithThen() {
  fetch('https://ponball.herokuapp.com/api/v1/machines')
    .then((data) => data.json())
    .then((parsedData) => parsedData.map((item) => item.title))
    .then((titleList) => console.log('fetchTitlesWithThen', titleList));
}

/**
 * TODO: Filter by manufacturer (Bally Manufacturing Corporation)
 */

export async function filterByManufacturer() {
  const data = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const parsedData = await data.json();
  const filteredManufacturers = parsedData.filter(
    (item) => item.manufacturer === 'Bally Manufacturing Corporation'
  );
  console.log('filterByManufacturer', filteredManufacturers);
}

export function filterByManufacturerWithThen() {
  fetch('https://ponball.herokuapp.com/api/v1/machines')
    .then((data) => data.json())
    .then((parsedData) =>
      parsedData.filter(
        (item) => item.manufacturer === 'Bally Manufacturing Corporation'
      )
    )
    .then((titleList) =>
      console.log('filterByManufacturerWithThen', titleList)
    );
}

/**
 * TODO: Write fetch requests using both methods to the Cat Facts
 */

export async function fetchCatFacts() {
  const data = await fetch('https://cat-fact.herokuapp.com/facts');
  const parsedData = await data.json();
  console.log('fetchCatFacts', parsedData);
}

export function fetchCatFactsWithThen() {
  fetch('https://cat-fact.herokuapp.com/facts')
    .then((data) => data.json())
    .then((parsedData) => console.log('fetchCatFactsWithThen', parsedData));
}
