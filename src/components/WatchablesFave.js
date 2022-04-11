import CardContainerFave from './CardContainerFave'
// import '../App.css'
// import '../styles/FavoritesPage.css'

// using the WatchablesList.css for now
import '../styles/WatchablesList.css'

function WatchablesFave({ watchables, favorites }) {

    function renderCard() {
        console.log(watchables, 'rendering the cards')
        return watchables.map((watchable) => {
            return <CardContainerFave key={watchable.id} watchable={watchable} watchables={watchables} favorites={favorites}/>
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

