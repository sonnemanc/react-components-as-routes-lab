import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {console.log(actors[0].name)}

      {actors.map( (actor) => (
        <div>
        <h3>{actor.name}</h3>
         <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>))}
          </ul>
        </div>
      )
      )}

    </div>
  );
};

export default Actors;
