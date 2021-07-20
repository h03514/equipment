const vm = Vue.createApp({
    data() {
        return {
            show: false,
            dataFromChild: '',
            showType: 'computer',
            editMode: false,
            todos: [{
                    id: 1,
                    qvesn: '216911001',
                    title: 'supperlier-01',
                    type: 'computer',
                    model: '520MT'
                },
                {
                    id: 2,
                    qvesn: '216911002',
                    title: 'supperlier-02',
                    type: 'computer',
                    model: '520MT'
                },
                {
                    id: 3,
                    qvesn: '216911003',
                    title: 'supperlier-03',
                    type: 'computer',
                    model: '520MT'
                }
            ],
            monitor: [{
                    id: 1,
                    qvesn: '216911004',
                    title: 'supperlier-04',
                    type: 'Monitor',
                    model: 'ViewSonic'
                },
                {
                    id: 2,
                    qvesn: '216911005',
                    title: 'supperlier-05',
                    type: 'Monitor',
                    model: 'Benq'
                },
                {
                    id: 3,
                    qvesn: '216911006',
                    title: 'supperlier-06',
                    type: 'Monitor',
                    model: 'AOC'
                }
            ],
        }
    },
    methods: {
        fadeMe(e) {
            this.show = !this.show
            if (e.target.text == '主機') {
                this.showType = 'computer'
            }
            if (e.target.text == '螢幕') {
                this.showType = 'monitor'
            }
            if (e.target.text == '筆電') {
                this.showType = 'nb'
            }
            if (e.target.text == '印表機') {
                this.showType = 'printer'
            }
        },
        addNewTodo() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        },
        getChildData(param) {
            this.dataFromChild = param;
            // console.log('567890');
        },


    },
    emits: ['accepted']
})

vm.component('todo-item', {
    template: `
    <span class="row" @mousemove="">
            <div class="col-sm-3">
                {{ qvesn }}
            </div>
            <div class="col-sm-2">
                {{ title }}
            </div>
            <div class="col-sm-3">
                {{ type }}
            </div>
            <div class="col-sm-3">
                {{ model }}{{ count }}
            </div>
            <div class="col-sm-1 " @click="$emit('accepted')" >
                <a href="javascript:;" > <i class="fas fa-edit"></i></a>
            </div>
            </span>
          `,
    props: ['qvesn', 'title', 'type', 'model'],
    // emits: ['remove'],
    methods: {
        alertMsg() {
            this.$emit("getTest", 'ddddd');
        }
    }
})

vm.component('todo-monitor', {
    template: `
    <span class="row">
            <div class="col-sm-3">
                {{ qvesn }}
            </div>
            <div class="col-sm-2">
                {{ title }}
            </div>
            <div class="col-sm-3">
                {{ type }}
            </div>
            <div class="col-sm-3">
                {{ model }}
            </div>
            <div class="col-sm-1" @click="alertMsg">
                <a href="javascript:;"><i class="fas fa-edit"></i></a>
            </div>
            </span>
          `,
    props: ['qvesn', 'title', 'type', 'model'],
    emits: ['remove'],
    methods: {
        alertMsg() {
            alert("click Monitor event is happen")
        }
    }
})


vm.mount("#app");




// const app = Vue.createApp({
//     data() {
//         return {
//             newTodoText: '',
//             todos: [{
//                     id: 1,
//                     title: 'Do the ddishes'
//                 },
//                 {
//                     id: 2,
//                     title: 'Take out the trash'
//                 },
//                 {
//                     id: 3,
//                     title: 'Mow the lawn'
//                 }
//             ],
//             nextTodoId: 4
//         }
//     },
//     methods: {
//         addNewTodo() {
//             this.todos.push({
//                 id: this.nextTodoId++,
//                 title: this.newTodoText
//             })
//             this.newTodoText = ''
//         }
//     }
// })

// app.component('todo-item', {
//     template: `
//             <li>
//               {{ title }}
//               <button v-on:click="$emit('remove')">Remove</button>
//             </li>
//           `,
//     props: ['title'],
//     emits: ['remove']
// })

// app.mount('#todo-list-example')