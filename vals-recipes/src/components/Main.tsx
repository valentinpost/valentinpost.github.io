import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Recipe from './Recipe';
import { IRecipe } from '../types/types';

export interface IProps {
    recipes: IRecipe[];
}

const Main = (props: IProps) => {
    const {recipes} = props;
    return (
        <Routes>
            {recipes.map((recipe) => <Route path={`/${recipe.link}`} element={<Recipe recipeInfo={recipe}/>}/>)}
        </Routes>
    );
}

export default Main;