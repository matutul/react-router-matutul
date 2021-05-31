import './League.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const League = (props) => {
    const { idLeague, strLeagueAlternate, strSport } = props.league;
    const [leagueLogo, setLeagueLogo] = useState("");
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueLogo(data.leagues[0].strLogo));
    }, [idLeague])

    const history = useHistory();
    const handleExploreClick = () => {
        history.push(`/league/${idLeague}`);
    }

    return (
        <div className="league-card">
            <div className="league-logo">
                <img src={leagueLogo} alt={`Logo of ${strLeagueAlternate}`} />
            </div>
            <div className="card-body">
                <div className="text-body">
                    <h3 className="league-alternate">{strLeagueAlternate}</h3>
                    <p className="sport-type">Sports type: {strSport}</p>
                </div>
                <Button onClick={ handleExploreClick } className="explore-btn">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
        </div>
    );
};

export default League;