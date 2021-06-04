import { connect } from "react-redux";
import { addDeal, ChangeDeal, changeInput, DelDeal, OnChangeValue, SaveChanging } from "../../organazer-reducers/calendar-reducer";
import PrintTasks from "./PrintTasks";

let ContainerForPrintTasks = (props) => {
    return <PrintTasks {...props}/>
}

let mapStateToProps = (state) => {
    return {
        dealsObj: state.CalendarDates.dealsObj,
        dateForObj: state.CalendarDates.dateForObj,
        dealValue: state.CalendarDates.dealValue,
        currentYear: state.CalendarDates.currentYear,
        currentMonth: state.CalendarDates.currentMonth,
        changeValue: state.CalendarDates.changeValue,
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeInput: (event) => {
            let value = event.target.value;
            dispatch(changeInput(value));
        }, 
        addDeal: () => {
            dispatch(addDeal());
        },
        DelDeal: (event) => {
            let id = event.target.id;
            let index = event.target.getAttribute('data-index');
            dispatch(DelDeal(id, index))
        },
        ChangeDeal: (event) => {
            let value = event.target.innerHTML;
            let id = event.target.id;
            dispatch(ChangeDeal(value, id))
        }, 
        OnChangeValue: (event) => {
            let value = event.target.value;
            let id = event.target.id;
            dispatch(OnChangeValue(value, id));
        },
        SaveChanging: (event) => {
            let id = event.target.id;
            dispatch(SaveChanging(id));
        }
    } 
}

export default connect(mapStateToProps, mapDispatchToProps) (ContainerForPrintTasks)