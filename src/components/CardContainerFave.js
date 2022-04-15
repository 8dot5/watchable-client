import CardFrontFave from './CardFrontFave'
import '../styles/Cards.css'

function CardContainerFave({ watchable }) {

    return (
        <div className='card-container'>
            <CardFrontFave watchable={watchable}/>

        </div>
    )
}

export default CardContainerFave;
