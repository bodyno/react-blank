import webpack from 'webpack'
import webpackConfig from '../config/webpack.config'

const compiler = webpack(webpackConfig)
compiler.run((err, states) => {
  if(err){
    console.log(err)
  }
  console.log('No error on compiler')
})
