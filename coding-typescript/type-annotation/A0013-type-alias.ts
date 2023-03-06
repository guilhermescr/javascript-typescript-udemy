type Food = 'Bread' | 'Cheese' | 'Pizza' | 'Ice Cream';

function createFood(ing1: Food, ing2: Food): void {
  console.log(`
  Welcome to the menu!
  Ingredient 1: ${ing1}
  Ingredient 2: ${ing2}
  Final Food: ${ing1} with ${ing2}
  `);
}

createFood('Bread', 'Cheese');
