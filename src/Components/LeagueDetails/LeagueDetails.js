import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faFlag, faFutbol, faGlobe, faMars } from '@fortawesome/free-solid-svg-icons';
import './LeagueDetails.css';
import female from '../../Images/female.png';
import male from '../../Images/male.png';
import twitter from '../../Icons/Twitter.png';
import youtube from '../../Icons/YouTube.png';
import cover from '../../Images/5205447.jpg';


const LeagueDetails = () => {
    const [league, setLeague] = useState({});
    const { idLeague } = useParams();
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]));
    }, [idLeague])

    console.log(league);
    // const { strGender, strLeagueAlternate, dateFirstEvent, strCountry, strSport, strBanner, strDescriptionEN, strTwitter, strWebsite, strYoutube} = league;


    let coverImage = "";
    if (league.strGender === 'Male') {
        coverImage = <img src={male} alt="Cover of the league for male" />;
    }
    else if(league.strGender === 'Female') {
        coverImage = <img src={female} alt="Cover of the league for female" />;
    }
    return (
        <div className="parent">
            <header className="header" style={{background:`url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <img className="banner" src={league.strBanner} alt={`Banner of ${league.strLeagueAlternate}`} />
            </header>
            <Container className="league-container">
                <div className="details-card">
                    <div className="details-text">
                        <h2>{league.strLeagueAlternate}</h2>
                        <p><FontAwesomeIcon icon={faCalendarCheck} /> Founded: {league.dateFirstEvent}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {league.strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {league.strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {league.strGender}</p>
                    </div>
                    <div className="cover-photo">
                        {coverImage}
                    </div>
                </div>
                <div className="description">
                    <p>{league.strDescriptionEN}</p>
                </div>
                <div className="social-link">
                    <a href="/" target="_blank"><img style={{width: "70px"}} src={twitter} alt="" /></a>
                    <a href="/" target="_blank"><FontAwesomeIcon style={{fontSize: "60px", color: 'white'}} icon={faGlobe} /></a>
                    <a href="/" target="_blank"><img style={{width: "70px"}} src={youtube} alt="" /></a>
                </div>
            </Container>
        </div>
    );
};

export default LeagueDetails;