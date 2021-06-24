
    interface Lengthy {
        length: number;
    }
    function countAndDescribe<T extends Lengthy>(element: T):  [T, string] {
        let descriptionText = 'Got no value';
        if(element.length === 1) {
            descriptionText = 'Got 1 element';
        }else if(element.length > 1) {
            descriptionText = 'Got' + element.length + 'elements.';
        }
        return [element, descriptionText];
    }
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
    addItem(item: T) {
        this.data.push(item);
    }

    RemoveItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
console.log(textStorage.getItems());
const numberStorage = new DataStorage<number>();