import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

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
        console.log({doctor: selectedDoctor.name, payment, contact})
    };

    const cutDescription = (description) => (
        description.length > 50 ? `${description.substring(0, 30)}...` : description
    )
    const showDate = (date) => {

        const objDate = new Date(date);
        const today = new Date().getDay();
        const locale = "pl";
        const day = objDate.getDay();
        const month = objDate.toLocaleString(locale, {month: "long"});
        const year = objDate.getFullYear();
        const hour = objDate.getHours();
        const minute = objDate.getMinutes();
        const dayDifference = (day)
        // console.log(objDate.getDay())
        // const text =
        console.log(`${day} ${month} ${year}, godz. ${hour}:${minute} `);
        return month;


    };


    return (
        <div className="App">
            <div className="list">
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
            <div className="App-header">
                {
                    selectedDoctor ?
                        <div>
                            Selected doctor: {selectedDoctor.name}
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
                <form action=""
                      onSubmit={submitVisit}
                >

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
                        <button> Submit</button>
                    </div>
                </form>


            </div>
        </div>
    );
}

export default App;
