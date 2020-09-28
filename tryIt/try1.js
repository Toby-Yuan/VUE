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
        close: function(get) {
            if(get.target.tagName !== 'IMG'){
                document.getElementById('lightBox').style.visibility = 'hidden';
                document.getElementById('lightBox').style.opacity = 0;
                setTimeout(function(){document.getElementById('lightBox').innerHTML = '<button class="close" onclick="closeIt()">X</button>';},500);
            };
        }
    }
})

Vue.component('slide-image', {
    props: ['url'],
    template: '<div class="one-slide"><img :src="url" ondragstart="return false"></div>'
})

var slideArea = new Vue({
    el: '#slideArea',
    data: {
        images: ['./img/image1.jpg', './img/image2.jpg', './img/image3.jpg'],
    }
})

var firstShow = 1;
showFirst(firstShow);

// 初始狀態
function showFirst(n) {
    var i;
    var allSlide = document.getElementsByClassName('one-slide');

    firstShow = n;

    // 隱藏所有輪播頁
    for(i = 0; i < allSlide.length; i++){
        allSlide[i].style.left = '100%';
    };

    // 顯示所選輪播頁
    allSlide[n-1].style.left = '0';
};
