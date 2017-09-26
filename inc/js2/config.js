var page_config = {
    basic: {
        js: [
            {
                name:'util',
                url:'util.js',
                sync:false
            },{
                name: "iSlider",
                url: "../vendor/iSlider/iSlider.js",
                sync: false
            }, {
                name: "action",
                url: "action.js",
                sync: false
            }, {
                name: "scene",
                url: "scene.js",
                sync: false
            }, {
                name: "render",
                url: "render.js",
                sync: false
            },{
                name:'wechat',
                url:'wechat.js',
                sync:false
            }
        ],
        css: [
            {
                name: "animate",
                url: "animation.css",
                sync: false
            }, {
                name: "animateplus",
                url: "animate.plus.css",
                sync: false
            },{
                name:'main',
                url:'main.css',
                sync:false
            }
        ],
        images: []
    },
    pages: [
        {
            dom:[
                {
                    type:'cartoon',
                    src:'part2/0.png',
                    range:[0,49],
                    rect:{
                        w:320,
                        h:504,
                        x:-160,
                        y:0
                    }
                }
            ],
            id:'page_1'
        }
        // {
        //     dom: [
        //         {
        //             type:'img',
        //             src:'page_1/logo.png',
        //             class:'fadeInLeft animated delay-5',
        //             // disType:'pop2',
        //             realImg:true,
        //             rect:{
        //                 w:62,
        //                 h:21,
        //                 x:-116,
        //                 y:56
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/img1.jpg',
        //             class:'flipInY animated delay-10',
        //             // disType:'pop1',
        //             id:'abc',
        //             rect:{
        //                 w:86.5,
        //                 h:71.5,
        //                 x:-47,
        //                 y:30
        //             },
        //             real_click:'meFun'
        //         },{
        //             type:'img',
        //             src:'page_1/img2.jpg',
        //             animate:'flipInY animated delay-10',
        //             rect:{
        //                 w:86.5,
        //                 h:71.5,
        //                 x:41,
        //                 y:30
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/title.jpg',
        //             animate:'fadeInRight animated',
        //             rect:{
        //                 w:256,
        //                 h:72,
        //                 x:-128,
        //                 y:104
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/img3.jpg',
        //             animate:'flipInY animated delay-10',
        //             rect:{
        //                 w:86.5,
        //                 h:71.5,
        //                 x:41,
        //                 y:180
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/text1.png',
        //             animate:'rollIn animated delay-15',
        //             rect:{
        //                 w:93,
        //                 h:42.5,
        //                 x:-90,
        //                 y:200
        //             }
        //         },{
        //             type:"img",
        //             src:'page_1/img4.jpg',
        //             animate:'flipInY animated delay-10',
        //             rect:{
        //                 w:86,
        //                 h:71.5,
        //                 x:-134,
        //                 y:256
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/kenwood.png',
        //             animate:'rotateInUpLeft animated delay-20',
        //             rect:{
        //                 w:68.5,
        //                 h:10.5,
        //                 x:-37,
        //                 y:283
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/img5.jpg',
        //             animate:'flipInY animated delay-10',
        //             rect:{
        //                 w:86,
        //                 h:122,
        //                 x:41,
        //                 y:256
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/braun.png',
        //             animate:'rotateInUpLeft animated delay-20',
        //             rect:{
        //                 w:39,
        //                 h:16.5,
        //                 x:-100,
        //                 y:344
        //             }
        //         },{
        //             type:"img",
        //             src:'page_1/middle.jpg',
        //             animate:'fadeInUp animated delay-25',
        //             rect:{
        //                 w:86.5,
        //                 h:51.5,
        //                 x:-47,
        //                 y:327
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/middle2.png',
        //             animate:'fadeInUp animated delay-25',
        //             rect:{
        //                 w:143,
        //                 h:10,
        //                 x:-71.5,
        //                 y:396
        //             }
        //         },{
        //             type:'img',
        //             src:'common/moveBtn.png',
        //             animate:'fadeInUp animated delay-35 infinite',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:-10,
        //                 y:420
        //             },
        //             showpage:'page_2'
        //         },{
        //             type:'img',
        //             src:'common/left.jpg',
        //             animate:'fadeInLeft animated delay-30',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:-124,
        //                 y:436
        //             }
        //         },{
        //             type:'img',
        //             src:'common/right.jpg',
        //             animate:'fadeInRight animated delay-30',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:40,
        //                 y:436
        //             }
        //         }
        //     ],
        //     id: "page_1",
        //     played: false,
        //     waiting: false,
        //     finished: false,
        //     isRender: false
        // },
        // {
        //     dom:[
        //         {
        //             type:'img',
        //             src:'page_2/img1.jpg',
        //             animate:'flipInY animated delay-2',
        //             rect:{
        //                 w:171,
        //                 h:72,
        //                 x:-128,
        //                 y:25
        //             }
        //         },{
        //             type:'div',
        //             class:'whiteLine',
        //             rect:{
        //                 w:2,
        //                 h:72,
        //                 x:-45,
        //                 y:25
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/img2.jpg',
        //             animate:'flipInY animated delay-5',
        //             rect:{
        //                 w:86,
        //                 h:71.5,
        //                 x:42,
        //                 y:25
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/textBg.jpg',
        //             animate:'fadeInLeft animated',
        //             rect:{
        //                 w:256,
        //                 h:57,
        //                 x:-128,
        //                 y:100
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/text1.png',
        //             animate:'fadeInLeft animated',
        //             rect:{
        //                 w:40,
        //                 h:12.5,
        //                 x:-20,
        //                 y:107
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/text2.png',
        //             animate:'fadeInLeft animated delay-10',
        //             rect:{
        //                 w:41.5,
        //                 h:18.5,
        //                 x:-20.75,
        //                 y:127
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/text3bg.jpg',
        //             animate:'fadeIn animated delay-15',
        //             rect:{
        //                 w:256,
        //                 h:142,
        //                 x:-128,
        //                 y:156
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/text3.png',
        //             animate:'fadeIn animated delay-15',
        //             rect:{
        //                 w:177.5,
        //                 h:83.5,
        //                 x:-88.75,
        //                 y:170
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/pro.png',
        //             animate:'fadeInUp animated delay-20',
        //             rect:{
        //                 w:57,
        //                 h:45,
        //                 x:-28.5,
        //                 y:274
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/value.png',
        //             animate:'fadeInRight animated delay-25',
        //             rect:{
        //                 w:60,
        //                 h:22,
        //                 x:33,
        //                 y:286
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/time.png',
        //             animate:'fadeInUp animated delay-30',
        //             rect:{
        //                 w:136.5,
        //                 h:10,
        //                 x:-68.25,
        //                 y:344
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/iwant.jpg',
        //             class:'active_1_iwant',
        //             animate:'fadeInUp animated delay-35',
        //             disOpen:'pop1',
        //             rect:{
        //                 w:86.5,
        //                 h:41.5,
        //                 x:-43.25,
        //                 y:385
        //             }
        //         },{
        //             type:'img',
        //             src:'common/moveBtn.png',
        //             animate:'fadeInUp animated delay-40 infinite',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:-10,
        //                 y:437
        //             }
        //         },{
        //             type:'img',
        //             src:'common/left.jpg',
        //             animate:'fadeInLeft animated delay-45',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:-124,
        //                 y:453
        //             }
        //         },{
        //             type:'img',
        //             src:'common/right.jpg',
        //             animate:'fadeInRight animated delay-45',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:40,
        //                 y:453
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/pop/pop1.jpg',
        //             class:'pop1 disNone',
        //             disType:'pop1',
        //             rect:{
        //                 w:180.5,
        //                 h:280,
        //                 x:-90.25,
        //                 y:76
        //             }
        //         },{
        //             type:'div',
        //             class:'pop1 disNone',
        //             disType:'pop1',
        //             rect:{
        //                 w:400,
        //                 h:504,
        //                 x:-200,
        //                 y:0
        //             }
        //         },{
        //             type:'div',
        //             class:'pop1 page_2_closeBtn disNone',
        //             disType:'pop1',
        //             disClose:'pop1',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:65,
        //                 y:82
        //             }
        //         },{
        //             type:'input',
        //             intype:'text',
        //             placeholder:'姓名',
        //             class:'active1_name pop1 inputBg disNone active1_success',
        //             disType:'pop1 active1_success',
        //             inputName:'name',
        //             rect:{
        //                 w:140,
        //                 h:21,
        //                 x:-75,
        //                 y:114
        //             }
        //         },{
        //             type:'input',
        //             intype:'number',
        //             placeholder:'手机',
        //             class:'active1_phone pop1 inputBg disNone active1_success',
        //             disType:'pop1 active1_success',
        //             inputName:'phone',
        //             rect:{
        //                 w:140,
        //                 h:21,
        //                 x:-75,
        //                 y:144
        //             }
        //         },{
        //             type:'div',
        //             html:'<textarea class="active1_content" style="width:140px;height:54px;left:0;top:0;" placeholder="投稿内容（200字以内）"></textarea>',
        //             class:'pop1 active1_area disNone active1_success',
        //             disType:'pop1 active1_success',
        //             rect:{
        //                 w:150,
        //                 h:64,
        //                 x:-75,
        //                 y:176
        //             }
        //         },{
        //             type:'img',
        //             src:'common/updateBtn.jpg',
        //             class:'pop1 active1_updateBtn disNone active1_success',
        //             disType:'pop1 active1_success',
        //             rect:{
        //                 w:40,
        //                 h:40,
        //                 x:-73,
        //                 y:250
        //             }
        //         },{
        //             type:'img',
        //             src:'common/deleteBtn.png',
        //             class:'disNone update1_success',
        //             disType:'update1_success',
        //             rect:{
        //                 w:8.5,
        //                 h:8.5,
        //                 x:-44,
        //                 y:252
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/pop/update.png',
        //             class:'pop1 disNone active1_success',
        //             disType:'pop1 active1_success',
        //             rect:{
        //                 w:45,
        //                 h:10,
        //                 x:-24,
        //                 y:264
        //             }
        //         },{
        //             type:'img',
        //             src:'page_2/pop/sure.png',
        //             class:'pop1 active1_sureBtn disNone active1_success',
        //             disType:'pop1 active1_success',
        //             rect:{
        //                 w:116.5,
        //                 h:28,
        //                 x:-58.25,
        //                 y:300
        //             },
        //             real_click:'sure'
        //         },{
        //             type:'img',
        //             src:'common/success.png',
        //             class:'disNone active1_success_pop',
        //             disType:'active1_success_pop',
        //             rect:{
        //                 w:61,
        //                 h:13.5,
        //                 x:-30.5,
        //                 y:223
        //             }
        //         },{
        //             type:'img',
        //             src:'common/again.png',
        //             class:'disNone active1_again_pop',
        //             disType:'active1_again_pop',
        //             rect:{
        //                 w:61,
        //                 h:13.5,
        //                 x:-30.5,
        //                 y:223
        //             }
        //         }
        //     ],
        //     id: "page_2",
        //     played: false,
        //     waiting: false,
        //     finished: false,
        //     isRender: false
        // },
        // {
        //     dom:[
        //         {
        //             type:'img',
        //             src:'page_3/img1.jpg',
        //             animate:'flipInX animated delay-3',
        //             rect:{
        //                 w:86,
        //                 h:71.5,
        //                 x:-128,
        //                 y:25
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/img2.jpg',
        //             animate:'flipInX animated delay-3',
        //             rect:{
        //                 w:86,
        //                 h:71.5,
        //                 x:-43,
        //                 y:25
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/img3.jpg',
        //             animate:'flipInX animated delay-3',
        //             rect:{
        //                 w:86,
        //                 h:71.5,
        //                 x:42,
        //                 y:25
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/textBg.jpg',
        //             animate:'fadeInLeft animated',
        //             rect:{
        //                 w:256,
        //                 h:57,
        //                 x:-128,
        //                 y:100
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/text1.png',
        //             animate:'fadeInLeft animated',
        //             rect:{
        //                 w:40,
        //                 h:12.5,
        //                 x:-20,
        //                 y:107
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/text2.png',
        //             animate:'fadeInLeft animated delay-10',
        //             rect:{
        //                 w:41.5,
        //                 h:18.5,
        //                 x:-20.75,
        //                 y:127
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/text3bg.jpg',
        //             animate:'fadeIn animated delay-15',
        //             rect:{
        //                 w:256,
        //                 h:142.5,
        //                 x:-128,
        //                 y:157
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/text3.png',
        //             animate:'fadeIn animated delay-15',
        //             rect:{
        //                 w:218,
        //                 h:53.5,
        //                 x:-109,
        //                 y:165
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/text4.png',
        //             animate:'fadeInUp animated delay-20',
        //             rect:{
        //                 w:213.5,
        //                 h:11,
        //                 x:-106.75,
        //                 y:225
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/pro_1.png',
        //             animate:'fadeInLeft animated delay-25',
        //             rect:{
        //                 w:76,
        //                 h:68.5,
        //                 x:-128,
        //                 y:250
        //             }
        //         },{
        //             type:"img",
        //             src:'page_3/pro_2.png',
        //             animate:'fadeInUp animated delay-25',
        //             rect:{
        //                 w:48,
        //                 h:71,
        //                 x:-24,
        //                 y:247
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/pro_3.png',
        //             animate:'fadeInRight animated delay-25',
        //             rect:{
        //                 w:68,
        //                 h:74,
        //                 x:59,
        //                 y:244
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/time.png',
        //             animate:'fadeInLeft animated delay-30',
        //             rect:{
        //                 w:103,
        //                 h:20,
        //                 x:-121,
        //                 y:338
        //             }
        //         },{
        //             type:"img",
        //             src:'page_3/address.png',
        //             animate:'fadeInRight animated delay-30',
        //             rect:{
        //                 w:125,
        //                 h:25,
        //                 x:10,
        //                 y:338
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/iwant.jpg',
        //             class:'active_2_iwant',
        //             animate:'fadeInUp animated delay-35',
        //             rect:{
        //                 w:86.5,
        //                 h:41.5,
        //                 x:-43.25,
        //                 y:385
        //             }
        //         },{
        //             type:'img',
        //             src:'common/moveBtn.png',
        //             animate:'fadeInUp animated delay-40 infinite',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:-10,
        //                 y:437
        //             }
        //         },{
        //             type:'img',
        //             src:'common/left.jpg',
        //             animate:'fadeInLeft animated delay-45',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:-124,
        //                 y:453
        //             }
        //         },{
        //             type:'img',
        //             src:'common/right.jpg',
        //             animate:'fadeInRight animated delay-45',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:40,
        //                 y:453
        //             }
        //         },{
        //             type:'div',
        //             class:'pop2 disNone',
        //             rect:{
        //                 w:400,
        //                 h:504,
        //                 x:-200,
        //                 y:0
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/pop/pop2.jpg',
        //             class:'pop2 disNone',
        //             rect:{
        //                 w:180.5,
        //                 h:280,
        //                 x:-90.25,
        //                 y:76
        //             }
        //         },{
        //             type:'div',
        //             class:'pop2 page_3_closeBtn disNone',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:65,
        //                 y:83
        //             }
        //         },{
        //             type:'img',
        //             src:'common/updateBtn.jpg',
        //             class:'pop2 disNone active2_updateBtn active2_success',
        //             rect:{
        //                 w:40,
        //                 h:40,
        //                 x:-72,
        //                 y:111
        //             }
        //         },{
        //             type:'img',
        //             src:'common/deleteBtn.png',
        //             class:'disNone update2_success',
        //             rect:{
        //                 w:8.5,
        //                 h:8.5,
        //                 x:-43,
        //                 y:113
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/pop/update.png',
        //             class:'pop2 disNone active2_success',
        //             rect:{
        //                 w:57,
        //                 h:10,
        //                 x:-20,
        //                 y:126
        //             }
        //         },{
        //             type:"input",
        //             intype:'text',
        //             placeholder:'姓名',
        //             class:'pop2 disNone inputBg active2_name active2_success',
        //             rect:{
        //                 w:140,
        //                 h:21,
        //                 x:-75,
        //                 y:160
        //             }
        //         },{
        //             type:"input",
        //             intype:'number',
        //             placeholder:'手机',
        //             class:'pop2 disNone inputBg active2_phone active2_success',
        //             rect:{
        //                 w:140,
        //                 h:21,
        //                 x:-75,
        //                 y:196
        //             }
        //         },{
        //             type:"input",
        //             intype:'number',
        //             placeholder:'年龄',
        //             class:'pop2 disNone inputBg active2_age active2_success',
        //             rect:{
        //                 w:140,
        //                 h:21,
        //                 x:-75,
        //                 y:232
        //             }
        //         },{
        //             type:"div",
        //             class:'pop2 disNone inputBg sex active2_success',
        //             html:'性别',
        //             rect:{
        //                 w:140,
        //                 h:21,
        //                 x:-75,
        //                 y:268
        //             }
        //         },{
        //             type:"img",
        //             src:'common/checkbox1.png',
        //             class:"pop2 disNone man active2_success",
        //             rect:{
        //                 w:15,
        //                 h:15,
        //                 x:-32,
        //                 y:271
        //             }
        //         },{
        //             type:"div",
        //             class:'pop2 disNone colorB active2_success',
        //             html:'男',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:-12,
        //                 y:271
        //             }
        //         },{
        //             type:"img",
        //             src:'common/checkbox1.png',
        //             class:"pop2 disNone woman active2_success",
        //             rect:{
        //                 w:15,
        //                 h:15,
        //                 x:14,
        //                 y:271
        //             }
        //         },{
        //             type:"div",
        //             class:'pop2 disNone colorB active2_success',
        //             html:'女',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:34,
        //                 y:271
        //             }
        //         },{
        //             type:'img',
        //             src:'page_3/pop/sure.png',
        //             class:'pop2 disNone active2_sureBtn active2_success',
        //             rect:{
        //                 w:116.5,
        //                 h:28,
        //                 x:-58.25,
        //                 y:306
        //             }
        //         },{
        //             type:'img',
        //             src:'common/success.png',
        //             class:'disNone active2_success_pop',
        //             rect:{
        //                 w:61,
        //                 h:13.5,
        //                 x:-30.5,
        //                 y:221
        //             }
        //         },{
        //             type:'img',
        //             src:'common/again.png',
        //             class:'disNone active2_again_pop',
        //             rect:{
        //                 w:61,
        //                 h:13.5,
        //                 x:-30.5,
        //                 y:221
        //             }
        //         }
        //     ],
        //     id: "page_3",
        //     played: false,
        //     waiting: false,
        //     finished: false,
        //     isRender: false
        // },
        // {
        //     dom:[
        //         {
        //             type:'img',
        //             src:'page_4/img1.jpg',
        //             animate:'flipInX animated delay-3',
        //             rect:{
        //                 w:86,
        //                 h:71.5,
        //                 x:-128,
        //                 y:25
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/img2.jpg',
        //             animate:'flipInX animated delay-4',
        //             rect:{
        //                 w:86,
        //                 h:71.5,
        //                 x:-43,
        //                 y:25
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/img3.jpg',
        //             animate:'flipInX animated delay-5',
        //             rect:{
        //                 w:86,
        //                 h:71.5,
        //                 x:42,
        //                 y:25
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/textBg.jpg',
        //             animate:'fadeInLeft animated delay-5',
        //             rect:{
        //                 w:256,
        //                 h:57,
        //                 x:-128,
        //                 y:100
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/text1.png',
        //             animate:'fadeInLeft animated delay-5',
        //             rect:{
        //                 w:40,
        //                 h:12.5,
        //                 x:-20,
        //                 y:107
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/text2.png',
        //             animate:'fadeInLeft animated delay-10',
        //             rect:{
        //                 w:41.5,
        //                 h:18.5,
        //                 x:-20.75,
        //                 y:127
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/text3bg.jpg',
        //             animate:'fadeIn animated delay-15',
        //             rect:{
        //                 w:256,
        //                 h:142.5,
        //                 x:-128,
        //                 y:157
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/text3.png',
        //             animate:'fadeIn animated delay-15',
        //             rect:{
        //                 w:208,
        //                 h:155.5,
        //                 x:-104,
        //                 y:180
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/iwant.jpg',
        //             class:'active_3_iwant',
        //             animate:'fadeInUp animated delay-20',
        //             rect:{
        //                 w:86.5,
        //                 h:41.5,
        //                 x:-43.25,
        //                 y:385
        //             }
        //         },{
        //             type:'img',
        //             src:'common/moveBtn.png',
        //             animate:'fadeInUp animated delay-25',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:-10,
        //                 y:437
        //             }
        //         },{
        //             type:'img',
        //             src:'common/left.jpg',
        //             animate:'fadeInLeft animated delay-30',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:-124,
        //                 y:453
        //             }
        //         },{
        //             type:'img',
        //             src:'common/right.jpg',
        //             animate:'fadeInRight animated delay-30',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:40,
        //                 y:453
        //             }
        //         },{
        //             type:'div',
        //             class:'pop3 disNone',
        //             rect:{
        //                 w:400,
        //                 h:504,
        //                 x:-200,
        //                 y:0
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/pop/pop3.jpg',
        //             class:'pop3 disNone',
        //             rect:{
        //                 w:180,
        //                 h:180,
        //                 x:-90,
        //                 y:127
        //             }
        //         },{
        //             type:'div',
        //             class:'pop3 page_4_closeBtn disNone',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:65,
        //                 y:134
        //             }
        //         },{
        //             type:"input",
        //             intype:'text',
        //             placeholder:'姓名',
        //             class:'pop3 disNone inputBg active3_name active3_success',
        //             rect:{
        //                 w:140,
        //                 h:21,
        //                 x:-75,
        //                 y:161
        //             }
        //         },{
        //             type:"input",
        //             intype:'number',
        //             placeholder:'手机',
        //             class:'pop3 disNone inputBg active3_phone active3_success',
        //             rect:{
        //                 w:140,
        //                 h:21,
        //                 x:-75,
        //                 y:187
        //             }
        //         },{
        //             type:"div",
        //             class:'pop3 disNone inputBg sex active3_success',
        //             html:'性别',
        //             rect:{
        //                 w:140,
        //                 h:21,
        //                 x:-75,
        //                 y:215
        //             }
        //         },{
        //             type:"img",
        //             src:'common/checkbox1.png',
        //             class:"pop3 disNone man2 active3_success",
        //             rect:{
        //                 w:15,
        //                 h:15,
        //                 x:-32,
        //                 y:218
        //             }
        //         },{
        //             type:"div",
        //             class:'pop3 disNone colorB active3_success',
        //             html:'男',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:-12,
        //                 y:218
        //             }
        //         },{
        //             type:"img",
        //             src:'common/checkbox1.png',
        //             class:"pop3 disNone woman2 active3_success",
        //             rect:{
        //                 w:15,
        //                 h:15,
        //                 x:14,
        //                 y:218
        //             }
        //         },{
        //             type:"div",
        //             class:'pop3 disNone colorB active3_success',
        //             html:'女',
        //             rect:{
        //                 w:20,
        //                 h:20,
        //                 x:34,
        //                 y:218
        //             }
        //         },{
        //             type:'img',
        //             src:'page_4/pop/sure.png',
        //             class:'pop3 disNone active3_sureBtn active3_success',
        //             rect:{
        //                 w:116.5,
        //                 h:28,
        //                 x:-58.25,
        //                 y:253
        //             }
        //         },{
        //             type:'img',
        //             src:'common/success.png',
        //             class:'disNone active3_success_pop',
        //             rect:{
        //                 w:61,
        //                 h:13.5,
        //                 x:-30.5,
        //                 y:201
        //             }
        //         },{
        //             type:'img',
        //             src:'common/again.png',
        //             class:'disNone active3_again_pop',
        //             rect:{
        //                 w:61,
        //                 h:13.5,
        //                 x:-30.5,
        //                 y:201
        //             }
        //         }
        //     ],
        //     id: "page_4",
        //     played: false,
        //     waiting: false,
        //     finished: false,
        //     isRender: false
        // },
        // {
        //     dom:[
        //         {
        //             type:'img',
        //             src:'page_5/bg.png',
        //             animate:'fadeIn animated',
        //             rect:{
        //                 w:256,
        //                 h:355.5,
        //                 x:-128,
        //                 y:30
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/logo.png',
        //             animate:'fadeInLeft animated delay-5',
        //             rect:{
        //                 w:62,
        //                 h:21,
        //                 x:-116,
        //                 y:56
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/title.jpg',
        //             animate:'fadeInLeft animated delay-10',
        //             rect:{
        //                 w:256,
        //                 h:72,
        //                 x:-128,
        //                 y:104
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/kenwood.png',
        //             animate:'fadeInRight animated delay-15',
        //             rect:{
        //                 w:68.5,
        //                 h:10,
        //                 x:47,
        //                 y:206
        //             }
        //         },{
        //             type:'img',
        //             src:'page_5/text.png',
        //             animate:'fadeInUp animated delay-15',
        //             rect:{
        //                 w:155,
        //                 h:12.5,
        //                 x:-77.5,
        //                 y:250
        //             }
        //         },{
        //             type:'img',
        //             src:'page_1/braun.png',
        //             animate:'fadeInLeft animated delay-15',
        //             rect:{
        //                 w:39,
        //                 h:16.5,
        //                 x:-100,
        //                 y:344
        //             }
        //         },{
        //             type:'img',
        //             src:'common/left.jpg',
        //             animate:'fadeInLeft animated delay-20',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:-124,
        //                 y:453
        //             }
        //         },{
        //             type:'img',
        //             src:'common/right.jpg',
        //             animate:'fadeInRight animated delay-20',
        //             rect:{
        //                 w:86,
        //                 h:10,
        //                 x:40,
        //                 y:453
        //             }
        //         }
        //     ],
        //     id: "page_5",
        //     played: false,
        //     waiting: false,
        //     finished: false,
        //     isRender: false
        // }
    ]
};
