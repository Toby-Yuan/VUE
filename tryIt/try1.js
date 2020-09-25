window.onload = function(){
    Vue.component('image-show', {
        template: '<img>'
    })
    
    var imageList = new Vue({
        el: '#js_imageList',
        data: {
            images: ['./img/image1.jpg', './img/image2.jpg', './img/image3.jpg']
        },
        methods: {
            showBox: function(e) {
                document.getElementById('lightBox').style.visibility = 'visible';
                document.getElementById('lightBox').style.opacity = 1;
                var image = "<img src=" + e.target.src + ">";
                document.getElementById('lightBox').innerHTML += image;
            }
        }
    })

    var closeBox = new Vue({
        el: '#lightBox',
        methods: {
            test: function() {
                alert('test');
            }
        }
    })
}

// 關閉燈箱
function closeIt(){
    document.getElementById('lightBox').style.visibility = 'hidden';
    document.getElementById('lightBox').style.opacity = 0;
    document.getElementById('lightBox').innerHTML = '<button class="close" onclick="closeIt()">X</button>';
}