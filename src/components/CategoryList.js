import React, { Component } from 'react'

export default class categoryList extends Component {
    
 
    render() {
        console.log(this.props)
        const categories = this.props.categoryList.map(el => 

        <div className="single-category" key={el.idCategory} onClick={() =>{
            this.props.handleCategories(el.strCategory)
            this.props.history.push(`/meals/${el.strCategory}`)
        }}>

        

        <img src={el.strCategoryThumb} alt="food icon"></img>

        <h2> {el.strCategory}</h2>
        
        </div>
        
        
        )

        return (
            <div className="App">

            
                <div className="home-comp">
                    <div className="header">
                    
                    <img src='possible-header-3.png' alt='header-img'/>
                    <div className="text-banner">
                   <p>Search for Recipes, Meals,<br/> and New Ideas on What to Cook Next!</p>
                    </div>
                    </div>
                    


                    <p className="categories-banner">-All Categories-</p>
                <div className='all-food'>

                
                    {categories}
                </div>
            </div>
               

           
                

            </div>
        );
    }
}
