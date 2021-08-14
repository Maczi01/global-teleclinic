import "./App.css";
import {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import ChatIcon from '@material-ui/icons/Chat';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import PhoneIcon from '@material-ui/icons/Phone';


const MakeAppointmentView = () => {
    const [selectedDoctor, setSelectedDoctor] = useState();
    const [array, setArray] = useState();
    const [elementToSubmit, setElementToSubmit] = useState({
        selectedDoctor: "",
        payment: "",
        contact: "",
    });

    const [payment, setPayment] = useState();
    const [contact, setContact] = useState();

    useEffect(() => {
        fetch("data/data.json")
            .then((r) => r.json())
            .then((r) => setArray(r));
    }, []);

    const handleDoctor = (d) => {
        setSelectedDoctor(d);
        console.log(selectedDoctor);
    };

    const onChangeValueContact = (e) => {
        setContact(e.target.value);
        console.log("radio button changed, contact");
        console.log(contact);
    };

    const onChangeValuePayment = (e) => {
        setPayment(e.target.value);
        console.log("radio button changed, payment");
        console.log(payment);
    };

    const submitVisit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            console.log({doctor: selectedDoctor.name, payment, contact});
        }, 5000);
    };

    const cutDescription = (description) =>
        description.length > 50
            ? `${description.substring(0, 30)}...`
            : description;

    const showDate = (date) => {
        const objDate = new Date(date);
        const locale = "pl";
        const day = objDate.getDate();
        const today = new Date().getDate();
        const month = objDate.toLocaleString(locale, {month: "long"});
        const year = objDate.getFullYear();
        const hour = objDate.getHours();
        const minute = objDate.getMinutes();
        console.log(day - today);
        const daysDifference = day - today;
        const diff = text(daysDifference);
        return `${diff} ${day} ${month} ${year}, godz. ${hour}:${minute} `;
    };

    const text = (d) => {
        switch (d) {
            case 0:
                return "dzisiaj";
            case 1:
                return "jutro";
            case 2:
                return "pojutrze";
            default:
                return "";
        }
    };

    return (
        <Grid container>
            <Grid container>
                <RadioGroup>
                    {array
                        ? array.map((d) => (
                            <Grid item key={d.id}>
                                <FormControlLabel
                                    value="paymentOnce"
                                    control={
                                        <Button onClick={() => handleDoctor(d)}>{d.name}</Button>
                                    }
                                    onChange={onChangeValuePayment}
                                />
                            </Grid>
                        ))
                        : null}
                </RadioGroup>
            </Grid>
            <Grid item md={3}>
                <form action="" onSubmit={submitVisit} className="list">
                    <div className="App-header">
                        {selectedDoctor ? (
                            <div>
                                <Typography variant="h6">{selectedDoctor.name}</Typography>
                                <Typography variant="body1">
                                    {selectedDoctor.position}
                                </Typography>

                                <Typography variant="body2">
                                    {cutDescription(selectedDoctor.description)}
                                </Typography>
                                <div>Termin konsultacji: {showDate(selectedDoctor.date)}</div>
                            </div>
                        ) : null}


                        <RadioGroup value="video" onChange={onChangeValueContact}>
                            <FormControlLabel
                                value="chat"
                                control={
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        color="secondary"
                                        disableElevation
                                        startIcon={<ChatIcon/>}
                                    >
                                        Przez czat
                                    </Button>
                                }
                                onChange={onChangeValueContact}
                            />
                            <FormControlLabel
                                value="video"
                                control={
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        color="secondary"
                                        disableElevation
                                        disabled
                                        startIcon={<VoiceChatIcon/>}
                                    >
                                        Przez wideo-czat
                                    </Button>

                                }
                            />
                            <FormControlLabel
                                value="phone"
                                control={
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        color="secondary"
                                        disableElevation
                                        startIcon={<PhoneIcon/>}
                                    >
                                        Przez wideo-czat
                                    </Button>
                                }
                            />
                        </RadioGroup>


                        <RadioGroup>
                            <FormControlLabel
                                value="subscription"
                                control={<Radio color="secondary"/>}
                                onChange={onChangeValuePayment}
                                label="W abonamencie"
                            />{" "}
                            <FormControlLabel
                                value="paymentOnce"
                                control={<Radio color="secondary"/>}
                                onChange={onChangeValuePayment}
                                label="Płatność jednorazowa"
                            />
                        </RadioGroup>

                        <div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                disableElevation
                            >
                                {" "}
                                Umów konsultację
                            </Button>

                        </div>
                    </div>
                </form>
            </Grid>
        </Grid>
    );
};

export default MakeAppointmentView;
