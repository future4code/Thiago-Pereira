import { CharacterStats } from "./interfaces/inter_characterStats";



export const checkCharacterStats = (input: CharacterStats): boolean => {
    if(
        !input.name || input.life === undefined || 
        input.protection === undefined || input.power === undefined
    ) { return false }

    if (
        input.life <= 0 || input.protection <= 0 || input.power <= 0
    ) { return false }

    return true
}

export const performAttack = (
    attacker: CharacterStats, 
    attacked: CharacterStats,
    validator: (input: CharacterStats) => boolean
    ) => {
    if (
        !validator(attacker) || !validator(attacked)
    ) { throw new Error("This character has invalid stats") }

    if(
        attacker.power > attacked.protection
    ) { attacked.life -= attacker.power - attacked.protection }
}