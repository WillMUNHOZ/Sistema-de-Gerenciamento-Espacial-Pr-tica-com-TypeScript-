import { registerPilot } from "../services/registerPilot";
export function handleRegisterPilot() {
    const name = prompt("Qual o nome do piloto a ser registrado?");
    const inputAge = prompt("Qual a idade do piloto?");
    const age = inputAge ? +inputAge : null;
    if (name && age) {
        const pilot = {
            name: name,
            age: age
        };
        registerPilot(pilot);
    }
}
