import path from 'path'

const env = process.env.NODE_ENV || 'development';
const path_base = path.resolve(__dirname, '..')
const src = path.resolve(path_base, 'src')
const dist = path.resolve(path_base, 'dist')
export default {
  '__DEV__': env=== 'development',
  '__PROD__': env === 'production',
  path_base,
  src,
  dist
}
