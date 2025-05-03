import { spaceships } from "../data/spaceships.js";
export function listSpaceships() {
    let list = [];
    if (spaceships.length !== 0) {
        list = spaceships.map(ship => `
            [ Nome: ${ship.name}
            Piloto: ${ship.pilot?.name}
            Máximo de tripulantes: ${ship.crewLimit}
            Tripulantes: ${ship.crew}
            Em missão? ${ship.inMission ? "Sim" : "Não"} ]
            `);
    }
    else {
        list.push("A lista esta fazia.");
    }
    return alert(list);
}
