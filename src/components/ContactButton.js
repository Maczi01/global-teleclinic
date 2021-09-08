import ToggleButton from '@material-ui/lab/ToggleButton';
import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        color: "rgba(0, 0, 0, 0.26)",
        border: "1px solid rgba(0, 0, 0, 0.26)",
        height: "40px",
        "&:hover": {
            backgroundColor: "rgba(245, 0, 87, 0.04)"
        },
        "&.Mui-selected": {
            color: '#f50057',
            border: '1px solid #f50057',
            backgroundColor: "#ffffff",
            "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.04)"
            },
        }
    },
}));

const ContactButton = ({
                           value, icon, active, buttonText, onChangeValueContact
                       }) => {
    const classes = useStyles();
    return (
        <ToggleButton
            variant="outlined"
            color="secondary"
            value={value}
            selected={active}
            onClick={(e) => onChangeValueContact(e)}
            classes={classes}
        >
            {icon}
            {buttonText}
        </ToggleButton>
    );
};

export default ContactButton;
