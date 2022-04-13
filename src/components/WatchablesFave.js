import CardContainerFave from './CardContainerFave'
import '../App.css'
import '../styles/FavoritesPage.css'

function WatchablesFave({ currentUser, favorites, watchables }) {

    function renderCard() {
        return favorites.map((watchable) => {
            return <CardContainerFave key={watchable.id} watchable={watchable} />
        })
    }

    return (
        <div className='favorites-page'>
            <div className='page-title'>{
                currentUser
                ?
                `You have ${favorites.length} Faves.`
                :
                'Log in to see your Faves.'
            }
            </div>
            <div className='watchables-grid'>
                {renderCard()}
            </div>
        </div>
    )
}

export default WatchablesFave;