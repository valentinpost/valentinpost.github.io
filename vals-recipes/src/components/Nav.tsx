import React from "react";
import '../styles/Nav.css';
import { IRecipe } from "../types/types";
import { Card, CardContent, CardHeader, Container } from "@mui/material";
import { Link } from "react-router-dom";

export interface IProps {
    recipes: IRecipe[]
}

export default function Nav(props: IProps) {
    const {recipes} = props;
    return (<Container className="Nav">
        {recipes.map((recipe) => 
            <Link className="Link" to={`/${recipe.link}`}>
                <Card className="RecipeCard">
                    <CardHeader 
                        title={recipe.title} 
                        subheader={recipe.createdDate}
                    />
                    <CardContent>{recipe.description}</CardContent>
                </Card>
            </Link>)}
        </Container>
    )
} 