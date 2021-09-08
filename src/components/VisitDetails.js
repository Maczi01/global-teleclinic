import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import PhoneIcon from '@material-ui/icons/Phone';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card/Card';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Radio from '@material-ui/core/Radio/Radio';
import {makeStyles} from '@material-ui/core';
import axios from 'axios';
import {useForm} from 'react-hook-form';

import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import {getFormattedVisitDate} from '../utils/utils';
import DoctorCard from './DoctorCard';
import ContactButton from './ContactButton';

const useStyles = makeStyles(() => ({
    root: {
        direction: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4px 20px',
    },
    visit: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        margin: '10px 0',
        padding: '20px',
    },
    box: {
        margin: '10px',
    },
    avatar: {
        width: '150px',
        height: '150px',
        margin: '10px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    disabledButton: {
        color: 'rgba(0, 0, 0, 0.26)',
        border: '1px solid rgba(0, 0, 0, 0.26)',
    },
    activeButton: {
        color: 'primary',
        border: '1px solid rgba(0, 0, 0, 0.26)',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0',
    },
    payment: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px 0',
    },
    toggleButton: {
        color: 'blue',
        border: '1px solid blue',
    },

}));
const VisitDetails = ({chosenVisit}) => {
    const [contact, setContact] = useState('chat');
    const [payment, setPayment] = useState('subscription');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const {
        date, name, position, description,
    } = chosenVisit;
    const BASE_URL = 'https://global-teleclinic-default-rtdb.europe-west1.firebasedatabase.app/.json';
    const SUBMITTING_TIME = 2000;
    const classes = useStyles();
    const history = useHistory();

    const handleContact = (e, chosenContact) => {
        console.log(e.target.value)
        console.log(e.currentTarget.value)
        setContact(chosenContact);
    };

    const submitVisit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsError(false);

        setTimeout(() => {
            axios
                .post(BASE_URL, ({
                    name, payment, contact, date,
                }))
                .then((response) => {
                    if (response.status !== 200) {
                        console.log(response);
                        setIsError(true);
                    } else {
                        history.push('/confirmed');
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setIsError(true);
                })
                .finally(() => setIsSubmitting(false));
        }, SUBMITTING_TIME);
    };

    const onChangeValuePayment = (e) => {
        setPayment(e.currentTarget.value);
    };

    const onChangeValueContact = (e) => {
        setContact(e.currentTarget.value);
    };

    return (
        <Grid item container sm={12} md={6}>
            <Grid item className={classes.root} container>
                <DoctorCard name={name} position={position} description={description}/>
                <Card p={8} md={6} className={classes.visit}>
                    <Typography component="div">
                        <Box fontWeight={700} fontSize={20}>
                            Termin konsultacji:
                            {getFormattedVisitDate(date)}
                        </Box>
                    </Typography>
                    <form onSubmit={submitVisit}>

                        <ToggleButtonGroup
                            value={contact}
                            exclusive
                            onChange={handleContact}
                            // onChange={(e) => onChangeValueContact(e)}

                            className={classes.buttons}
                        >

                            <ContactButton
                                value="chat"
                                icon={<ChatIcon/>}
                                active={contact === 'chat'}
                                buttonText="Przez chat"
                                onChangeValueContact={onChangeValueContact}
                            />

                            <ContactButton
                                value="phone"
                                icon={<PhoneIcon/>}
                                active={contact === 'phone'}
                                buttonText="Przez telefon"
                                onChangeValueContact={onChangeValueContact}
                            />

                            <ContactButton
                                value="videochat"
                                icon={<ChatIcon/>}
                                active={contact === 'videochat'}
                                buttonText="Przez wideo-chat"
                                onChangeValueContact={onChangeValueContact}
                            />
                        </ToggleButtonGroup>
                        <Divider/>
                        <Box>
                            <RadioGroup
                                value={payment}
                                onChange={(e) => onChangeValuePayment(e)}
                            >
                                <Box className={classes.payment}>
                                    <FormControlLabel
                                        value="subscription"
                                        control={<Radio color="secondary"/>}
                                        label="W abonamencie"
                                    />
                                    <Box fontWeight={700} fontSize={24}>
                                        32,99 zł
                                    </Box>
                                </Box>
                                <Divider/>
                                <Box className={classes.payment}>
                                    <FormControlLabel
                                        value="paymentOnce"
                                        control={<Radio color="secondary"/>}
                                        label="Płatność jednorazowa"
                                    />

                                    <Box fontWeight={700} fontSize={24}>
                                        69,00 zł
                                    </Box>
                                </Box>
                            </RadioGroup>
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            disableElevation
                            disabled={isSubmitting}
                            fullWidth
                        >
                            Umów konsultację
                        </Button>
                        {isError && (
                            <Box mt={2} color="error.main">
                                Nie udało się wysłać. Spróbuj ponownie
                            </Box>
                        )}
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
};

PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string,
});

export default VisitDetails;
