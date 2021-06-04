import uuid from "react-uuid";

const SHOW_NEXT_MONTH = "SHOW_NEXT_MONTH";
const SHOW_PREV_MONTH = "SHOW_PREV_MONTH";
const ADD_DATE_DEAL = "ADD_DATE_DEAL";
const CHANGE_INPUT = "CHANGE_INPUT";
const ADD_DEAL = "ADD_DEAL";
const DEL_DEAL = "DEL_DEAL";
const CHANGE_DEAL = "CHANGE_DEAL";
const ON_CHANGE_VALUE = "ON_CHANGE_VALUE";
const SAVE_CHANGING = "SAVE_CHANGING";

export const showNextMonth = () => {
    return { type: SHOW_NEXT_MONTH };
}
export const showPrevMonth = () => {
    return { type: SHOW_PREV_MONTH };
}

export const addDateForDeal = (selectedDate) => {
    return { type: ADD_DATE_DEAL, selectedDate };
}

export const changeInput = (customerInput) => {
    return { type: CHANGE_INPUT, customerInput };
}

export const addDeal = () => {
    return { type: ADD_DEAL };
}

export const DelDeal = (id, index) => {
    return { type: DEL_DEAL, id, index };
}

export const ChangeDeal = (value, id) => {
    return { type: CHANGE_DEAL, value, id }
}

export const OnChangeValue = (value, id) => {
    return { type: ON_CHANGE_VALUE, value, id }
}

export const SaveChanging = (id) => {
    return { type: SAVE_CHANGING, id }
}

let date = new Date();

let initialState = {
    currentYear: date.getFullYear(),
    currentMonth: date.getMonth(),
    lastMonthDate: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
    dateForObj: null,
    dealValue: '',
    dealsObj: [],
    changeValue: '',
    changeId: '',
    letEdit: false,
}

let calendarReducer = (state = initialState, action) => {
    if (action.type === SHOW_NEXT_MONTH) {

        if (state.currentMonth === 11) {
            state.currentMonth = -1;
            state.currentYear = state.currentYear + 1;
        }

        return {
            ...state,
            currentMonth: state.currentMonth + 1,
            lastMonthDate: new Date(state.currentYear, state.currentMonth + 2, 0).getDate(),
        }
    }
    else if (action.type === SHOW_PREV_MONTH) {
        if (state.currentMonth === 0) {
            state.currentMonth = 12;
            state.currentYear = state.currentYear - 1;
        }

        return {
            ...state,
            currentMonth: state.currentMonth - 1,
            lastMonthDate: new Date(state.currentYear, state.currentMonth, 0).getDate(),
        }
    }
    else if (action.type === CHANGE_INPUT) {

        return {
            ...state,
            dealValue: action.customerInput,
        }
    }
    else if (action.type === ADD_DATE_DEAL) {

        return {
            ...state,
            dateForObj: action.selectedDate,
        }
    }
    else if (action.type === ADD_DEAL) {

        let objForPushing = {
            id: uuid(),
            year: state.currentYear,
            month: state.currentMonth,
            matchDate: state.dateForObj,
            deals: state.dealValue,
            isEdit: false,
        }

        if (state.dateForObj !== null && state.dealValue !== '') {
            return {
                ...state,
                dealValue: '',
                dealsObj: [...state.dealsObj, objForPushing],
            }
        } else {
            alert('выберите дату и заполните поле ввода');
        }
    }
    else if (action.type === DEL_DEAL) {
        return {
            ...state,
            dealsObj: state.dealsObj.filter(deal => deal.id !== action.id),
        }
    }
    else if (action.type === CHANGE_DEAL) {
        if (!state.letEdit) {
            state.dealsObj.map(el => {

                if (el.id === action.id) {
                    el.isEdit = true;
                }



                return state.dealsObj;
            })

            return {
                ...state,
                changeValue: action.value,
                changeId: action.id,
                letEdit: true,
            }
        }

    }
    else if (action.type === ON_CHANGE_VALUE) {
        return {
            ...state,
            changeValue: action.value,
            changeId: action.id,
        }


    }
    else if (action.type === SAVE_CHANGING) {
        state.dealsObj.map(el => {
            if (el.id === state.changeId) {
                el.deals = state.changeValue;
                el.isEdit = false;
                state.changeValue = '';
                state.changeId = '';
            }
            return state;
        })

        return {
            ...state,
            letEdit: false,
        }
    }

    return state;
}

export default calendarReducer;