import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  backgroundcolor: "white";
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: "white";
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Ali Kebab",
    icon,
    photos = [
      "https://cdn.getiryemek.com/restaurants/1620031704346_1125x522.jpeg",
    ],
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
