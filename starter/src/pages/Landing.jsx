import axios from 'axios';
import React from 'react'
 import CocktailList from '../components/CocktailList';
import { useLoaderData } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
// we are fetching using loader from landing page but its not compulsory.
// whatever value added to the = sign on the api will be our search term & we will tell the api to look for those cocktails in the search terms
const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// import { useQuery } from '@tanstack/react-query';
  
// request is the property name, to handle search request cos we want search to show on landing page thats why we are handling it here
export const loader = async ({ request }) => {
  //The url is a javascript functionality
  const url = new URL(request.url)
  
  const searchTerm = url.searchParams.get('search') || "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  // console.log(response)
  //the data will return as an object
   return {drinks:response.data.drinks,searchTerm}
};

const Landing = () => {
  //we destructure, drinks and searchTerm
  const {drinks, searchTerm} = useLoaderData();
  // console.log(drinks)
  return (
    <>
      <SearchForm searchTerm={searchTerm}/>
      {/* we pass the drinks as props into the cocktail list */}
      <CocktailList drinks={ drinks} />
    </>
  );
}

export default Landing
