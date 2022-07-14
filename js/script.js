const root = new Vue({
    name: 'Todolist',
    el:'#root',
    data: {
        newTask: '',
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
        },
        addTask() {
            this.tasks.push({
                text: this.newTask,
                done: false,
            });
            this.newTask='';
        }
    }
})