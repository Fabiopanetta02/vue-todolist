const root = new Vue({
    name: 'Todolist',
    el:'#root',
    data: {
       tasks: [
        {
            text:'Fare la spesa',
            done: true,
        },
        {
            text:'Pulire casa',
            done: false,
        },
       ] 
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
})