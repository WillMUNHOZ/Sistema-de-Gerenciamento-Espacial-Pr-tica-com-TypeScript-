import { handleAddCrew } from "./controllers/handleAddCrew.js";
import { handleAddPilot } from "./controllers/handleAddPilot.js";
import { handleLauchSpaceship } from "./controllers/handleLauchSpaceship.js";
import { handleRegisterPilot } from "./controllers/handleRegisterPilot.js";
import { handleRegisterSpaceship } from "./controllers/handleRegisterSpaceship.js";
import { listPilots } from "./services/listPilots.js";
import { listSpaceships } from "./services/listSpaceships.js";

let currentOption: number = 0;

while (currentOption !== 8) {
    const menu: string = `Painel principal
        1 - Registrar um piloto
        2 - Registrar uma nave
        3 - Adicionar membro a tripulação da nave
        4 - Adicionar Piloto a nave
        5 - Enviar nave em missão
        6 - Listar pilotos registrados
        7 - Listar naves registradas
        8 - Encerrar
    `

    const input = prompt(menu)

    currentOption = input ? +input : 0

    switch (currentOption) {
        case 1:
            handleRegisterPilot();
            break;
        case 2:
            handleRegisterSpaceship();
            break
        case 3:
            handleAddCrew();
            break;
        case 4:
            handleAddPilot();
            break
        case 5:
            handleLauchSpaceship();
            break
        case 6:
            listPilots();
            break;
        case 7:
            listSpaceships();
            break
        case 8:
            alert("Encerrando o sistema...")
            break
        default:
            alert("Opção invalida! Retornando ao painel principal...")
            break;

    }
}

