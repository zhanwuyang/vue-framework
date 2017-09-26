/**
 * Created by wy on 2017/9/11.
 */
var scale,css_width, css_height,APP
var Vrender = function(){
    this.isFixWidth = false;
    this.pagesRoute = [];
    this.routeArr = [];
    this.Vac = null;
    this.render();
    this.renderPage();
    this.init();
};
Vrender.prototype = {
    init:function(){
        var that = this;
        var routes = [];
        for(var i = 0;i<that.pagesRoute.length;i++){
            routes[i] = {
                path:'/'+that.pagesRoute[i]+'',
                component:that.routeArr[i]
            }
        }
        var router = new VueRouter({routes:routes});

        APP = new Vue({
            el:'#camera',
            router:router,
            created:function(){
                this.$router.push('page_1');
            }
        });
        this.Vac = new Vaction(APP);
    },
    renderPage:function(){
        console.log(page_config.pages);
        var that = this;
        for(var i = 0;i<page_config.pages.length;i++){
            that.pagesRoute.push(page_config.pages[i].id);
            $('<'+page_config.pages[i].id+'></'+page_config.pages[i].id+'>').appendTo('#camera router-view');
            that.renderDom(page_config.pages[i].id,page_config.pages[i].dom)
        }
        console.log(that.pagesRoute)
    },
    render: function () {
        var page_height = $(window).height();
        var page_width = $(window).width();
        // console.log(page_width, page_height);
        if (this.isFixWidth) {
            // 固定宽度,损失上下
            scale = page_width / 320;
            css_height = page_height / scale;
            var screen_centre = css_height / 2;
            var distance = -screen_centre;
            $('.container').css("-webkit-transform", " scale(" + scale + ") translateY(" + -distance + "px)");
        } else {
            // 固定高度,损失左右
            scale = page_height / 504;

            css_width = page_width / scale;
            var screen_centre = css_width / 2;
            var distance = -screen_centre;
            $('.container').css("-webkit-transform", " scale(" + scale + ") translateX(" + -distance + "px)");
        }
    },
    renderDom:function(Page,Obj){
        var that = this;
        var str = '';
        var all = {};
        // console.log(Obj)
        for(var i in Obj) {
            switch (Obj[i].type) {//区分类型
                case 'img':
                    all['dom_'+i] = Obj[i].realImg?that.renderRealImg(Obj[i]):that.renderImg(Obj[i]);
                    break;
                case 'div':
                    all['dom_'+i] = that.renderDiv(Obj[i]);
                    break;
                case 'input':
                    all['dom_'+i] = that.renderInput(Obj[i]);
                    break;
                case 'mp4':
                    all['dom_'+i] = that.renderMp4(Obj[i]);
                    break;
                case 'crop':
                    all['dom_'+i] = that.renderCrop(Obj[i]);
                    break;
                case 'canvas':
                    all['dom_'+i] = that.renderCanvas(Obj[i]);
                    break;
                case 'cartoon':
                    all['dom_'+i] = that.renderCartoon(Obj[i]);
                    break;
            }
            str += '<dom_'+i+'></dom_'+i+'>';
        }
    // console.log(str)
        var com = Vue.component(Page,{
            template:"<div id='"+Page+"'>"+str+"</div>",
            components:all
        });
        this.routeArr.push(com);
    },
    renderImg:function(obj){
        return {
            template:'<div :style="styleObj" :class="[classArr]" :id="id" v-display:pop="disType" v-display:open="disOpen" v-display:close="disClose" v-showpage="showpage" v-real_click="real_click"></div>',
            data:function(){
                return {
                    styleObj:{
                        background:'url('+ROOT_URL+'/image/'+obj.src+') no-repeat',
                        backgroundSize:'100% 100%',
                        width:obj.rect.w+'px',
                        height:obj.rect.h+'px',
                        left:obj.rect.x+'px',
                        top:obj.rect.y+'px'
                    },
                    disOpen:obj.disOpen,
                    disClose:obj.disClose,
                    disType:obj.disType,
                    classArr:obj.class,
                    id:obj.id,
                    showpage:obj.showpage?[this.$root,obj.showpage]:'',
                    real_click:obj.real_click?obj.real_click:'',

                }
            }
        }
    },
    renderRealImg:function(obj){
        return {
            template:'<img :src="src" :style="styleObj" :class="[classArr]" :id="id" v-display:pop="disType" v-display:open="disOpen"  v-display:close="disClose" v-real_click="real_click"/>',
            data:function(){
                return {
                    styleObj:{
                        width:obj.rect.w+'px',
                        height:obj.rect.h+'px',
                        left:obj.rect.x+'px',
                        top:obj.rect.y+'px'
                    },
                    disOpen:obj.disOpen,
                    disClose:obj.disClose,
                    disType:obj.disType,
                    src:ROOT_URL+'/image/'+obj.src,
                    classArr:obj.class,
                    id:obj.id,
                    showpage:obj.showpage?[this.$root,obj.showpage]:'',
                    real_click:obj.real_click?obj.real_click:'',
                }
            }
        }
    },
    renderDiv:function(obj){
        return {
            template:'<div :style="styleObj" v-html="html" :class="[classArr]" :id="id" v-display:pop="disType" v-display:open="disOpen"  v-display:close="disClose" v-real_click="real_click"></div>',
            data:function(){
                return {
                    styleObj:{
                        background:obj.src?'url('+ROOT_URL+'/image/'+obj.src+') no-repeat':'',
                        backgroundSize:obj.src?'100% 100%':'',
                        width:obj.rect.w+'px',
                        height:obj.rect.h+'px',
                        left:obj.rect.x+'px',
                        top:obj.rect.y+'px'
                    },
                    disOpen:obj.disOpen,
                    disClose:obj.disClose,
                    disType:obj.disType,
                    html:obj.html?obj.html:'',
                    classArr:obj.class,
                    id:obj.id,
                    showpage:obj.showpage?[this.$root,obj.showpage]:'',
                    real_click:obj.real_click?obj.real_click:'',
                }
            }
        }
    },
    renderInput:function(obj){
        return {
            template:'<input :placeholder="placehold" :type="intype" :maxlength="max" :style="styleObj" :class="[classArr]" :id="id" v-display:pop="disType" v-display:open="disOpen"  v-display:close="disClose" v-real_click="real_click" :ref="inputValue"/>',
            data:function(){
                return {
                    styleObj:{
                        outline:'none',
                        background:'transparent',
                        width:obj.rect.w+'px',
                        height:obj.rect.h+'px',
                        left:obj.rect.x+'px',
                        top:obj.rect.y+'px'
                    },
                    disOpen:obj.disOpen,
                    disClose:obj.disClose,
                    disType:obj.disType,
                    placehold:obj.placeholder,
                    max:obj.maxlength,
                    intype:obj.intype,
                    classArr:obj.class,
                    id:obj.id,
                    showpage:obj.showpage?[this.$root,obj.showpage]:'',
                    real_click:obj.real_click?obj.real_click:'',
                    inputValue:obj.inputName
                }

            }
        }
    },
    renderMp4:function(obj){
        return {
            template:'<video preload="auto" playsinline="true" -webkit-playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" :src="src" :style="styleObj" :id="id" v-display:pop="disType" v-display:open="disOpen"  v-display:close="disClose" v-real_click="real_click"></video>',
            data:function(){
                return {
                    src:ROOT_URL+'/vod/'+obj.src2,
                    styleObj:{
                        width:obj.rect.w+'px',
                        height:obj.rect.h+'px',
                        left:obj.rect.x+'px',
                        top:obj.rect.y+'px'
                    },
                    disOpen:obj.disOpen,
                    disClose:obj.disClose,
                    disType:obj.disType,
                    id:obj.id,
                    showpage:obj.showpage?[this.$root,obj.showpage]:'',
                    real_click:obj.real_click?obj.real_click:'',
                }
            }
        }
    },
    renderCrop:function(obj){
        return {
            template:'<div :style="styleObj" v-html="html" :class="[classArr]" :id="id" v-display:pop="disType" v-display:open="disOpen"  v-display:close="disClose" v-real_click="real_click"></div>',
            data:function () {
                return {
                    styleObj:{
                        'background':'url('+ROOT_URL+'/image/'+obj.src+') no-repeat',
                        'background-size':'cover',
                        'background-position-x':obj.rect.xx+'px',
                        'background-position-y':obj.rect.yy+'px',
                        width:obj.rect.w+'px',
                        height:obj.rect.h+'px',
                        left:obj.rect.x+'px',
                        top:obj.rect.y+'px'
                    },
                    disOpen:obj.disOpen,
                    disClose:obj.disClose,
                    disType:obj.disType,
                    html:obj.html?obj.html:'',
                    classArr:obj.class,
                    id:obj.id,
                    showpage:obj.showpage?[this.$root,obj.showpage]:'',
                    real_click:obj.real_click?obj.real_click:'',
                }
            }
        }
    },
    renderCanvas:function(obj){
        return {
            template:'<canvas :style="styleObj" :width="width" :height="height" :class="[classArr]" :id="id" v-display:pop="disType" v-display:open="disOpen"  v-display:close="disClose" v-real_click="real_click"></canvas>',
            data:function(){
                return {
                    styleObj:{
                        width:obj.rect.w+'px',
                        height:obj.rect.h+'px',
                        left:obj.rect.x+'px',
                        top:obj.rect.y+'px'
                    },
                    disOpen:obj.disOpen,
                    disClose:obj.disClose,
                    disType:obj.disType,
                    width:obj.rect.w*2,
                    height:obj.rect.h*2,
                    classArr:obj.class,
                    id:obj.id,
                    showpage:obj.showpage?[this.$root,obj.showpage]:'',
                    real_click:obj.real_click?obj.real_click:'',
                }
            }
        }
    },
    renderCartoon:function(obj){
        return {
            template:'<div :style="styleObj"></div>',
            data:function(){
                return {
                    styleObj:{
                        background:'url('+ROOT_URL+'/image/'+obj.src+') no-repeat',
                        backgroundSize:'100% 100%',
                        width:obj.rect.w+'px',
                        height:obj.rect.h+'px',
                        left:obj.rect.x+'px',
                        top:obj.rect.y+'px'
                    },
                    range:obj.range
                }
            },
            created:function () {
                this.playCartoon(this);
            }
        }
    }
};