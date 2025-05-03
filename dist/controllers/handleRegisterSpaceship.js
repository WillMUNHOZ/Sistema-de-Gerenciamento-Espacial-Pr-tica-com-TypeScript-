import { registerSpaceship } from "../services/registerSpaceship";
export function handleRegisterSpaceship() {
    const name = prompt("Qual o nome da nave a ser registrada?") ?? "";
    const inputCrewLimit = prompt(`Quantos tripulantes a ${name} suporta?`);
    const crewLimit = inputCrewLimit ? +inputCrewLimit : "";
    if (name && crewLimit) {
        const spaceship = {
            name: name,
            crewLimit: crewLimit,
        };
        registerSpaceship(spaceship);
    }
}
