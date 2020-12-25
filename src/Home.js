import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Card from './Card';
import Footer from './Footer';

function Home()
{
    return(
        <>
            <Navbar/>
            <Card
                images1="https://picsum.photos/200/200?random=1"
                text1="lorum ipsum"
                images2="https://picsum.photos/200/200?random=2"
                text2="lorum ipsum 2"
                images3="https://picsum.photos/200/200?random=3"
                text3="lorum ipsum 3"
                images4="https://picsum.photos/200/200?random=4"
                text4="lorum ipsum 4"
                images5="https://picsum.photos/200/200?random=5"
                text5="lorum ipsum 5"
                images6="https://picsum.photos/200/200?random=6"
                text6="lorum ipsum 6"
            />

            <Card
                images1="https://picsum.photos/200/200?random=7"
                text1="lorum ipsum 7"
                images2="https://picsum.photos/200/200?random=8"
                text2="lorum ipsum 8"
                images3="https://picsum.photos/200/200?random=9"
                text3="lorum ipsum 9"
                images4="https://picsum.photos/200/200?random=10"
                text4="lorum ipsum 10"
                images5="https://picsum.photos/200/200?random=11"
                text5="lorum ipsum 11"
                images6="https://picsum.photos/200/200?random=12"
                text6="lorum ipsum 12"
            />

            <Footer />
        </>
    )
}

export default Home;