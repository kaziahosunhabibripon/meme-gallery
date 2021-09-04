import React from 'react';
import { Card} from 'react-bootstrap';

const RightMeme = ({ meme, meme2}) => {
    
    return (
        <>
            <Card className="p-2">
                <Card.Img src={meme.image} alt={meme.name} />
            </Card>
        </>
    )
}

export default RightMeme;