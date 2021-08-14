import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import React from "react";

const VisitCard = ({visit}) => {
    const {name, position} = visit;
    return (
        <Card>
            <CardHeader
                title={name}
                subheader={position}
            />
        </Card>
    );
}

export default VisitCard;