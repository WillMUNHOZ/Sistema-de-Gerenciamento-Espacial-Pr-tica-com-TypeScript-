export class Spaceship {
    name;
    pilot;
    crewLimit;
    crew = [];
    inMission = false;
    constructor(attributes) {
        this.name = attributes.name;
        this.crewLimit = attributes.crewLimit;
    }
    describe() {
        return `
        Nave: ${this.name}
        Piloto: ${this.pilot ? this.pilot.name : "A nave esta sem piloto!"}
        Tripulantes: ${this.crew.join(', ')}
        Em missão: ${this.inMission ? "Sim" : "Não"}
        `;
    }
    addMemberToCrew(member) {
        if (this.crew.length > this.crewLimit) {
            alert("Limite de tripulação atingido");
        }
        this.crew.push(member);
    }
    addPilot(pilot) {
        this.pilot = pilot;
    }
    lauchSpaceship() {
        if (this.inMission) {
            return alert("A nave se encontra em uma missão!");
        }
        if (this.crew.length < this.crewLimit / 3) {
            return alert("Tripulação insuficiente para missão!");
        }
        if (!this.pilot) {
            return alert("A nave precisa de um piloto!");
        }
        alert("Nave enviada para missão...");
    }
}
