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
                location='Private cabin in center of Aspen'
                title='Stay in this spacious man pad  luxury ski house'
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wifi - kitchen - Free parking - Washing machine'
                star={5.93}
                price='$30 / night'
                total='$117 total'
            />

            <SearchResult
                img='https://i.pinimg.com/originals/2b/e5/e0/2be5e0032a2caf502a2cd55d6a7a078a.jpg'
                location='Private house in center of Oxford'
                title='Stay at this spacious new house'
                description='3 guest - 4 bedroom - 4 bed - 1.5 bathrooms - wifi - kitchen - Free parking - Washing machine'
                star={8.43}
                price='$70 / night'
                total='$300 total'
            />

            <SearchResult
                img='https://photos.zillowstatic.com/cc_ft_960/ISzfehqc94hcra0000000000.jpg'
                location='luxury home in center of everything!'
                title='Stay at this spacious luxury home'
                description='4 guest - 4 bedroom - 1 bed - 2.5 bathrooms - wifi - kitchen - Free parking - Washing machine'
                star={6.10}
                price='$60 / night'
                total='$260 total'
            />

            <SearchResult
                img='https://rlp.jumplisting.com/photos/12/98/17/3/12981703_11_lg.jpg'
                location='Spacious kitchen with a view!'
                title='Stay at this spacious new house'
                description='6 guest - 6 bedroom - 6 bed - 2.5 bathrooms - wifi - kitchen - Free parking - Washing machine'
                star={7.20}
                price='$40 / night'
                total='$220 total'
            />

            <SearchResult
                img='https://lh3.googleusercontent.com/proxy/TfCxbIHlMM5xkzBPaLJ7_NO6ti32GyY10wzLh0FHJqmpVDGgJwbDjDSxAXWFWuJjSYkL-UrMC8VIcEHNdK9ICPIM1YdJojEr4J6_dm599s8IxIlN_y23rOeHxSQuewAE6iUkL_VNY7uw'
                location='Private bedroom fit for a king in London'
                title='Stay in this spacious bedroom with a view to drool over!'
                description='7 guest - 6 bedroom - 7 bed - 3.5 bathrooms - wifi - kitchen - Free parking - Washing machine'
                star={4.43}
                price='$70 / night'
                total='$240 total'
            />

            <SearchResult
                img='https://www.gannett-cdn.com/presto/2019/11/13/PNDN/7f459f9e-0278-4e12-930f-1476150b9f38-Toll_Brothers_1117.jpg'
                location='Private kitchen with endless possibilities in London'
                title='Stay in this spacious house with a kitchen to drool over!'
                description='4 guest - 4 bedroom - 4 bed - 2.5 shared bathrooms - wifi - kitchen - Free parking - Washing machine'
                star={3.12}
                price='$50 / night'
                total='$150 total'
            />
        </div>
    );
};

export default SearchPage;
