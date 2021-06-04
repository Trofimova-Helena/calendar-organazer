import React from 'react';
import styles from "./../../CssStyles/Table.module.css";

function PrintDates(props) {
	let fillArr = (arr, from, to) => {
		for(let i = from; i <= to; i++){
			arr.push(i);
		}
		return arr;
	}

	let whenWereMonday = (arr) => {
		let whenMonday;
		let findFirstDayOfMonth = new Date(props.currentYear, props.currentMonth, 1);
		let x = findFirstDayOfMonth.getDay();

		if(x === 0){
			x = 7;
		}
		whenMonday = x - 1;
		return whenMonday;
	}

	let whenWillSunday = (arr) => {
		let whenSunday = 7 - (new Date(props.currentYear, props.currentMonth + 1, 0).getDay())
		return whenSunday;
	}

	let unshiftEmptyElementsToArr = (num, whatToUnshift, arr) => {
		for(let i = 0; i < num; i++){
			arr.unshift(whatToUnshift);
		}
		return arr;
	}

	let pushEmptyElementsToArr = (num, whatToPush, arr) => {
		for(let i = 0; i < num; i++){
			arr.push(whatToPush);
		}
		return arr;
	}

	let createMultiArr = (arr) => {
		let newArr = [];
		for (let i = 0; i < arr.length; i++) {
				let obj = {};
				let a = [];
				a.push(arr.splice(0, 7));
				for (let j = 0; j < a.length; j++) {
					obj = {num1: a[j][0], num2: a[j][1], num3: a[j][2], num4: a[j][3], num5: a[j][4], num6: a[j][5], num7: a[j][6]};				
				}
				newArr.push(obj);
		}
		return newArr;
	}

    let calendarDays = []; 
    calendarDays = fillArr(calendarDays, 1, props.lastMonthDate);
	let whenMonday = whenWereMonday(calendarDays);
	let whenSunday = whenWillSunday(calendarDays);
	unshiftEmptyElementsToArr(whenMonday, '', calendarDays);
	pushEmptyElementsToArr(whenSunday, '', calendarDays);
	calendarDays = createMultiArr(calendarDays);

    let daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    let trsWeekDays = daysOfWeek.map((el, ind) => {
        return <th key={ind} className={styles.thStyle}>{el}</th>
    })

	let trs = calendarDays.map((elem, index) => {
		return <tr key={index}>
				<td onClick={props.addDateForDeal} className={styles.tdStyle}>{elem.num1}</td>
				<td onClick={props.addDateForDeal} className={styles.tdStyle}>{elem.num2}</td>
				<td onClick={props.addDateForDeal} className={styles.tdStyle}>{elem.num3}</td>
				<td onClick={props.addDateForDeal} className={styles.tdStyle}>{elem.num4}</td>
				<td onClick={props.addDateForDeal} className={styles.tdStyle}>{elem.num5}</td>
				<td onClick={props.addDateForDeal} className={styles.tdStyle}>{elem.num6}</td>
				<td onClick={props.addDateForDeal} className={styles.tdStyle}>{elem.num7}</td>
			</tr>
	})

    return <div className={styles.allCalendar}>
        <table className={styles.tableDiv}>
            <thead>
                <tr>
                    {trsWeekDays}
                </tr>
            </thead>
        </table>
        <table className={styles.tableDiv}>
            <tbody>
                {trs}
            </tbody>
        </table>
    </div>

}

export default PrintDates;