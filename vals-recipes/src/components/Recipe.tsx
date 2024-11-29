import React from "react";
import '../styles/Recipe.css';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader } from "@mui/material";
import { IRecipe } from "../types/types";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface IProps {
    recipeInfo: IRecipe;
}

export default function Recipe(props: IProps) {
    const {recipeInfo} = props;
    const {title, ingredients: ingredientsString, instructions: instructionsString} = recipeInfo;
    
    const ingredients = ingredientsString.split("\n");
    const instructions = instructionsString.split("\n");

    return (
        <Card className="Recipe">
            <CardContent>
                <CardHeader title={title}/>
                <Accordion slotProps={{heading: {component: 'h4'}}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>Ingredients</AccordionSummary>
                    <AccordionDetails>
                        <Timeline>
                            {ingredients.map((ingredient, index) => 
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary"/>
                                        {(index !== ingredients.length-1) && <TimelineConnector/>}
                                    </TimelineSeparator>
                                    <TimelineContent>{ingredient}</TimelineContent>
                                </TimelineItem>
                            )}
                        </Timeline>
                    </AccordionDetails>
                </Accordion>
                <Accordion slotProps={{heading: {component: 'h4'}}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>Instructions</AccordionSummary>
                    <AccordionDetails>
                        {instructions.map((instruction, index) => 
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary"/>
                                    {(index !== instructions.length-1) && <TimelineConnector/>}
                                </TimelineSeparator>
                                <TimelineContent>{instruction}</TimelineContent>
                            </TimelineItem>
                        )}
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
    )
};