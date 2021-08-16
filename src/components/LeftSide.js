import Grid from "@material-ui/core/Grid";
import VisitCard from "./VisitCard";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import React from "react";

const LeftSide = ({availableVisits, handleVisit}) => {


return(
    <Grid container item md={6}>
        {availableVisits ? (
            availableVisits.map((visit) => (
                <VisitCard
                    key={visit.id}
                    visit={visit}
                    handleVisit={() => handleVisit(visit)}
                />
            ))
        ) : (
            <CircularProgress color="secondary" />
        )}
    </Grid>
)
}

export default LeftSide;