import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Idly",
    description: "Famous South Indian food! !",
    price: 10,
  },
  {
    id: "m2",
    name: "Dosa",
    description: "A Favourite of south Indians !",
    price: 65,
  },
  {
    id: "m3",
    name: "Chicken Biriyani",
    description: "Delicious & Most wanted Food !",
    price: 120,
  },
  {
    id: "m4",
    name: "Pongal",
    description: "Healthy...and Delicious...",
    price: 25,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id }
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
