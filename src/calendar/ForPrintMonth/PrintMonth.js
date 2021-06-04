import React from 'react';
import styles from './../../CssStyles/PrintMonth.module.css'

function PrintMonth(props) {
    let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

	let printMonth = arr[props.currentMonth] + ' ' + props.currentYear;

	return <div className={styles.divForPrintMonth}>
			<p className={styles.monthParag}>{printMonth}</p>
			<div className={styles.forBtn}>
				<button onClick={props.showPrevMonth}>&larr;</button>
				<button onClick={props.showNextMonth}>&rarr;</button>
			</div>
		</div>
}

export default PrintMonth;