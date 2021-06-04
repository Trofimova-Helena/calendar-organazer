import { connect } from "react-redux";
import { showNextMonth, showPrevMonth } from "../../organazer-reducers/calendar-reducer";
import PrintMonth from "./PrintMonth";

let ContainerForPrintMonth = (props) => {
    return <PrintMonth {...props}/>
}

let mapStateToProps = (state) => {
    return {
        currentYear: state.CalendarDates.currentYear,
        currentMonth: state.CalendarDates.currentMonth,
        lastMonthDate: state.CalendarDates.lastMonthDate,
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        showNextMonth: () => {
            dispatch(showNextMonth());
        }, 
        showPrevMonth: () => {
            dispatch(showPrevMonth());
        },       
        } 
}


export default connect(mapStateToProps, mapDispatchToProps) (ContainerForPrintMonth)

