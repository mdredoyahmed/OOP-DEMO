class ToDo {
    constructor(){
        this.todolist = [];

    }
    addTask (task){
        this.todolist.push(task)
    }
    printTasks() {
        this.todolist.forEach((task , index)=>{
            console.log(`${index+1} ${task}`);
        });
    }
}

const personalTodolist = new ToDo();
personalTodolist.addTask("Buy groceries");
personalTodolist.addTask("Clea n the house");
personalTodolist.addTask("Finish homwork");
personalTodolist.printTasks();

const workTodoList = new ToDo () ;