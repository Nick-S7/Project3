import React, { Component } from "react";
import axios from "axios";

export default class MealDetails extends Component {
  state = {
    singleMeal: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.selectedMeal}`
      )
      .then((response) => {
        console.log(response);
        this.setState({ singleMeal: response.data.meals });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  render() {
    const detailedMeal = this.state.singleMeal.map((el) => (
      <div className="detail">
        <div className="details-page" key={el.idMeal}>
          <div className="detail-img">
            <img src={el.strMealThumb} alt="food icon"></img>
            <h3>{el.strMeal}</h3>
          </div>

          <div className="iAndM">
            <div className="ingredients">
              <h3>-Ingredients-</h3>
              <p>{el.strIngredient1}</p>
              <p>{el.strIngredient2}</p>
              <p>{el.strIngredient3}</p>
              <p>{el.strIngredient4}</p>
              <p>{el.strIngredient5}</p>
              <p>{el.strIngredient6}</p>
              <p>{el.strIngredient7}</p>
              <p>{el.strIngredient8}</p>
              <p>{el.strIngredient9}</p>
            </div>
            <div className="measurements">
              <h3>-Measurements-</h3>
              <p>{el.strMeasure1}</p>
              <p>{el.strMeasure2}</p>
              <p>{el.strMeasure3}</p>
              <p>{el.strMeasure4}</p>
              <p>{el.strMeasure5}</p>
              <p>{el.strMeasure6}</p>
              <p>{el.strMeasure7}</p>
              <p>{el.strMeasure8}</p>
              <p>{el.strMeasure9}</p>
            </div>
          </div>
        </div>
        <div className="instructions">
          <p>{el.strInstructions}</p>
        </div>
      </div>
    ));

    return <div>{detailedMeal}</div>;
  }
}
