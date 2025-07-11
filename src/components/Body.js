import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import reslist from "../utils/mockData";

const Body = () => {

    // local State Varibale - Super Powerful Variable
    // Array destructuring 
    const [listOfRestaurants, setListOfRestaurant] = useState([
    {
      type: 'restaurant',
      data: {
        id: '334475',
        name: 'KFC',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '3.8',
      },
    },
    {
      type: 'restaurant',
      data: {
        id: '334476',
        name: 'Dominos',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '4.8',
      },
    },
    {
      type: 'restaurant',
      data: {
        id: '334477',
        name: 'McDonals',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '4.2',
      },
    },
  ]);


    // Normal javascript variable 
    let listOfRestaurantsJS = [
    {
      type: 'restaurant',
      data: {
        id: '334475',
        name: 'KFC',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '3.8',
      },
    },
    {
      type: 'restaurant',
      data: {
        id: '334476',
        name: 'Dominos',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '4.8',
      },
    },
    {
      type: 'restaurant',
      data: {
        id: '334477',
        name: 'McDonals',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: '4.2',
      },
    },
  ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    // fiter logic
                    const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4
                );
                setListOfRestaurant(filteredList);
            }}
                >Top Rated Restaurant</button>
            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.data.id} resData ={restaurant}/>
                ))}
            </div>
        </div>
    );
};

export default Body;