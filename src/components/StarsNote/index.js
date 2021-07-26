import React from 'react';
import { StarsArea, StarView, StarText } from './styles';
import FullStar from '../../assets/star.svg';
import HalfStar from '../../assets/star_half.svg';
import EmptyStar from '../../assets/star_empty.svg';

export default ({stars, showNumber}) => {
    // The star will have the following values:
    // 0 = Empty
    // 1 = Half
    // 2 = Full
    let starsValues = [0, 0, 0, 0, 0];
    let floor = Math.floor(stars);
    let left = stars - floor;
    let i: number;

    for(i = 0; i < floor; i++){
        starsValues[i] = 2;
    }

    if(left > 0)
        starsValues[i] = 1;

    const defineIconNote = (value) => {
        switch(value){
            case 0:
                return <EmptyStar width='18' height='18' fill='#FF9200' />
            case 1:
                return <HalfStar width='18' height='18' fill='#FF9200' />
            case 2:
                return <FullStar width='18' height='18' fill='#FF9200' />
        }
    };

    return(
        <StarsArea>
            {
                starsValues.map((star, index) => (
                    <StarView key={index}>
                        { defineIconNote(star) }
                    </StarView>
                ))
            }
            { showNumber && <StarText>{ stars }</StarText> }
        </StarsArea>
    );
}