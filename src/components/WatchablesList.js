import CardContainer from './CardContainer'

import '../styles/WatchablesList.css'

function WatchablesList({ currentUser, userCategories, watchables, setWatchables, setWatchablesEdit, favorites, setFavorites }) {

    function renderCard() {
        console.log(watchables, 'rendering the cards')
        return watchables.map((watchable) => {
            return <CardContainer key={watchable.id} watchable={watchable} setWatchablesEdit={setWatchablesEdit} watchables={watchables} setWatchables={setWatchables} favorites={favorites} setFavorites={setFavorites} userCategories={userCategories} />
        })
    }

    return (
        <div className='watchables-page'>
            <div className='page-title'>Watchables</div>
            <div className='watchables-grid'>
                {renderCard()}
            </div>
        </div>
    )
}

export default WatchablesList;