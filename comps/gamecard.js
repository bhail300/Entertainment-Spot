
const Game = ({name, released, rating, background_image}) => {
    return (
        <div className="game">
            <h1>{name}</h1>
            <img src={background_image} />
            <div className="game-release">{released}</div>
            <div className="game-rating">{rating}</div>
        </div>
    )
}

export default Game; 