import React from 'react';
import {useState} from "react";
import PokemonDetails from "./PokemonDetails";
import Loader from "./Loader";

const Card=({pokemon, loading, infoPokemon})=>{
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <>
            {
                loading ?
                    <Loader /> :
                    pokemon.map((item) => {
                        return (
                            <>
                                <div className="card-container"
                                     data-bs-toggle="modal"
                                     data-bs-target={`#exampleModal-${item.id}`}
                                     key={item.id} onClick={() => {
                                    {
                                        infoPokemon(item);
                                        setModalOpen(true)
                                    }
                                }}>
                                    <div className="number">
                                    <small>#0{item.id}</small>
                                    </div>
                                    <img src={`/sprites/${item.id}.svg`} alt={`${item.name}`}/>
                                    <div className="details-wrapper">
                                    <h2>{item.name.toUpperCase()}</h2>
                                    </div>
                                </div>
                                <PokemonDetails className="modal fade"
                                                id={`exampleModal-${item.id}`}
                                                tabIndex="-1"
                                                aria-labelledby={`exampleModal-${item.id}Label`}
                                                aria-hidden="true"
                                                data={item} setOpenModal={setModalOpen}/>
                             </>
                        )
                    })
            }

        </>
    )
}
export default Card;
