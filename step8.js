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