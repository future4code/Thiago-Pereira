1. a
feito em src/interfaces/inter_characterStats.ts

1. b
feito em src/index.ts
    checkCharacterStats


2. a, b, c, d, e, f
tests/character.test.ts (~linha 5+)


3. a
    export const performAttack = (attacker: CharacterStats, attacked: CharacterStats) => {
        if (
            !checkCharacterStats(attacker) || !checkCharacterStats(attacked)
        ) { throw new Error("This character has invalid stats") }


        if(
            attacker.power > attacked.protection
        ) { attacked.life -= attacker.power - attacked.protection }
    }

3. b
feito em src/index.ts
    performAttack

3. c
Ao usar inversão de dependências, nos consegue fazer os testes unitários em funções que implementam outras funções dentro de seu escopo.


4. a
Se eu entendi a tour direitinho... Deveremos criar o mock da checkCharacterStats, pois é nela que iremos fazer os testes unitários da função performAttack e como a mesma possui no seu escopo a função checkCharacterStats, se torna necessário mockar ela.

4. b, c
tests/character.test.ts (~linha 71+)

5. a, b
tests/character.test.ts (~~ linha 88+)
tests/character.test.ts (~~ linha 115+)