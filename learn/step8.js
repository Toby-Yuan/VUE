var app = new Vue({
    el: '#app',
    data: {
        items: [
            {message: 'test1'},
            {message: 'test2'}
        ]
    }
})

var app1 = new Vue({
    el: '#app1',
    data: {
        parentMessage: 'parent',
        items: [
            {message: 'test1'},
            {message: 'test2'}
        ]
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Done',
            public: '2020-08-10'
        }
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        numbers: [1, 2, 3, 4, 5, 6]
    },
    computed: {
        evenNumbers: function(){
            return this.numbers.filter(function (number){
                return number % 2 == 0;
            })
        }
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        sets: [1, 2, 3, 4, 5, 6, 7, 8]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        sets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
})