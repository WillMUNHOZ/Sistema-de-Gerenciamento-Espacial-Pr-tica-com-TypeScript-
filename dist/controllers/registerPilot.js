import { pilots } from "../data/pilots.js";
import { Pilot } from "../models/Pilot.js";
export function registerPilot(pilot) {
    const newPilot = new Pilot(pilot);
    pilots.push(newPilot);
    return alert("Piloto registrado com sucesso!");
}
