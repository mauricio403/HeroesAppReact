import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroeById } from '../../selectors/gteHeroeById';
import Button from '@material-ui/core/Button'

export const HeroScreen = ({ history }) => {

    const { heroid } = useParams();

    const hero = getHeroeById(heroid);

    if (!hero) {
        return <Redirect to='/'></Redirect>
    }

    const handleReturn = () => {

        if (history.length <= 2) {
            history.push('/')
        } else {

            history.goBack();
        }

    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={`../assets/heroes/${heroid}.jpg`}
                    alt={superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft' />
            </div>
            <div className='col-8'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego:</b>  {alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher: </b> {publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First Appearance: </b>{first_appearance}
                    </li>
                </ul>

                <h5>Characters</h5>

                <p> {characters}</p>

                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleReturn}
                >
                    Return
                </Button>
            </div>
        </div>
    )
}
