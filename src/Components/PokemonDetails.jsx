import React from 'react'

const PokemonDetails = ({data}) =>{
    return (
        <>
            {
                (!data) ? "" : (
                    <div
                        className="modal fade"
                        id={`exampleModal-${data.id}`}
                        tabIndex="-1"
                        aria-labelledby={`exampleModal-${data.id}Label`}
                        aria-hidden="true"
                    >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                        <h1 className='title' style={{ marginBottom: '20px' }}>Pokemon - {data.name.toUpperCase()}</h1>
                       <div className="modal-container">
                         <div className="image">
                             <img src={`/sprites/${data.id}.svg`} alt={`${data.name}`}/>
                         </div>
                       </div>
                           <div>
                               <h2 className="info px-4 py-1 rounded mt-3" style={{ border: '1px black solid' }}>Abilities</h2>
                               <div className="abilities">
                                   {data.abilities.map(poke => {
                                       return(
                                           <>
                                               <ul className="group">
                                                   <li>{poke.ability.name}</li>
                                               </ul>
                                           </>
                                       )
                                   })
                                   }
                               </div>
                               <h2  className="info px-4 py-1 rounded" style={{ border: '1px black solid' }}>Types</h2>
                               <div className="types">
                                   {
                                       data.types.map(poke => {
                                           return(
                                               <>
                                                   <ul className="group">
                                                       <li>{poke.type.name}</li>
                                                   </ul>
                                               </>
                                           )
                                       })
                                   }
                               </div>
                           <h2 className="info px-4 py-1 rounded" style={{ border: '1px black solid' }} >More Info</h2>
                           <div className="base-stat">
                               {
                                   data.stats.map(poke => {
                                       return(
                                           <>
                                               <ul>
                                                   <li>{poke.stat.name} - {poke.base_stat}</li>
                                               </ul>
                                           </>
                                       )
                                   })
                               }
                           </div>
                           </div>
                    </div>
                  </div>
                </div>
           </div>
                )
            }

        </>
    )
}
export default PokemonDetails