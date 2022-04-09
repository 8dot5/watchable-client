
import CardContainer from './CardContainer'
// import '../App.css'
import '../styles/FavoritesPage.css'

const WatchablesFave = ({ watchables, favorites, setFavorites, setWatchablesEdit, setWatchables, userCategories }) => {


    const renderCard = () => {
        console.log(watchables, 'rendering the cards')
        return watchables.map((watchable) => {
            return <CardContainer key={watchable.id} watchable={watchable} setWatchablesEdit={setWatchablesEdit} watchables={watchables} setWatchables={setWatchables} favorites={favorites} setFavorites={setFavorites} userCategories={userCategories} />
        })
    }

    return (
        <div className='favorites-page'>
            <div className='page-title'>Faves</div>

            <br />
            <div className='page-title'>
                {renderCard()}
            </div>
        </div>
    )
}


export default WatchablesFave

