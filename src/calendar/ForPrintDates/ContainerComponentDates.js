import { connect } from "react-redux";
import { addDateForDeal} from "../../organazer-reducers/calendar-reducer";
import PrintDates from "./PrintDates";

let ContainerForPrintDates = (props) => {
    return <PrintDates {...props}/>
}

let mapStateToProps = (state) => {
    return {
        currentYear: state.CalendarDates.currentYear,
        currentMonth: state.CalendarDates.currentMonth,
        lastMonthDate: state.CalendarDates.lastMonthDate,
        dealsObj: state.CalendarDates.dealsObj,
        dateForObj: state.CalendarDates.dateForObj,
        dealValue: state.CalendarDates.dealValue,
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        addDateForDeal: (event) => {
            let selectedDate = event.target.innerHTML;
            dispatch(addDateForDeal(selectedDate));
        } 
    } 
}

export default connect(mapStateToProps, mapDispatchToProps) (ContainerForPrintDates)