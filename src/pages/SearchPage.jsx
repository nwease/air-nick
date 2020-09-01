import React from 'react';
import '../css/SearchPage.css';
import Button from '@material-ui/core/Button';
import SearchResult from '../components/SearchResult';

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

            <SearchResult
                img='https://www.thewealthlist.com/wp-content/uploads/2018/12/Aspen-Colorado-700-x-468.jpg'
                location='Private room in center of London'
                title='Stay in this spacious man pad room'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wifi - kitchen - Free parking - Washing machine'
                star={5.93}
                price='$30 / night'
                total='$117 total'
            />

            <SearchResult
                img='https://www.thewealthlist.com/wp-content/uploads/2018/12/Aspen-Colorado-700-x-468.jpg'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian house'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wifi - kitchen - Free parking - Washing machine'
                star={8.43}
                price='$30 / night'
                total='$117 total'
            />
        </div>
    );
};

export default SearchPage;
