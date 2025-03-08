import React, { useEffect, useState } from 'react';
import '../styles/CategoriesHome.css';
import heroImg1 from '../images/hero-img1.png';
import heroImg2 from '../images/hero-img2.png';
import heroImg3 from '../images/hero-img3.png';
import heroImg4 from '../images/hero-img4.png';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CategoriesHome = () => { // ✅ Correct component declaration
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchItems();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      setCategories(response.data.categories);
      console.log(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian'
      );
      setItems(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-categories-container" id="popular">
      <div className="popular-categories-body">
        <h3>Most Popular Categories</h3>
        <p>
          Be sure not to miss out the categories of these most popular
          categories. Enjoy trying them out!
        </p>

        {categories.length > 0 ? (
          <div className="popular-categories">
            {categories.slice(0, 9).map((category, index) => (
              <div
                className="popular-category"
                key={index}
                onClick={() => navigate(`/category/${category.strCategory}`)}
              >
                <img src={category.strCategoryThumb} alt="" />
                <span>
                  <h4>{category.strCategory}</h4>
                  <p>View All Recipes</p>
                </span>
              </div>
            ))}
          </div>
        ) : (
          "Loading"
        )}
      </div>

      <div className="popular-dishes-body" id="recipies">
        <h3>Trending Dishes</h3>

        {items.length > 8 ? (
          <div className="popular-dishes">
            <span className="dishes-small">
              {[6, 7, 8].map((index) => (
                <div
                  className="popular-dish"
                  key={index}
                  onClick={() => navigate(`/recipie/${items[index].idMeal}`)}
                >
                  <img src={items[index].strMealThumb} alt="" />
                  <p>{items[index].strMeal}</p>
                </div>
              ))}
            </span>

            <span className="dishes-big">
              {[0, 5].map((index) => (
                <div
                  className="popular-dish"
                  key={index}
                  onClick={() => navigate(`/recipie/${items[index].idMeal}`)}
                >
                  <img src={items[index].strMealThumb} alt="" />
                  <p>{items[index].strMeal}</p>
                </div>
              ))}
            </span>

            <span className="dishes-small">
              {[2, 3, 4].map((index) => (
                <div
                  className="popular-dish"
                  key={index}
                  onClick={() => navigate(`/recipie/${items[index].idMeal}`)}
                >
                  <img src={items[index].strMealThumb} alt="" />
                  <p>{items[index].strMeal}</p>
                </div>
              ))}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CategoriesHome;
