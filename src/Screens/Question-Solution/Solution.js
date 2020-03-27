import React from "react";
import {
    Box,
    Grid,
    makeStyles,
    createStyles,
    Typography
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const Solution = props => {
    const classes = useStyles();
    return (
        <Grid container className={classes.solutionContainer}>
            <Grid item xl={9} lg={9} md={9} sm={6} xs={12}>
                <Box display={"flex"} className={classes.boxContent}>
                    <Box className={classes.boxContent}>
                        <Box display={"flex"}>
                            <KeyboardArrowUpIcon />
                            <Box ml={2}>
                                <Typography>1</Typography>
                            </Box>
                        </Box>
                        <Box display={"flex"}>
                            <KeyboardArrowDownIcon />
                            <Typography>Votes</Typography>
                        </Box>
                    </Box>
                    <Box ml={2} textAlign={"left"}>
                        <Typography variant={"h6"}>
                            The organs with different structure but performs
                            same function in different species.
                        </Typography>
                        <Typography variant={"h6"}>
                            E.g. wings in case of butterfly and birds
                        </Typography>
                        <Typography variant={"h6"}>
                            Ear in case of human and cow
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
const useStyles = makeStyles(() => {
    return createStyles({
        solutionContainer: {
            padding: "24px 64px"
        },
        boxContent: {
            border: "1px solid #f1f1f1",
            borderRadius: 5,
            padding: 8,
            textAlign: "center"
        }
    });
});
export default Solution;
