/* eslint-disable */
const path = require(`path`);

module.exports = {
  // Режим сборки
  mode: `development`,
  // Точка входа приложения
  entry: `./src/main.js`,
  // Настройка выходного файла
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  // Подключаем sourcemaps
  devtool: `source-map`,
  // Подключаем сервер
  devServer: {
    contentBase: path.join(__dirname, `public`), // Где искать сборку
    compress: true, // Сжатие
    // Автоматическая перезагрузка страницы
    // Если не работает по стандартному URLу в браузере ‘http: //localhost:8080’,
    // то добавьте к нему ‘/webpack-dev-server/‘: ‘http: //localhost:8080/webpack-dev-server/'
    watchContentBase: true
  },
};
