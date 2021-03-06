module.exports = {
  entry: {
    app: './src/index.js',     
    print: './src/print.js'
},
  output: {
    filename: "[name].bundle.js"
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   }
}