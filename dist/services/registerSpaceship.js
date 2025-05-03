import { spaceships } from "../data/spaceships.js";
import { Spaceship } from "../models/Spaceship.js";
export function registerSpaceship(spaceship) {
    const newSpaceship = new Spaceship(spaceship);
    spaceships.push(newSpaceship);
    return alert("Nave espacial registrada com sucesso!");
}
