import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import React from "react";
import Box from "@material-ui/core/Box";

const DoctorCard = () => {
  const cutDescription = (description) =>
    description.length > 50
      ? `${description.substring(0, 30)}...`
      : description;

  return (
    <Paper p={8}>
        <Box>
            <Typography variant="h4">lek. Gregory House</Typography>
            <Typography variant="body1">Internista</Typography>
            <Typography variant="body2">
                "Lekarz z wieloletnim doświadczeniem w pracy za granicą. Absolwent
                Królewskiej Szkoły Chirurgów w Irlandii (RCSI), Członek Niemieckigo
                Towarzystwa Urolgicznego (DGU), Członek Europejskiego Towarzystwa
                Urologicznego (EAU)."
            </Typography>
        </Box>

    </Paper>
  );
};

export default DoctorCard;
