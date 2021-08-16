import Grid from "@material-ui/core/Grid";
import Appointment from "./Appointment";
import Information from "./Information";
import React, {useState} from "react";

const RightSide = ({consultation, visit }) => {
  const [contact, setContact] = useState();
  const [payment, setPayment] = useState();

  const submitVisit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      // console.log({ doctor: selectedDoctor.name, payment, contact });
    }, 5000);
  };

  const onChangeValuePayment = (e) => {
    // setPayment(e.target.value);
    console.log(e.target.value);
  };

  const onChangeValueContact = (contactType) => {
    setContact(contactType);
    // setDisabled/((prev) => !prev);/
    console.log(contact);
  };

  return (
    <Grid item xs={12} sm={8} md={6}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {consultation ? (
          <Appointment
              consultation={consultation}
            // contact={contact}
            // payment={payment}
            // submitVisit={submitVisit}
            // onChangeValuePayment={onChangeValuePayment}
          />
        ) : (
          <Information />
        )}
      </Grid>
    </Grid>
  );
};

export default RightSide;
