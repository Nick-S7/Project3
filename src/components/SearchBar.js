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
            <div className="search-img">
                <img src='/search-header1.jpg' alt="search-img"/>
            <div className="search">
                <form>
                    <input
                     className="search-field"
                     placeholder="Search for ...."
                     onChange={this.handleInputChange}
                     />
                </form>
            </div>
            </div>

            <div className="search-results">
            <SearchResults {...this.props} results={this.state.results} handleMeals = {this.props.handleMeals} selectedMeal={this.props.selectedMeal} />
            </div>
      </div>
    );
  }
}

export default Search;
