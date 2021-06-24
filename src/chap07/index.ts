class Product<X, Y, Z> {
    id: X;
    name: Y;
    price: Z;
    constructor(id: X , name: Y, price: Z) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showlist<T>(list: T[]): T[] {
        return list; 
    }
    showInfo(): void {
        console.log(`
           id: ${this.id}
           name: ${this.name}
           price: ${this.price}
         `)
    }
    
}

export default Product;