// var app = new Vue({
//     el:'#app',
//     data:{
//         message:"hello jf"
//     }
// })
//
// let app2 = new Vue({
//     el:'#app-2',
//     data{
//         message:"页面加载于"+new Date().toLocaleString()
//     }
// })
// var app3 = new Vue({
//     el: '#app-3',
//     data: {
//         seen: false
//     }
// })
// var app4 = new Vue({
//     el:"#app-4",
//     data:{
//         todos:[
//             {text:'学习 JavaScript'},
//             {text:'学习 Vue'},
//             {text:'学习 整个牛项目'}
//         ]
//     }
// })
//
// let app5 = new Vue({
//     el:"#app-5",
//     data:{
//         message:'Hello World!'
//     },
//     methods:{
//         reverseMessage:function(){
//             this.message = this.message.split('').reverse().join('')
//         }
//     }
// })
// let app6 = new Vue({
//     el:"#app-6",
//     data:{
//         message:"kfjslfjslf"
//     }
// })

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{ todo.text }}</li>'
})
let app7 = new Vue({
    el:"#app-7",
    data:{
        groceryList:[
            {id:0,text:'蔬菜'},
            {id:1,text:'奶酪'},
            {id:2,text:'随便其它什么人吃的东西'}
        ]
    }
})
