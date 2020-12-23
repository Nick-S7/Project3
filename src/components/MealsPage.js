import React, { Component } from 'react'
import axios from 'axios'

export default class MealsPage extends Component {
    
    state = {
        mealsList:[],
        selectedMeal: "",

    }


    componentDidMount(){
        if (!this.props.selectedCategory) {
            this.props.history.push('/')
        }
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.selectedCategory}`)
        .then(response => {
            console.log(response)
            this.setState({mealsList : response.data.meals})
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    

   }
   

    render() {
      
        
        const meals = this.state.mealsList.map(el =>
            <div className="single-category" key={el.idMeal} onClick={() =>{
                this.props.handleMeals(el.idMeal)
                this.props.history.push(`/meals:${el.strMeal}`)
            }} >
                
                <img src={el.strMealThumb} alt="food icon"></img>
                <h3>{el.strMeal}</h3>
            </div>
            
            
            
            
            )
        return (
            <div className="meals-page">

                <div className="categories-banner">
                <p> -Recipes for {this.props.selectedCategory}-</p>
                </div>

                <div className="all-meals">

                {meals}
                </div>
            </div>
        )
    }
}
