import React from "react";
import Doubts from "./json/questionSolution.json";
import {
    Grid,
    makeStyles,
    createStyles,
} from "@material-ui/core";
import Questions from "./Question";

const AllQuestion = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.QuestionContainer}>
            <Grid
                item
                xl={9}
                lg={9}
                md={6}
                sm={6}
                xs={6}
                className={classes.questionInformation}
            >
            <Questions questionsData={Doubts} />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3} />
        </Grid>
    );
};
const useStyles = makeStyles(() => {
    return createStyles({
        questionInformation: {
            border: "1px solid #f1f1f1",
            borderRadius: 5,
            padding: 12
        },
        QuestionContainer:{
            padding: "24px 64px"
        }
    });
});
export default AllQuestion;
