import React from 'react';

const Card=({pokemon, loading})=>{
    return(
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>
                                <div className="card-container" key={item.id}>
                                    <div className="number">
                                    <small>#0{item.id}</small>
                                    </div>
                                    <img src={`/sprites/${item.id}.svg`} alt={`${item.name}`} style={{maxWidth: "150px"}}/>
                                    <div className="details-wrapper">
                                    <h3>{item.name}</h3>
                                    </div>
                                </div>
                             </>
                        )
                    })
            }

        </>
    )
}
export default Card;
