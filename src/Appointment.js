import DoctorCard from "./DoctorCard";
import AppointmentDetails from "./AppointmentDetails";

const Appointment = ({doctor}) => (
  <>
    <DoctorCard doctor={doctor}/>;
    <AppointmentDetails doctor={doctor}/>
  </>
);
export default Appointment;
