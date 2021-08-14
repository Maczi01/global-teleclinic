import './App.css';
import {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';

const MakeAppointmentView = () => {

    const [selectedDoctor, setSelectedDoctor] = useState();
    const [array, setArray] = useState();
    const [elementToSubmit, setElementToSubmit] = useState({
        selectedDoctor: "",
        payment: "",
        contact: ""
    });

    const [payment, setPayment] = useState()
    const [contact, setContact] = useState()

    useEffect(() => {
        fetch('data/data.json')
            .then(r => r.json())
            .then((r) => setArray(r))
    }, [])

    const handleDoctor = (d) => {
        setSelectedDoctor(d);
        console.log(selectedDoctor)
    }


    const onChangeValueContact = (e) => {
        setContact(e.target.value)
        console.log("radio button changed, contact")
        console.log(contact)
    }

    const onChangeValuePayment = (e) => {
        setPayment(e.target.value)
        console.log("radio button changed, payment")
        console.log(payment)
    }

    const submitVisit = (e) => {
        e.preventDefault()
        setTimeout(() => {
            console.log({doctor: selectedDoctor.name, payment, contact})
        }, 5000)
    };

    const cutDescription = (description) => (
        description.length > 50 ? `${description.substring(0, 30)}...` : description
    );

    const showDate = (date) => {
        const objDate = new Date(date);
        const locale = "pl";
        const day = objDate.getDate();
        const today = (new Date()).getDate();
        const month = objDate.toLocaleString(locale, {month: "long"});
        const year = objDate.getFullYear();
        const hour = objDate.getHours();
        const minute = objDate.getMinutes();
        console.log(day - today)
        const daysDifference = day - today
        const diff = text(daysDifference)
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
    }

    return (
        <div className="App">
            <div>
                {
                    array ? array.map((d) =>
                        <button
                            key={d.id}
                            onClick={() => handleDoctor(d)}>
                            {d.name}
                        </button>
                    ) : null
                }
            </div>
            <form action=""
                  onSubmit={submitVisit}
                  className="list"
            >

                <div className="App-header">
                    {
                        selectedDoctor ?
                            <div>
                                <div>
                                    Selected doctor: {selectedDoctor.name}
                                </div>
                                <div>
                                    {selectedDoctor.position}
                                </div>

                                <div>
                                    opis: {cutDescription(selectedDoctor.description)}
                                </div>
                                <div>
                                    Termin konsultacji: {showDate(selectedDoctor.date)}
                                </div>
                            </div>
                            :
                            null
                    }


                    <div>
                        <label htmlFor="">
                            <input type="radio" value="czat" name="contact" onChange={onChangeValueContact}
                            /> Czat
                            <input type="radio" value="wideo" name="contact" onChange={onChangeValueContact}/> Wideo
                            <input type="radio" value="telefon" name="contact" onChange={onChangeValueContact}/> Telefon
                        </label>
                    </div>

                    <div>
                        <label htmlFor="">
                            <input type="radio" value="W abonamencie" name="payment"
                                   onChange={onChangeValuePayment}/> W abonamencie
                            <input type="radio" value="Płatność jednorazowa" name="payment"
                                   onChange={onChangeValuePayment}/> Płatność jednorazowa
                        </label>
                    </div>
                    <div>
                        <Button variant="contained" color="secondary"> Umów konsultację</Button>
                    </div>


                </div>
            </form>
        </div>
    );
};

export default MakeAppointmentView;


