export default class Stack<Type> {
    arr: Type[]= [];
    constructor(){};
    push(value: Type):void{
        this.arr.push(value);
    }
    pop(): Type | undefined{
        return this.arr.pop();
    }
    peek(): Type | undefined{
        return this.arr.at(-1);
    }
}

