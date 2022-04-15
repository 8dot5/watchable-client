import Card from 'react-bootstrap/Card'
import '../styles/Cards.css'

function CardFront({watchable}) {
    return (
        <div className='card-front'>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" style={{ objectFit: 'cover', height: '30vh'}} src={watchable.poster_url}/>
            </Card>
        </div>
    );
};

export default CardFront;