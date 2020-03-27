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
import Button from "@material-ui/core/Button";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ReplyIcon from '@material-ui/icons/Reply';

const Solution = props => {
    const classes = useStyles();
    return (
        <Grid container className={classes.solutionContainer}>
            <Grid item xl={9} lg={9} md={9} sm={6} xs={12}>
                <Box className={classes.question} pt={2} pb={2} mb={2}>
                    <Typography variant={"h3"} color={"primary"}>What is speciation?</Typography>
                </Box>
                <Box display={"flex"} textAlign={'center'} p={2} className={classes.boxContent}>
                    <Box p={1} className={classes.boxContent} style={{height: 50}}>
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
                    <Box>
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
                        <Box ml={2} mt={2} textAlign={'left'}>
                            <Button
                                variant="outlined"
                                color={"secondary"}
                                className={classes.buttonStyle}
                                startIcon={<ContactSupportIcon />}
                            >
                                Ask Related Question
                            </Button>
                            <Box ml={1.5} component={'span'}>
                            <Button
                                variant="outlined"
                                color={"secondary"}
                                className={classes.buttonStyle}
                                startIcon={<ReplyIcon />}
                            >
                                Comments
                            </Button>
                            </Box>
                        </Box>
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
        question:{
            borderBottom: "1px solid #f1f1f1"
        },
        boxContent: {
            border: "1px solid #f1f1f1",
            borderRadius: 5
        },
        buttonStyle:{
            textTransform: 'capitalize'
        }
    });
});
export default Solution;
