import React from 'react';
import possibleText from '../../assets/possible_text.png';
import chessPiece from '../../assets/chess_piece.png';
import './possibleInfo.css';

export const PossibleInfo = () => {
    return (
        <>
            <div className="upper-container">
            </div>
            <div className='possible-container'>
                <img className='possible-text-img' src={possibleText} alt="Bull possible text" />
                <img className='chess-piece-img' src={chessPiece} alt="Bull Chess Piece" />
            </div>
        </>
    )
}
