import React from "react";
import Doubts from "./json/questionSolution.json";
import {
    Grid,
    Box,
    makeStyles,
    createStyles,
    Typography,
    Button
} from "@material-ui/core";

const AllQuestion = () => {
    console.log({ doubtData: Doubts });
    const classes = useStyles();
    return (
        <Grid container>
            <Grid
                item
                xl={9}
                lg={9}
                md={6}
                sm={6}
                xs={6}
                className={classes.questionInformation}
            >
                <Box display={"flex"}>
                     <Box pb={3} className={classes.questionBorderBottom}>
                    <Typography color={"primary"} variant="h5">
                        What is electric sheilding?
                    </Typography>
                    <Box pt={1} pb={1}>
                        <Box display={"flex"}>
                            <Box component="span" mr={0.5}>
                                <Typography
                                    color={"primary"}
                                    variant={"subtitle2"}
                                >
                                    answered
                                </Typography>
                            </Box>
                            <Typography variant={"subtitle2"}>
                                2 days ago in
                            </Typography>
                            <Box ml={0.5} mr={0.5}>
                                <Typography
                                    color={"primary"}
                                    variant={"subtitle2"}
                                >
                                    Physics-Intermediate
                                </Typography>
                            </Box>
                            <Typography variant={"subtitle2"}>by</Typography>
                            <Box ml={0.5} mr={0.5}>
                                <Typography color={"primary"} variant={"subtitle2"}>
                                    cleardoubt
                                </Typography>
                            </Box>
                            <Typography variant={"subtitle2"}>(2.7k points)</Typography>
                        </Box>
                    </Box>
                    <Button variant="outlined" color="primary" className={classes.subject}>
                    #Physics
                </Button>
                </Box>
                <Box>
                    <Box className={classes.boxContent}>
                        <Typography>1</Typography>
                        <Typography>Answer</Typography>
                    </Box>
                </Box>
                </Box>
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
        questionBorderBottom: {
            borderBottom: "1px solid #f1f1f1",
        },
        subject:{
            textTransform: "capitalize",
            fontSize: 14
        },
        boxContent:{
            border: "1px solid #f1f1f1",
            borderRadius: 5,
            padding: 8
        }
    });
});
export default AllQuestion;
