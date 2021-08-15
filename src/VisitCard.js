import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import {makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "8px"
    },
    box: {
        width: "200px",
        height: "100px",
        backgroundColor: "#fffe27",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        // // width: "100%
    }
    ,
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
}));

const VisitCard = ({visit, handleDoctor}) => {
    const {name, position, date} = visit;
    const d = new Date(date);
    const classes = useStyles();
    return (
        <Card onClick={handleDoctor} className={classes.root}>
            <CardContent>
                <Box className={classes.box}>
                    <Typography variant="h6">
                        {d.getDate()}.{d.getMonth()}
                    </Typography>
                    <Typography variant="h5">
                        {d.getHours()}:{d.getMinutes()}
                    </Typography>
                </Box>
            </CardContent>
            <Avatar className={classes.avatar}>H</Avatar>
            <CardHeader title={name} subheader={position}/>
            <ArrowForwardIosIcon/>
        </Card>
    );
};

export default VisitCard;
