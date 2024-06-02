import Link from "next/link";

const Meals = () => {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="meals/share">Share</Link>
      </p>
      <p>
        <Link href="meals/meal-1">Meal 1</Link>
      </p>
      <p>
        <Link href="meals/meal-2">Meal 2</Link>
      </p>
    </main>
  );
};

export default Meals;