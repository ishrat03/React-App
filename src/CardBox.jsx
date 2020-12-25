import react from 'react';

function CardBox(props)
{
    return (
        <>
        <div className="col-md-2">
            <div className="card" style={{width: '18rem'}}>
                <img src={props.images} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardBox;