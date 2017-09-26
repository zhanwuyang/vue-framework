var page_config = {
    basic: {
        js: [
            {
                name:'util',
                url:'util.js',
                sync:false
            },{
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
                name:'swip',
                url:'swip.js',
                sync:false
            }
        ],
        css: [],
        images: []
    },
    pages: [
        {
            dom:[
                {
                    type:'div',
                    rect:{
                        w:400,
                        h:504,
                        x:-200,
                        y:0
                    }
                }
            ],
            id: "page_1",
            played: false,
            waiting: false,
            finished: false,
            isRender: false
        }
       
    ]
};
