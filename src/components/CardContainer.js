import { useState } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

import '../styles/Cards.css'

const CardContainer = ({ watchable, setWatchablesEdit, watchables, setWatchables, favorites, setFavorites, userCategories}) => {

    const [show, setShow] = useState(true)

    const handleFlippy = () => {
        setShow(!show)
        }

    return (
        <div className='card-container'>
            <div onClick={handleFlippy} className='card-poster'>
                {
                    show
                    ?
                    <CardFront  watchable={watchable} />
                    :
                    <CardBack watchable={watchable}
                        setWatchablesEdit={setWatchablesEdit}
                        watchables={watchables}
                        setWatchables={setWatchables}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        userCategories={userCategories}
                    />
                }
            </div>
        </div>
    )
}

export default CardContainer
