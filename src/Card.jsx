import React from 'react';
import CardBox from './CardBox';

function Card(props)
{
    return (
        <>
            <div className="row py-3">
                <CardBox images={props.images1} text={props.text1} />
                <CardBox images={props.images2} text={props.text2} />
                <CardBox images={props.images3} text={props.text3} />
                <CardBox images={props.images4} text={props.text4} />
                <CardBox images={props.images5} text={props.text5} />
                <CardBox images={props.images6} text={props.text6} />
            </div>
        </>
    )
}

export default Card;