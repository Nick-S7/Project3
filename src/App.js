import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import CategoryList from './components/CategoryList.js'
import { Switch, Route } from 'react-router-dom';
import MealsPage from './components/MealsPage.js';
import MealDetails from './components/MealDetails.js';
import SearchBar from './components/SearchBar.js';
import Navbar from './components/NavBar'


export default class App extends Component {

  state ={
    categoryList: [],
    category: "",
    selectedCategory:"",
    meal:"",
    selectedMeal:"",
  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => {
        console.log(response)
        this.setState({categoryList: response.data.categories})
    })
    .catch(error => {
      // handle error
      console.log(error);
    });


}

handleCategories = (category) => {
  this.setState({selectedCategory: category})
}

handleMeals = (meal) => {
  this.setState({selectedMeal : meal})
}



  render() {


    return (
      <div className="App">
  <div className="app-background">
      <Navbar/>
      

        <Switch>

          <Route exact path='/' render={ (props) => <CategoryList {...props} handleCategories = {this.handleCategories} categoryList={this.state.categoryList} selectedCategory={this.state.selectedCategory}/>} />

          <Route exact path={`/meals/${this.state.selectedCategory}`} render={(props) => <MealsPage  {...props} handleMeals = {this.handleMeals} selectedCategory={this.state.selectedCategory}/> }/>

          <Route exact path={`/meals:${this.state.selectedMeal}`} render={(props) => <MealDetails {...props} selectedMeal={this.state.selectedMeal}/>}/>

          <Route exact path='/search' render={(props) => <SearchBar {...props} handleMeals = {this.handleMeals} selectedMeal={this.state.selectedMeal}/>}/>

        </Switch>
  </div>

      </div>
    )
  }
}
