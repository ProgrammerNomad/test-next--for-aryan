import React, { useRef, useState } from "react";

const Games = ({ gamelists }) => {
   // console.log("games", gamelists);
  return (
    <table width={500}>
    <tr>
      {gamelists.map((game, i) => {
        return (
          <tr>
            <td>{game.id}</td>
            <td>{game.default_service}</td>
            <td>{game.slug}</td>
            <td>{game.updated}</td>
          </tr>
        );
      })}
    </tr>
    </table>
  );
};

export default Games;