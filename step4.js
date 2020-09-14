var app = new Vue({
    el: '#app',
    data: {
        a: 'hello'
    },
    created: function(){
        console.log('a is:' + this.a)
    }
})

app.a = 'change';

var app1 = new Vue({
    el: '#app1',
    data: {
        rawHtml: '<span style="color: red">This should be red</span>'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        a: 3,
        ok: true,
        message: 'It will be reverse',
        id: 1
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})