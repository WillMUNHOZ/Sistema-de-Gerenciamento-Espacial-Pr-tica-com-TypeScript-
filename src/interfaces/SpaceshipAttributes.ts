import { Pilot } from "../models/Pilot.js"

export interface SpaceshipAttributes {
    name: string
    pilot?: Pilot
    crewLimit: number
    crew?: string[]
    inMission?: boolean
}