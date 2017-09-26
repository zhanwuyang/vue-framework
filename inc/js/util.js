(function(){
	var util = function(){
		this.getLock = true;
		this.postLock = true;
        this.soundIds = [];
	};
    util.prototype = {
        log:function(){
            if(logLock){
                console.log(arguments)
            }
        },
        get: function (url, fn, dataType) {
            var that = this;
            var datatype = dataType != undefined ? dataType : "";
            if (that.getLock) {
                that.getLock = false;
                $.ajax({
                    url: url,
                    type: 'get',
                    dataType: datatype,
                    success: function (data) {
                        fn(data);
                        that.getLock = true;
                    },
                    error: function () {
                        that.getLock = true;
                    }
                });

            }
        },
        post: function (url, fn, data) {
            var that = this;
            if (that.postLock) {
                that.postLock = false;
                $.ajax({
                    url: url,
                    type: 'post',
                    data: data,
                    success: function (code) {
                        fn(code);
                        console.log('第一次回调', code);
                        that.postLock = true;
                    },
                    error: function () {
                        that.postLock = true;
                    }
                });
            }
        },
        regphone: function (str) {//电话号码
            var reg = /^1\d{10}$/;
            if (reg.test(str)) {
                return true;
            } else {
                return false;
            }
        },
        testNull: function (value) {
            if (value == '' || value == null) {
                return false;
            } else {
                return true;
            }
        },
        mobile: function () {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid) {
                return true;
            } else {
                return false;
            }
        },
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg); //匹配目标参数
            if (r != null) return (r[2]);
            return null; //返回参数值
        },
        setCookie: function (project,name, value) {
            var Days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = project+'>'+name + "=" + escape(value) + ";expires=" + exp.toGMTString();
        },
        getCookie: function (project,name) {
            var str = project+'>'+name;
            var arr, reg = new RegExp("(^| )" + str + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        delCookie: function (project,name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval= this.getCookie(project,name);
            if(cval!=null)
                document.cookie= project+'>'+name + "="+cval+";expires="+exp.toGMTString();
        },
        show: function (arr) {
            for (var i = 0; i < arr.length; i++) {
                $(arr[i]).removeClass("disNone")
            }
        },
        hide: function (arr) {
            for (var i = 0; i < arr.length; i++) {
                $(arr[i]).addClass("disNone")
            }
        },
        playSound: function (target, src, delay) {
            this.soundIds[target] = setTimeout(function () {
                document.getElementById(target).src = ROOT_URL + '/vod/' + src;
                document.getElementById(target).play();
            }, delay);


        },
        stopSound: function (target) {

            var that = this;
            if(target){
                clearTimeout(that.soundIds[target]);
                document.getElementById(target).pause();
            }else{
                for (var i in that.soundIds) {
                    clearTimeout(that.soundIds[i]);
                    document.getElementById(i).pause();
                }
            }

        },
        setImg: function (id, src) {
            $(id).css('backgroundImage', 'url(' + ROOT_URL + '/image/' + src + ')')
        },
        mergeImg: function (id,data, text) {
            var base64 = [];
            var i;
            var Mycanvas = document.createElement("canvas"),
                ct = Mycanvas.getContext("2d"),
                len = data.length;
            var textLen = text?text.length:0;
            console.log(textLen)
            Mycanvas.width = data[0]["w"];     //应为模板的宽
            Mycanvas.height = data[0]["h"];    //应为模板的高
            ct.rect(0, 0, Mycanvas.width, Mycanvas.height);
            ct.fillStyle = '#fff';
            ct.fill();
            function draw(n) {
                if (n < len) {
                    var img = new Image;
                    img.crossOrigin = 'Anonymous'; //解决跨域
                    img.src = data[n]['src'];
                    img.onload = function () {
                        var x= data[n]['x']?data[n]['x']:0;
                        var y= data[n]['y']?data[n]['y']:0;
                        ct.drawImage(this, x, y, data[n]['w'], data[n]['h']);
                        if(n==len-1){
                            for (i = 0; i < textLen; i++) {
                                ct.font = (text[i].font?text[i].font:"30px")+" Arial" ;
                                ct.fillStyle = text[i].color?text[i].color:"#000";
                                ct.fillText(text[i]['text'], text[i]['x'], text[i]['y']);
                            }
                        }
                        draw(n + 1);
                    }
                } else if (i > textLen - 1 && n > len - 1) {
                    base64.push(Mycanvas.toDataURL("image/png"));
                    document.getElementById(id).innerHTML = '<img src="' + base64[0] + '">';
                }
            }
            draw(0)
        }
	};
	window.Util = new util();
})(window);

