var elixir = require('laravel-elixir');
require('laravel-elixir-webpack-ex');

elixir(function(mix) {
    mix.webpack('app.js', require('./webpack.config.js'),'public/js', 'resources/assets/js');
});