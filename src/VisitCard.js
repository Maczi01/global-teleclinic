import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const VisitCard = ({visit}) => {
    const {name} = visit;
    return (
            <Card>
                <CardContent>
                    {name}
                </CardContent>
            </Card>
    );
}

export default VisitCard;