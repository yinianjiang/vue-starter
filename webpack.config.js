module.exports={
    //入口文件(可以绝对路径和相对路径)
    entry:'./src/main.js',
    output:{
        path:__dirname+'dist',//输出路径(只能是绝对路径)
        filename:''
    },
    module:{
        rules:[
            {test:'\.vue$',user:'vue-loader'},
            {}
        ]
    },
    plugins:[
        new PluginA(),new PluginB()
    ]
}