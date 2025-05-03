import { spaceships } from "../data/spaceships";

export function handleAddCrew() {

    const ships = spaceships.map((ship, index) => {
        return `
        ${index + 1} - Nome: ${ship.name} | Limite de tripulantes: ${ship.crewLimit}
        `
    })

    const menu = `Qual nave deseja adicionar tripulante?
        ${ships}
        ${spaceships.length + 1} - Voltar
    `

    const chosenSpaceship = +prompt(menu)!;
    const spaceshipIndex = chosenSpaceship ? chosenSpaceship - 1 : -1;

    const crew: string = prompt("Qual o nome do tripulante?") ?? "";

    const spaceship = spaceships[spaceshipIndex];

    spaceship.addMemberToCrew(crew)
}