import CardContainer from './CardContainer'

import '../styles/WatchablesList.css'

function WatchablesList({ currentUser, userCategories, watchables, setWatchables, setWatchablesEdit, favorites, setFavorites }) {

    // let src = 'https://m.psecn.photoshelter.com/img-get2/I0000P0l36xX6i_0/fit=1000x750/g=G00003tyCpRF.qOc/VRG-ILLO-4493-Spot-003-jpg.jpg'

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
                'Log in to see your List.'
            }
            </div>
            <div className='watchables-grid'>{
                // currentUser
                // ?
                // renderCard()
                // :
                // <img src={src}/>
                renderCard()
            }
            </div>
        </div>
    )
}

export default WatchablesList;