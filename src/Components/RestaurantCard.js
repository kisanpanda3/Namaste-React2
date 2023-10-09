import React from "react";
import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-4 p-4 w-[270px] h-[550px] rounded-lg hover:bg-gray-300 ">
      <img
        className="h-[200px] w-[230px] rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-bold font-serif mt-2 py-3">{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime} Min</h5>
    </div>
  );
};

export default RestaurantCard;
