import React, { useMemo } from 'react'
import queryString from 'query-string';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);


    const [values, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = values;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])



    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>

                <div className='col-5'>
                    <h4> Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <TextField
                            label="Find your hero"
                            type='text'
                            name='searchText'
                            value={searchText}
                            autoComplete='off'
                            onChange={handleInputChange}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            type='submit'
                        >
                            Search..
                        </Button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4> Results</h4>
                    <hr />
                    {
                        (q === '')

                        &&

                        <Alert severity="info">
                            Search a Hero...
                        </Alert>

                    }

                    {
                        (q !== '' && heroesFiltered.length===0)

                        &&

                        <Alert severity="error">
                            No hay ningun heroe llamado {q}
                        </Alert>

                    }


                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}