(function($){
    $.fn.playCartoon = function(option){
        var target = this;
        window.cgIds = {};
        var middleFn = option.middle?option.middle:null;//序列帧播放时，中间执行的函数
        var repeat = option.repeat?option.repeat:null;//循环
        var start = option.total[0];
        var end = option.total[1];
        var type = option.type?option.type:'jpg';
        if(start<end){
            play();
        }else{
            play_return();
        }
        function play(){
            if(start<end){
                target.css('backgroundImage','url('+ROOT_URL+'/image/'+option.prefix+'/'+start+'.'+type+')').css('background-size','cover');
                start+=option.step;
                if(middleFn){
                    for(var i in middleFn){
                        //判断区间
                        if(start>parseInt(i)&&start<parseInt(i)+option.step){
                            middleFn[i]();
                        }
                    }
                }
                window.cgIds[target.selector] = setTimeout(play,option.speed);

            }else{
                clearTimeout(window.cgIds[target.selector]);
                if(option.callback){ option.callback(); };
                if(repeat>1){//循环次数
                    repeat--;start = option.total[0];
                    play();
                }else if(repeat==-1){//无限循环
                    start = option.total[0];
                    play();
                }
            }
        }
        function play_return(){
            if(start>end){
                target.css('backgroundImage','url('+ROOT_URL+'/image/'+option.prefix+'/'+start+'.'+type+')').css('background-size','cover');
                start-=option.step;
                if(middleFn){
                    for(var i in middleFn){
                        //判断区间
                        if(start>parseInt(i)&&start<parseInt(i)+option.step){
                            middleFn[i]();
                        }
                    }
                }
                window.cgIds[target.selector] = setTimeout(play_return,option.speed);

            }else{
                clearTimeout(window.cgIds[target.selector]);
                if(option.callback){ option.callback(); };
                if(repeat>1){//循环次数
                    repeat--;start = option.total[0];
                    play_return();
                }else if(repeat==-1){//无限循环
                    start = option.total[0];
                    play_return();
                }
            }
        }

        return this;
    };

    $.fn.playMusic = function(dom){

        var target = this;
        var audio = target.find(dom)[0];
        target.on('touchstart',function(){
            if(audio.paused){
                audio.play();
                target.css('background-image','url('+ROOT_URL+'/image/common/play.png)')
            }else{
                audio.pause();
                target.css('background-image','url('+ROOT_URL+'/image/common/pause.png)')
            }
        });
        return this;
    };


    $.fn.shake = function(CALLBACK){
        if (window.DeviceMotionEvent){
            window.addEventListener('devicemotion', deviceMotionHandler, false);
        }
        //获取加速度信息
        //通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
        //而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
        var SHAKE_THRESHOLD = 4000;
        var last_update = 0;
        var x, y, z, last_x = 0, last_y = 0, last_z = 0;
        function deviceMotionHandler(eventData) {
            var acceleration = eventData.accelerationIncludingGravity;
            eventData.preventDefault();
            var curTime = new Date().getTime();
            if ((curTime - last_update) > 10) {
                var diffTime = curTime - last_update;
                last_update = curTime;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
                var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
                if (speed > SHAKE_THRESHOLD) {
                    if (navigator.vibrate) {
                        navigator.vibrate(1000);//震动1000毫秒
                    } else if (navigator.webkitVibrate) {
                        navigator.webkitVibrate(1000);
                    }

                    CALLBACK(x,y,z);

                }
                last_x = x;
                last_y = y;
                last_z = z;
            }
        }
        return this;
    };
    $.fn.crop = function(option){
        var target = this;
        var spacingX = option.spacingX?option.spacingX+option.width:0;
        var spacingY = option.spacingY?option.spacingY+option.height:0;
        var fixed = option.fixed?option.fixed:'width';
        var className = option.class?option.class:'';
        for(var i = 0;i<parseInt(option.number);i++){
            $('<div class="'+className+' '+'delay-'+i*5+'"></div>').css({
                background:'url('+option.src+') no-repeat',
                backgroundSize:'100% auto',
                backgroundPositionY:i*-option.height+'px',
                width:option.width+'px',
                height:option.height+'px',
                left:i*spacingX+'px',
                top:i*spacingY+'px'
            }).appendTo(target);
            if(fixed=='width'){
                $(target).children('div').eq(i).css({
                    backgroundSize:'100% auto',
                    backgroundPositionY:i*-option.height+'px',
                })
            }else{
                $(target).children('div').eq(i).css({
                    backgroundSize:'auto 100%',
                    backgroundPositionX:i*-option.width+'px',
                })
            }
        }
        return this;
    }

})(jQuery);