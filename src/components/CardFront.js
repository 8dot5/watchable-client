import { Card } from 'react-bootstrap'

import '../styles/Cards.css'

const CardFront = ({watchable}) => {
    return (
        <div className='card-front'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={watchable.poster_url} />
            </Card>
        </div>
    );
};

export default CardFront;