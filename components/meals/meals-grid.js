import MealItem from './meal-item'
import classes from './meals-grid.module.css'

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map(() => {
        ;<li key={meal.id}>
          <MealItem {...meals} />
        </li>
      })}
    </ul>
  )
}

export default MealsGrid
