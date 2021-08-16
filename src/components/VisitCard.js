import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import {makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "8px",
    },
    box: {
        width: "200px",
        height: "100px",
        backgroundColor: "rgb(220, 0, 78)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    box1: {
        width: "200px",
        height: "100px",
        backgroundColor: "rgb(194,220,50)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: "50px",
        height: "50px",
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
}));

const VisitCard = ({visit, handleVisit, active}) => {
    const {name, position, date} = visit;
    const d = new Date(date);
    const classes = useStyles();
    return (
        <Card onClick={handleVisit} className={classes.root} bgcolor="text.primary">
            <CardContent>
                {/*TODO nazwa classes box czy classes paper?*/}
                <Paper  className={active ? classes.box : classes.box1} >
                    <Typography variant="h6">
                        {d.getDate()}.{d.getMonth()}
                    </Typography>
                    <Typography variant="h5">
                        {d.getHours()}:{d.getMinutes()}
                    </Typography>
                </Paper>
            </CardContent>
            <Avatar className={classes.avatar}>H</Avatar>
            <CardHeader
                className={classes.content}
                title={name}
                subheader={position}
            />
            <ArrowForwardIosIcon/>
        </Card>
    );
};

export default VisitCard;
