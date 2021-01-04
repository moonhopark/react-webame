const path = require('path');
<<<<<<< HEAD
const { webpack } = require('webpack');
=======
>>>>>>> df57a4d (cache clear)

module.exports = {
  mode: 'development',
  devtool: 'eval', // 배포할 때 hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './client',
  },
  module:{
    rules:[{
      test: /\jsx?$/,
      loader: 'babel-loader',
      options: {
<<<<<<< HEAD
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'], // browser 얼마나 지원할지, browserslist 확인
            },
          }],
          '@babel/preset-react'],
=======
        presets: ['@babel/preset-env', '@babel/preset-react'],
>>>>>>> df57a4d (cache clear)
        plugins: [],
      },
    }],
  },
<<<<<<< HEAD
  plugins: [
  ],
=======
>>>>>>> df57a4d (cache clear)
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
<<<<<<< HEAD
}

//코드 작성할 때 위 순서대로 작성하기
//entry에 있는 파일에 module을 적용하고 plugin까지 한번더 적용후 output으로 나온다.
=======
}
>>>>>>> df57a4d (cache clear)
