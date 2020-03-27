import React, { Fragment } from "react";
import {
    Box,
    makeStyles,
    createStyles,
    Typography,
    Button
} from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Questions = props => {
    const classes = useStyles();
    let {
        questionsData: { allQuestions = [] }
    } = props;
    return (
        <Fragment>
            {allQuestions.map((questionData, index) => {
                return (
                    <Box display={"flex"} mt={2} key={index}>
                        <Box
                            pb={3}
                            className={classes.questionBorderBottom}
                            flexGrow={1}
                        >
                            <Typography color={"primary"} variant="h5">
                                {questionData.question}
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
                                    <Typography variant={"subtitle2"}>
                                        by
                                    </Typography>
                                    <Box ml={0.5} mr={0.5}>
                                        <Typography
                                            color={"primary"}
                                            variant={"subtitle2"}
                                        >
                                            cleardoubt
                                        </Typography>
                                    </Box>
                                    <Typography variant={"subtitle2"}>
                                        ({questionData.views} points)
                                    </Typography>
                                </Box>
                            </Box>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.subject}
                            >
                                #{questionData.subject}
                            </Button>
                        </Box>
                        <Box p={2} className={classes.questionBorderBottom}>
                            <Box className={classes.boxContent}>
                                <Box display={'flex'}>
                                    <KeyboardArrowUpIcon />
                                    <Box ml={2}>
                                    <Typography>
                                        {questionData.vote}
                                    </Typography>
                                    </Box>
                                </Box>
                                <Box display={'flex'}>
                                <KeyboardArrowDownIcon />
                                <Typography>
                                    Votes
                                </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box p={2} className={classes.questionBorderBottom}>
                            <Box className={classes.boxContent}>
                                <Typography>{questionData.noOfAns}</Typography>
                                <Typography>Answer</Typography>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
        </Fragment>
    );
};
const useStyles = makeStyles(() => {
    return createStyles({
        questionBorderBottom: {
            borderBottom: "1px solid #f1f1f1"
        },
        subject: {
            textTransform: "capitalize",
            fontSize: 14
        },
        boxContent: {
            border: "1px solid #f1f1f1",
            borderRadius: 5,
            padding: 8,
            textAlign: "center"
        }
    });
});
export default Questions;
