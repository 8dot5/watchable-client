import CardContainer from './CardContainer'

import '../styles/WatchablesList.css'

function WatchablesList({ currentUser, userCategories, watchables, setWatchables, setWatchablesEdit, favorites, setFavorites }) {

    function renderCard() {
        return watchables.map((watchable) => {
            return <CardContainer key={watchable.id} watchable={watchable} setWatchablesEdit={setWatchablesEdit} watchables={watchables} setWatchables={setWatchables} favorites={favorites} setFavorites={setFavorites} userCategories={userCategories} />
        })
    }

    return (
        <div className='watchables-page'>
            <div className='page-title'>{
                currentUser
                ?
                `Welcome back, ${currentUser.username}! You have ${watchables.length} Watchables.`
                :
                'Nothing to see here. 😢'
            }
            </div>
            <div className='watchables-grid'>
                {renderCard()}
            </div>
        </div>
    )
}

export default WatchablesList;