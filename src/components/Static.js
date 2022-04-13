
import '../styles/StaticPage.css'

function Static(){

    let src = 'https://m.psecn.photoshelter.com/img-get2/I0000oMj4CY3BzMw/fill=1375x1200/g=G00003tyCpRF.qOc/bg.jpg'

    let style = {
        // margin: "10px 5px 0px 5px",
        // backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        opacity: 0.7,
        width: '1500px'

    }


    return (
        <div className="static-background">

            <div className='static-body'>
              <img src={src} style={style} />
            </div>

        </div>
    )
}

export default Static;