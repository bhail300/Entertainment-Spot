import { Card, Text, Grid } from "@nextui-org/react";

const Movie = ({title, original_name, index, overview, poster_path}) => {
    const IMAGES_API ='https://image.tmdb.org/t/p/w500/';
    return (
        <div>
        <Grid.Container gap={2} justify="center">
        <Grid>
        <Card isHoverable variant="bordered" css={{ mw: "500px" }}>

        <div className="movie" key={index}>
            <Card.Body>
            <Text>{title}</Text>
            <Text>{original_name}</Text>
            <img src={IMAGES_API + poster_path} alt={title}/>
            </Card.Body>
        </div>

        </Card>
        </Grid>
        </Grid.Container> 
        </div>
    );
};


export default Movie;