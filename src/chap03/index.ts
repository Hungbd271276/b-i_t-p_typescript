class Chap03 {
    bai1() {
        let number1: number = 5;
        let number2: number = 2.8;
        let phrase: string = ' Result is ';
        let permit: boolean = true;

        const result = number1 + number2;
        if (permit) {
            console.log(phrase + result);
        } else {
            console.log(' Not show result ');
        }
    }
    bai2() {
        // 2. Type inference
        function add(x = 5) {
            let phrase: string = ' Result is ';

            // let y = '2.8'; 
            x = 2.8;
            return phrase + x;
        }
        let kq = add();
        console.log(kq);
    }
    bai3() {

        var person: {
            name: string,
            age: number
        } = {
            name: "Tyscript",
            age: 11
        }
        console.log(person.name);
    }
    bai4() {
        enum Role { ADMIN, REAFD_ONLY, AUTHOR };
        const person: {
            name: string,
            age: number,
            hobbies: string[],
            role: string,
            roletuple: [number, string];
        } = {
            name: 'Typescript',
            age: 11,
            hobbies: ['Sports', 'Cooking'],
            role: 'black',
            roletuple: [14, 'bui duc hung'],
        }

        let favouriteActivites: any[];
        favouriteActivites = [5, "Sports", true];
        person.roletuple.push('admin');
    }
    bai5() {
        // Literal type & custom type
        type Combinable = number | string;
        function combine(input1: Combinable, input2: number | string, resultConversion: 'as-number' | 'as-text') {
            let result;
            if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
                result = parseFloat(typeof input1) + parseFloat(typeof input2);
            } else {
                result = input1.toString() + input2.toString();
            }
            return result;
        }
        const combineNumber = combine(30, 26, 'as-number');
        console.log(combineNumber);
        const combineStringNumber = combine('30', '26', 'as-number');
        console.log(combineStringNumber);
    }
    bai6() {
        // Num & undefined
        var a = null;
        console.log(a);
        console.log(typeof (a));

        var b;
        console.log(b);
        console.log(typeof (a));
    }
    bai7() {
        let userInput: unknown;
        let username = 'Typescript';
        username = <string>userInput;
        if (typeof userInput === 'string') {
            username = userInput;
        }
    }
    bai8() {
       const Pokemons: number = 25;
        const fetchPokemons = () => {
            for (let i = 0; i <= Pokemons; i++) {
                getPokemon(i);
            }
        };
        const getPokemon = (id) => {
             fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((data) => data.json())
                .then((pokemon) => generateHtml(pokemon))
        }
        const generateHtml = (data) => {
            const pokemonEl = document.createElement('div');
            pokemonEl.classList.add('pokemon');
            let html = `
        <div class = "image">
        <div>#$${data.id}</div>
        <img src = "https://pokeres.bastionbot.org/images/pokemon/${data.id}.png" />
        </div>
        `
            const Pokemons = document.querySelector('#app');
            pokemonEl.innerHTML = html;
            Pokemons.appendChild(pokemonEl);
        }
        fetchPokemons();
       
     
    }
}
export default Chap03;


