import { Card } from 'react-bootstrap'
import '../styles/Cards.css'

function CardFrontFave({watchable}) {
    return (
        <div className='card-front'>
            <Card style={{ width: '8rem' }}>
                <Card.Img variant="top" src={watchable.poster_url} />
            </Card>
        </div>
    );
};

export default CardFrontFave;