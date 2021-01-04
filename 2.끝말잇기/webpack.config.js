const path = require('path');

module.exports = {
  name: 'wordrelay-settings',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게
  resolve: {
    extensions: ['.js','.jsx'],
  }, // entry안에 파일 확장자를 없애는 대신 resolve를 추가하면 알아서 파일 찾아줌.
  
  entry: {
    app: ['./client'], // client.jsx에서 WordRelay.jsx를 불러와서 여기에 안 써줘도 된다.
  }, // entry에 있는 파일을 읽고

  module: {
    rules: [{
<<<<<<< HEAD
      test: '/\.jsx?$/',
=======
      test: /\.jsx?$/,
>>>>>>> 784364d (웹팩으로 빌드하는 방법 기초)
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env','@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    }],
  }, // module을 적용


  output: {
    path: path.join(__dirname, 'dist'), // path.join 하면 dirname(현재폴더)에 'dist'경로 연결해줌
    filename: 'app.js'
  }, // output으로 출력
<<<<<<< HEAD
}
=======
};
>>>>>>> 784364d (웹팩으로 빌드하는 방법 기초)
