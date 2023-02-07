import { Card, Text, Grid } from "@nextui-org/react";

const Game = ({name, released, background_image}) => {
    return (
        <div>
        <Grid.Container gap={2} justify="center">
        <Grid>
        <Card isHoverable variant="bordered" css={{ mw: "500px" }}>
        
        <div className="game">
            <Card.Body>
            <Text>{name}</Text>
            <img src={background_image} />
            {/* <div className="game-release">{released}</div> */}
            </Card.Body>
        </div>
        
        </Card>
        </Grid>
        </Grid.Container>
        </div>
    );
};



export default Game; 