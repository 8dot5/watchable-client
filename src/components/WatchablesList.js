import CardContainer from './CardContainer'

import '../styles/WatchablesList.css'

function WatchablesList({ currentUser, userCategories, watchables, setWatchables, setWatchablesEdit, favorites, setFavorites }) {

    function renderCard() {
        return watchables.map((watchable) => {
            return <CardContainer key={watchable.id} watchable={watchable} setWatchablesEdit={setWatchablesEdit} watchables={watchables} setWatchables={setWatchables} favorites={favorites} setFavorites={setFavorites} userCategories={userCategories} />
        })
    }

    //TODO
    function renderZero() {
        return (
            <p>No Watchables</p>
        )
    }

    return (
        <div className='watchables-page'>
            <div className='page-title'>Watchables</div>
            <div className='watchables-grid'>
                { currentUser ? renderCard() : renderZero() }
            </div>
        </div>
    )
}

export default WatchablesList;