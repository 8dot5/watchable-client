import CardContainerFave from './CardContainerFave'
import '../App.css'
import '../styles/FavoritesPage.css'

function WatchablesFave({ favorites, watchables }) {

    function renderCard() {
        return favorites.map((watchable) => {
            return <CardContainerFave key={watchable.id} watchable={watchable} />
        })
    }

    return (
        <div className='favorites-page'>
            <div className='page-title'>Faves</div>
            <div className='watchables-grid'>
                {renderCard()}
            </div>
        </div>
    )
}

export default WatchablesFave;

