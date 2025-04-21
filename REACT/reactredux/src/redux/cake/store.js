import {createStore} from 'redux'
import reducer from "./cakereducer"

const store=createStore(reducer)

export default store