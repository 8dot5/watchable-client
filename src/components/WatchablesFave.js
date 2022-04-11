import CardContainerFave from './CardContainerFave'
import '../App.css'
import '../styles/FavoritesPage.css'

function WatchablesFave({ watchables, favorites }) {

    function renderCard() {
        return watchables.map((watchable) => {
            console.log(watchable)
            return <CardContainerFave key={watchable.id} watchable={watchable} favorites={favorites}/>
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

