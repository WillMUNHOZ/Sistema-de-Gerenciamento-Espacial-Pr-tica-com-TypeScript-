import { pilots } from "../data/pilots.js";

export function listPilots() {
    let list: string[] = []

    if (pilots.length !== 0) {
        list = pilots.map(p => `
            [ Nome: ${p.name}, 
            Idade: ${p.age} ]
            `);
    } else {
        list.push("A lista esta fazia.");
    }

    return alert(list);
}