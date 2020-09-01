import React from 'react';
import '../css/SearchPage.css';
import Button from '@material-ui/core/Button';

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className='searchPage__information'>
                <p>
                    62 stays - 26 August to 30 August - 2 guests
                </p>

                <h1>
                    Stays nearby
                </h1>

                <Button variant='outlined'>
                    Cancellation flexibility
                </Button>

                <Button variant='outlined'>
                    Type of place
                </Button>

                <Button variant='outlined'>
                    Price
                </Button>

                <Button variant='outlined'>
                    Rooms and beds
                </Button>

                <Button variant='outlined'>
                    More filters
                </Button>
            </div>
        </div>
    );
};

export default SearchPage;
