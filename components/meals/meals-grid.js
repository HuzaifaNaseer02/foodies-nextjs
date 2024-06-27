const MealsGrid = ({ meals }) => {
  return (
    <ul className={c}>
      {meals.map(() => {
        ;<li key={meal.id}></li>
      })}
    </ul>
  )
}

export default MealsGrid
