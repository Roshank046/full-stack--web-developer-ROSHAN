let input = prompt('what would you like to do?')
const todos = ['collect chicken eggs','clean litter box'];
while (input !=='quit'&& input !=='q'){
    if(input==='list'){
        console.log('***********')
        for (let i=0;i< todo.length;i++){
            console.log(`${i}:${todo[i]}`);
        }
         console.log('***********')   
    }else if (input==='new'){
        const newTodo =prompt('ok,what is this new todo?');
        todo.push(newTodo);
        console.log(`${newTodo}added to the list!`)
    }else if (input==='delete'){
        const index = parseInt(prompt ('ok enter the intex to delete:'));
        if (!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
            console.log(`ok,{deleted $[0]}`);
        }else{
        console.log('unknown index')
    }
} 
input = prompt("what would you like to do?")
}
console.log("OK QUIT THE APP") 