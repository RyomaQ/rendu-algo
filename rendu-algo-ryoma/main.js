// Rendu 1 : Le taxi 
// let redLights = 30;
// let mentalHealth = 10;
// let taxis = 0
// const musics = [
//     'Anissa de Wejdene',
//     'In Da Club de 50 Cent',
//     'Hii Power de Kendrick Lamar',
//     'Douce France de Charles Trenet',
//     'Morose de Damso'
// ]

// function playMusic() { 
//     return Math.floor(Math.random() * 5)
// }

// while (mentalHealth > -1){
//     if(mentalHealth != 0) {
//         if(redLights != 0) {
//             if(playMusic() == 0) {
//                 mentalHealth--;
//                 taxis++;
//                 console.log('!! Anissa passe à la radio, sa santé mentale passe à ' + mentalHealth + '. John met le chauffeur KO et change de taxi');
//                 continue;
//             } else {
//                 console.log(musics[playMusic()] + ' passe à la radio, il lui reste ' + redLights + ' feux rouges.');
//             }
//         } else if(redLights == 0) {
//             console.log('John est arrivé chez lui, il est monté dans ' + taxis + ' taxis et sa santé mentale est à ' + mentalHealth) 
//             break;
//         }
//     } else if (mentalHealth == 0) {
//         console.log('John est à bout, il emmené au urgence')
//         break;
//     }
//     redLights--;
//     console.log('Le taxi avance jusqu\'au prochain feu')
// }

// Rendu 2 : Le tueur en série
let jasonHP = 100;

// class crewMember {
//     constructor(name, job, die, damage, dieAndDamage) {
//         this.name = name;
//         this.job = job;
//         this.die = die;
//         this.damage = damage;
//         this.dieAndDamage = dieAndDamage;
//     }
// }

class crewMember {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
}

const nameStock = [
    'James',
    'Beatrice',
    'Emilia',
    'Cora',
    'Robbie',
    'Elena',
    'David',
    'Johnny',
    'Pascal',
    'Carla',
    'Nina',
    'Dylan',
    'Claire',
    'Isaac',
    'Prisca',
    'Oumar',
    'Keith',
    'Victor',
    'Marie',
    'Quentin'
]

// Choisir leur nom
function nameIndex() {
    return Math.floor(Math.random() * nameStock.length)  
}

// Quel membre se fait attaquer
// function memberIndex() {
//     return Math.floor(Math.random() * 6)  
// }

// let members = [
//     new crewMember(nameStock[nameIndex()], 'geek', 0.3, 0.5, 0.2),
//     new crewMember(nameStock[nameIndex()], 'musclor', 0.4, 0.1, 0.5),
//     new crewMember(nameStock[nameIndex()], 'blonde', 0.5, 0.3, 0.2),
//     new crewMember(nameStock[nameIndex()], 'nain', 0.2, 0.7, 0.1),
//     new crewMember(nameStock[nameIndex()], 'badass', 0.1, 0.4, 0.5),
// ]

let members = [
    new crewMember(nameStock[nameIndex()], 'geek'),
    new crewMember(nameStock[nameIndex()], 'musclor'),
    new crewMember(nameStock[nameIndex()], 'blonde'),
    new crewMember(nameStock[nameIndex()], 'nain'),
    new crewMember(nameStock[nameIndex()], 'badass'),
]

console.log('Nos 5 survivants ' + members[0].name + ', ' + members[1].name + ', ' + members[2].name + ', ' + members[3].name + ' et ' + members[4].name + ' tombent nez à nez avec Jason.')

while(jasonHP > 0 && members.length > 0) {
    let action = Math.floor(Math.random() * 3);
    let memberIndex = Math.floor(Math.random() * members.length)
    console.log('Jason attaque ' + members[memberIndex].name + ' le ' + members[memberIndex].job)
    if(action == 0) {
        console.log(members[memberIndex].name + ' le ' + members[memberIndex].job + ' est mort.'),
        members.splice(memberIndex, 1)
        if(members.length == 0){
            console.log('Tout les survivants sont morts, échec de la mission..')
        }
    } else if (action == 1) {
        jasonHP = jasonHP - 10;
        if(jasonHP < 0) {
            console.log(members[memberIndex].name + ' le ' + members[memberIndex].job + ' a tué Jason, la mission est réussie !!')
        } else {
            console.log(members[memberIndex].name + ' le ' + members[memberIndex].job + ' retire 10pv à Jason, il lui reste ' + jasonHP + 'pv. Il reste ' + members.length + ' survivants.')
        }
    } else if (action == 2) {
        jasonHP = jasonHP - 15;
        if(jasonHP < 0) {
            console.log(members[memberIndex].name + ' le ' + members[memberIndex].job + ' est mort mais tue Jason, la mission est réussie !!');
            break;
        } else {
            console.log(members[memberIndex].name + ' le ' + members[memberIndex].job + ' est mort mais retire 15pv à Jason, il lui reste ' + jasonHP + 'pv. Il reste ' + (members.length-1) + ' survivants.')
            members.splice(memberIndex, 1);
            if(members.length == 0 && jasonHP == 0) {
                console.log('C\'est un carnage, tout le monde meurt')
            } else if(members.length == 0 && jasonHP > 0) {
                console.log('Tout les survivants sont morts, échec de la mission..')
            } else if(members.length == 0 && jasonHP > 0) {
                console.log(members[memberIndex].name + ' a tué Jason, la mission est réussie !!')
            }
        }
    }
}

// Exercice Pokemon
// class Pokemon {
//     constructor(name, attack, defense, hp, luck) { 
//         this.name = name;
//         this.attack = attack;
//         this.defense = defense;
//         this.hp = hp;
//         this.luck = luck;
//     }

//     isLucky() {
//         return this.luck < Math.random()
//     }

//     attackPokemon(pokemon) {
//         if(pokemon.isLucky()) {
//             console.log(pokemon.name + ' évite l\'attaque.')
//         } else {
//             pokemon.hp = pokemon.hp - (this.attack - pokemon.defense)
//             console.log(this.name + ' retire ' + (this.attack - pokemon.defense) + 'pv à ' + pokemon.name + ' il lui reste ' + pokemon.hp + 'pv.')
//         }
//     }

// }

// let lucario = new Pokemon('Lucario', 75, 34, 250, 0.8);
// let bulbizar = new Pokemon('Bulbizar', 89, 20, 270, 0.6);

// let turn = 0;

// while (lucario.hp > 0 || bulbizar.hp > 0) {
//     if(turn==0) {
//         lucario.attackPokemon(bulbizar)
//         turn = 1;
//         if(bulbizar.hp < 0) {
//             console.log('Bulbizar est mort.')
//             break;
//         }

//     } else {
//         bulbizar.attackPokemon(lucario)
//         turn = 0;
//         if(lucario.hp < 0) {
//             console.log('Lucario est mort.')
//             break;
//         }
//     }
// }




