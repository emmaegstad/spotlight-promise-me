import { useEffect } from 'react';
import {
  fetchData,
  fetchDataWithThen,
  fetchTitles,
  fetchTitlesWithThen,
  filterByManufacturer,
  filterByManufacturerWithThen,
  fetchCatFacts,
  fetchCatFactsWithThen,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchData();
    fetchDataWithThen();
    fetchTitles();
    fetchTitlesWithThen();
    filterByManufacturer();
    filterByManufacturerWithThen();
    fetchCatFacts();
    fetchCatFactsWithThen();
  }, []);

  return <h1>Hello World</h1>;
}
