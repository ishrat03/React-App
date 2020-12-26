import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Card from './Card';
import Footer from './Footer';
import ApiData from './Api';

function Home()
{
    return(
        <>
            <Navbar/>
            <Card
                images1={ApiData[0].imgName}
                text1={ApiData[0].textName}
                images2={ApiData[1].imgName}
                text2={ApiData[1].textName}
                images3={ApiData[2].imgName}
                text3={ApiData[2].textName}
                images4={ApiData[3].imgName}
                text4={ApiData[3].textName}
                images5={ApiData[4].imgName}
                text5={ApiData[4].textName}
                images6={ApiData[5].imgName}
                text6={ApiData[5].textName}
            />

            <Card
                images1={ApiData[6].imgName}
                text1={ApiData[6].textName}
                images2={ApiData[7].imgName}
                text2={ApiData[7].textName}
                images3={ApiData[8].imgName}
                text3={ApiData[8].textName}
                images4={ApiData[9].imgName}
                text4={ApiData[9].textName}
                images5={ApiData[10].imgName}
                text5={ApiData[10].textName}
                images6={ApiData[11].imgName}
                text6={ApiData[11].textName}
            />

            <Footer />
        </>
    )
}

export default Home;