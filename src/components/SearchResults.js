import React from 'react'

const SearchResults = (props) => {

  console.log(props)
  const options = props.results.map(r => (

    <div className="single-meal" key={r.idMeal} onClick={() =>{
      props.handleMeals(r.idMeal)
      props.history.push(`/meals:${r.strMeal}`)
  }} >
        <img src={r.strMealThumb} alt="img"/>
        <h2>{r.strMeal}</h2>  

    </div>

//commit check for display
  ))

  return <div className="search-results">{options}</div>
}

export default SearchResults
