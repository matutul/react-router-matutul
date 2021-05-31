import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import League from '../League/League';
import './Home.css';
import cover from '../../Images/5205447.jpg';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues));
    }, [])
    return (
        <div className="parent">
            <header className="header" style={{background:`url(${cover})`, backgroundSize: 'contain', backgroundPosition: 'center'}}>
                <h2>Leagues Pavilion</h2>
            </header>
            <Container className="leagues-container">
                {
                    leagues.map(lg => <League key={lg.idLeague} league={lg}></League>)
                }
            </Container>
        </div>
    );
};

export default Home;