import React, { Component } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  getInfo = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.query}`
      )
      .then(({ data }) => {
        this.setState({
          results: data.meals,
        });
      });
  };

  handleInputChange = (e) => {
    const query = e.target.value;
    this.setState({
      query,
    });
    if (query && query.length > 1) {
      if (query.length % 2 === 0) {
        this.getInfo();
      }
    } else if (!query) {
    }
  };

  render() {
    return (
      <div className="search-page">
            
               
            <div className="search">
            <h3>-Search For Recipes-</h3>
                <form>
                    <input
                     className="search-field"
                     placeholder="Search"
                     onChange={this.handleInputChange}
                     />
                </form>
            </div>
            

            <div className="search-results">
            <SearchResults {...this.props} results={this.state.results} handleMeals = {this.props.handleMeals} selectedMeal={this.props.selectedMeal} />
            </div>
      </div>
    );
  }
}

export default Search;
