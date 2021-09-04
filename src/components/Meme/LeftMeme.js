import React from 'react';
import { Card} from 'react-bootstrap';

const LeftMeme = ({ meme }) => {
    return (
        <>
            <Card className="p-2">
                <Card.Img src={meme.image} alt={meme.name} />
            </Card>
        </>
    )
}

export default LeftMeme;
