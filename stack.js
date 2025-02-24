class Stack{
    constructor(stack){
        this.stack = stack
    }

    pushIntoStack(value){
        this.stack.push(value);
    }

    popFromStack(){
        if (this.isEmpty()) {
            return -1;
        }
        else {
            return this.stack.pop();
        }   
    }

    isEmpty(){
        return this.stack.length === 0;
    }
}

function implementStack(input){
    const stack1 = new Stack(input);
    stack1.pushIntoStack(1);
    console.log(stack1.popFromStack());
    console.log(stack1.popFromStack());
    console.log(stack1.popFromStack());
    stack1.pushIntoStack(1);
    console.log(stack1.popFromStack());
    console.log(stack1.popFromStack());
}

document.getElementById('inputForm').addEventListener('submit', function(event){
    event.preventDefault();
    const input = document.getElementById('stackInput').value.split(',');
    implementStack(input);
});
