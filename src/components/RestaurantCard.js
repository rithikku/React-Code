import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;

  const {cloudinaryImageId, 
    name, 
    cuisines, 
    avgRating, 
    costForTwo, 
    deliveryTime} = resData?.data;

    return (
        <div className="restaurant-card" style={{backgroundColor : "#f0f0f0"}}>

          <img className="restaurant-logo" src={CDN_URL
           + cloudinaryImageId}/>

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    );
};

export default RestaurantCard;