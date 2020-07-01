const Todo = (title, description, dueDate, priority) => {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDueDate) => dueDate  = newDueDate;
    const setPriority = (newPriority) => priority = newPriority;

    return {getTitle, getDescription, getDueDate, getPriority, setTitle, setDescription, setDueDate, setPriority};
};

const Project = (name) => {
    let todos = [];
    const getName = () => name;
    const setName = (newName) => name = newName;
    const addTodo = (todo) => todos.push(todo);


    return {getName, setName, addTodo};
};



