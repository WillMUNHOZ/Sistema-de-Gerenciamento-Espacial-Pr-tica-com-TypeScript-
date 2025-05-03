import { spaceships } from "../data/spaceships";
export function handleLauchSpaceship() {
    const ships = spaceships.map((ship, index) => {
        return `
        ${index + 1} - Nome: ${ship.name} | Limite de tripulantes: ${ship.crewLimit}
        `;
    });
    const menu = `Qual nave deseja enviar para missão?
        ${ships}
        ${spaceships.length + 1} - Voltar
    `;
    const chosenSpaceship = +prompt(menu);
    const spaceshipIndex = chosenSpaceship ? chosenSpaceship - 1 : -1;
    spaceships[spaceshipIndex].lauchSpaceship();
}
