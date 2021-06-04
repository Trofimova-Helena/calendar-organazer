import { combineReducers, createStore } from "redux";
import calendarReducer from "../organazer-reducers/calendar-reducer";


let reducers = combineReducers({
   CalendarDates: calendarReducer,
}) 

let store = createStore(
    reducers,     
        (localStorage['dates']) ? JSON.parse(localStorage['dates']) : {},
);

store.subscribe( () => {
    localStorage['dates'] = JSON.stringify(store.getState())
})

window.store = store;

export default store;