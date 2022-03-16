import { performAttack } from "../src"
import { CharacterStats } from "../src/interfaces/inter_characterStats"

// desafio 6:
describe("tests of more attacks by challenges", () => {
    test("attack test challenge 1", () => {
        const validatorMocked = jest.fn(() => {
            return true
        })

        const attacker: CharacterStats = {
            name: 'Maria Renard',
            life: 1500,
            protection: 400,
            power: 500
        }

        const attacked: CharacterStats = {
            name: 'Richter Belmont',
            life: 1500,
            protection: 400,
            power: 100
        }

        performAttack(attacker, attacked, validatorMocked as any)

        expect(attacked.life).toEqual(1400)
        expect(validatorMocked).toHaveBeenCalled()
        expect(validatorMocked).toHaveBeenCalledTimes(2)
        expect(validatorMocked).toHaveReturnedTimes(2)
    })

    test("attack test challenge 2", () => {
        const validatorMocked = jest.fn(() => {
            return true
        })

        const attacker: CharacterStats = {
            name: 'Shaft',
            life: 1500,
            protection: 400,
            power: 300
        }

        const attacked: CharacterStats = {
            name: 'Mathias Cronqvist',
            life: 1500,
            protection: 300,
            power: 200
        }

        performAttack(attacker, attacked, validatorMocked as any)

        expect(attacked.life).toEqual(1500)
        expect(validatorMocked).toHaveBeenCalled()
    })

    test("attack test challenge 3", () => {
        const validatorMocked = jest.fn(() => {
            return true
        })

        const attacker: CharacterStats = {
            name: 'Leon Belmont without Vampires Killer whip',
            life: 1500,
            protection: 200,
            power: 100
        }

        const attacked: CharacterStats = {
            name: 'Walter Bernhard',
            life: 1500,
            protection: 300,
            power: 300
        }

        performAttack(attacker, attacked, validatorMocked as any)

        expect(attacked.life).toEqual(1500)
        expect(attacked.protection - attacker.power).toBeGreaterThan(attacker.power)
        expect(validatorMocked).toHaveBeenCalled()
    })

    test("attack test challenge 4", () => {
        const validatorMocked = jest.fn(() => {
            return true
        })

        const attacker: CharacterStats = {
            name: 'Leon Belmont with Vampires Killer whip',
            life: 1500,
            protection: 200,
            power: 800
        }

        const attacked: CharacterStats = {
            name: 'Walter Bernhard',
            life: 1500,
            protection: 300,
            power: 300
        }

        performAttack(attacker, attacked, validatorMocked as any)
        performAttack(attacker, attacked, validatorMocked as any)

        expect(attacked.life).toEqual(500)
        expect(validatorMocked).toHaveBeenCalled()
        expect(validatorMocked).toHaveBeenCalledTimes(4)
        expect(validatorMocked).toHaveReturnedTimes(4)
    })
})

// desafio 7:
// meu querido diário entendi nada deste aqui, ao ler o desafio, meu cérebro explodiu :nazaré-confusa: