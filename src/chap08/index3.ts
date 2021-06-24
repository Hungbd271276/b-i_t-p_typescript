class Animals {
    bai3() {
        interface Bird {
            type: 'bird',
            flyingSpeed: number
        }

        interface Horse {
            type: 'hord',
            runningSpeed: number
        }

        type Animal = Bird | Horse

        function moveAnimal(animal: Animal) {
            let speed;
            switch(animal.type) {
                case 'bird':
                speed = animal.flyingSpeed
                break
                case 'hord':
                speed = animal.runningSpeed
            }
            console.log(' Moving at speed ' + speed);
        }
    
    }
}
export default Animals;