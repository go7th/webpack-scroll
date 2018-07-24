module.exports={
  entry:'./src/js/index.js',
  output:{
    path:__dirname+'/dist/',
    filename:'js/index[hash:8].js'
  },
  mode:'production',
  module:{
    rules:[
      // {
      //   test:/\.js$/,
      //   use:[
      //       {
      //         loader:'babel-loader',
      //       },
      //   ],
      //   exclude:/node_modules/
      // },
      {
        test:/\.css$/,
        use:[
            {
              loader:'style-loader',
            },
            {
              loader:'css-loader',
              options:{
                name:"css/[name][hash:8].css"
              }
            },
        ],
      },
      {
        test:/\.html$/,
        use:[
            {
              loader:'file-loader',
              options:{
                name:"[name][hash:8].html"
              }
            },
            {
              loader:'extract-loader'
            },
            {
              loader:'html-loader',
              options:{
                attrs:["img:src"]
              }
            }
          ]
      },
      {
        test:/\.(jpg|gif|png|webp)$/,
        use:[
          {
            loader:'file-loader',
            options:{
              name:'images/[name][hash:8].[ext]'
            }
          }
        ]
      }


    ]
  },
  devServer:{
    port:8080,
    contentBase:'src'
  }
}