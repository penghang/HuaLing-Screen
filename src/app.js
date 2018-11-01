import './styles/index.scss'
import { check } from './checkbrowsers'
import { pageDown } from './animation'
if (check()) {
    pageDown()
}
console.log('load file app.js')
export default {}