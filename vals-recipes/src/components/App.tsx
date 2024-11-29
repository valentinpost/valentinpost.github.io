import React, {useMemo} from 'react';
import Button from '@mui/material/Button';
import Main from './Main';
import { IRecipe } from '../types/types';
import Nav from './Nav';

const recipes: IRecipe[] = [
  {
    title: "Pizza",
    createdDate: "Nov 17, 2024",
    link: "pizza",
    description: "Bread and sauce and cheesey",
    ingredients: "Dough\nSauce\nCheese",
    instructions: "Toss Dough\nSpread Sauce\nSprinkle with cheese",
  },
  {
    title: "Mac and Cheese",
    createdDate: "Nov 16, 2024",
    link: "macncheese",
    description: "Pasta and cheese and its so goood",
    ingredients: "Pasta\nCheese\nMilk\nButter",
    instructions: "Cook Pasta\nMelt Butter\nAdd Cheese\nAdd Milk\nStir and serve"
  }
]

const App = () => {
  return (
    <div>
      <Nav recipes={recipes}/>
      <Main recipes={recipes}/>
    </div>
  );
};
export default App;