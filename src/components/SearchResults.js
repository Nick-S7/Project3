import React from 'react'

const SearchResults = (props) => {

  const options = props.results.map(r => (

    <div className="single-meal" key={r.idMeal} onClick={() =>{
      this.props.handleMeals(r.idMeal)
      this.props.history.push(`/meals:${r.strMeal}`)
  }} >
        <img src={r.strMealThumb} alt="img"/>
        <h2>{r.strMeal}</h2>  

    </div>


  ))

  return <div className="search-results">{options}</div>
}

export default SearchResults
