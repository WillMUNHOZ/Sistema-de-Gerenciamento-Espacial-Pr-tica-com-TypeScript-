import { pilots } from "../data/pilots";
import { spaceships } from "../data/spaceships";

export function handleAddPilot() {

    const ships = spaceships.map((ship, index) => {
        return `
        ${index + 1} - Nome: ${ship.name} | Limite de tripulantes: ${ship.crewLimit}
        `
    })

    const menu = `Qual nave deseja adicionar o piloto?
        ${ships}
        ${spaceships.length + 1} - Voltar
    `

    const chosenSpaceship = +prompt(menu)!;
    const spaceshipIndex = chosenSpaceship ? chosenSpaceship - 1 : -1;

    const plts = pilots.map((pilot, index) => {
        return `
        ${index + 1} - Nome: ${pilot.name} | Idade: ${pilot.age}
        `
    })

    const menuPilot = `Qual piloto deseja adicionar a ${spaceships[spaceshipIndex].name}
        ${plts}
        ${pilots.length + 1} - Voltar
    `

    const chosenPilot = +prompt(menuPilot)!
    const pilotIndex = chosenPilot ? chosenPilot - 1 : -1;

    const spaceship = spaceships[spaceshipIndex];
    const pilot = pilots[pilotIndex];

    spaceship.addPilot(pilot);

    return alert("Piloto adicionado com sucesso a nave!");
}