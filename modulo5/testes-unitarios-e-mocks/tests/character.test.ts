import { checkCharacterStats, performAttack } from "../src";
import { CharacterStats } from "../src/interfaces/inter_characterStats";

// exercício 2) a, b, c, d, e, f
describe("Check character input stats", () => {
    test("Verify if return false for empity name", () => {
        const input = checkCharacterStats({
            name: '',
            life: 1500,
            protection: 300,
            power: 500
        })

        expect(input).toBe(false)
    })

    test("Verify if return false for zero life", () => {
        const input = checkCharacterStats({
            name: 'Lisa',
            life: 0,
            protection: 200,
            power: 550
        })

        expect(input).toBe(false)
    })

    test("Verify if return false for zero protection", () => {
        const input = checkCharacterStats({
            name: 'Sara Trantoul',
            life: 1500,
            protection: 0,
            power: 300
        })

        expect(input).toBe(false)
    })

    test("Verify if return false for zero power", () => {
        const input = checkCharacterStats({
            name: 'Maria Renard',
            life: 1500,
            protection: 400,
            power: 0
        })
        expect(input).toBe(false)
    })

    test("Verify if return false for negative stat too", () => {
        const input = checkCharacterStats({
            name: 'Joachim Armster',
            life: -1000,
            protection: 600,
            power: 600
        })
        expect(input).toBe(false)
    })

    test("Verify what return if all stats is correct", () => {
        const input = checkCharacterStats({
            name: 'Shanoa Moonlight',
            life: 1500,
            protection: 250,
            power: 550
        })
        expect(input).toBe(true)
    })

})


describe("Mocks tests", () => {
    test("test for Mocks thats will return true", () => {
        const validatorMocked = jest.fn(() => {
            return true
        })
    })

    test("test for Mocks thats will return false", () => {
        const validatorMocked = jest.fn(() => {
            return false
        })
    })
})


describe("Check characters actions performs", () =>{
    test("Verify attack perform with true return", () => {
        const validatorMocked = jest.fn(() => {
            return true
        })

        const attacker: CharacterStats = {
            name: 'Richter Belmont',
            life: 1500,
            protection: 300,
            power: 350
        }

        const attacked: CharacterStats = {
            name: 'Mathias Cronqvist',
            life: 1500,
            protection: 300,
            power: 400
        }

        performAttack(attacker, attacked, validatorMocked as any)

        expect(attacked.life).toEqual(1450)
        expect(validatorMocked).toHaveBeenCalled()
        expect(validatorMocked).toHaveBeenCalledTimes(2)
        expect(validatorMocked).toHaveReturnedTimes(2)
    })

    test("Verify attack perform with false return", () => {
        expect.assertions(4)
        const validatorMocked = jest.fn(() => {
            return false
        })

        const attacker: CharacterStats = {
            name: '',
            life: 1500,
            protection: 400,
            power: 300
        }

        const attacked: CharacterStats = {
            name: 'Leon Belmont',
            life: 1500,
            protection: 250,
            power: 450
        }

        try{
            performAttack(attacker, attacked, validatorMocked as any)
        } catch (error) {
            expect(error.message).toBe("This character has invalid stats")
            expect(validatorMocked).toHaveBeenCalled()
            expect(validatorMocked).toHaveBeenCalledTimes(1)
            expect(validatorMocked).toHaveReturnedTimes(1)
        }
    })
})