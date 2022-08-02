import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Ali Kebab",
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return <Text>{name}</Text>;
};
