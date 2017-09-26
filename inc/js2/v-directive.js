/**
 * Created by wy on 2017/9/13.
 */
//自定义指令  扩展功能
var Event = new Vue();
Vue.directive('display',{
    inserted:function(el,binding) {
        //判断值
        if (binding.value) {
            //判断参数
            switch (binding.arg) {
                //打开
                case 'open':
                    $(el).on('touchend',function(){
                        Event.$emit(binding.value+'open');
                    });
                    break;
                    //弹层监听
                case 'pop':
                    $(el).hide();
                    var arr = binding.value.split(' ');
                    for(var i = 0;i<arr.length;i++){
                        Event.$on(arr[i]+'open',function(){
                            $(el).show();
                        });
                        Event.$on(arr[i]+'close',function(){
                            $(el).hide();
                        });
                    }
                    break;
                //关闭
                case 'close':
                    $(el).on('touchend',function(){
                        Event.$emit(binding.value+'close');
                    });
                    break;
            }
        }
    }
});
Vue.directive('showpage',{
    inserted:function(el,binding){
        if(binding.value){
            var arr = binding.value[1].split(' ');
            //根据传的参数判断事件 点击或滑动
            if(arr.length==1&&arr[1]!='prev'&&arr[1]!='next'){
                var endX,endY,newX,newY;
                //防误滑
                $(el).on('touchstart',function(event){
                    endX = event.originalEvent.targetTouches[0].clientX;
                    endY = event.originalEvent.targetTouches[0].clientY;
                });
                $(el).on('touchend',function(event){
                    newX = event.originalEvent.changedTouches[0].clientX;
                    newY = event.originalEvent.changedTouches[0].clientY;
                    if(Math.abs(endY-newY)<10&&Math.abs(endX-newX)<10){
                        binding.value[0].$router.push(arr[0]);
                    }

                })
            }else{
                $(el).swip({
                    speed:function(x,y){
                        if(arr[1]=='next'&&y>40){
                            binding.value[0].$router.push(arr[0]);
                        }else if(arr[1]=='prev'&&y<-40){
                            binding.value[0].$router.push(arr[0]);
                        }
                    }
                })
            }
        }
    }
});
Vue.directive('real_click',{
    inserted:function(el,binding){
        if(binding.value){
            $(el).on('touchstart',function(event){
                endX = event.originalEvent.targetTouches[0].clientX;
                endY = event.originalEvent.targetTouches[0].clientY;
            });
            $(el).on('touchend',function(event){
                newX = event.originalEvent.changedTouches[0].clientX;
                newY = event.originalEvent.changedTouches[0].clientY;
                if(Math.abs(endY-newY)<10&&Math.abs(endX-newX)<10){
                    _r.Vac[binding.value]();
                }

            })
        }
    }
});
