import React from 'react';
import styles from './../../CssStyles/PrintTasks.module.css';

function PrintTasks(props) {

    let SetIsEditTrue = (event) => {
        props.ChangeDeal(event);
    }

    let SetIsEditFalse = (event) => {
        props.SaveChanging(event);
    }

    let deals = props.dealsObj.map((elem, index) => {
        let deals;

        if (props.currentYear === elem.year && props.currentMonth === elem.month && props.dateForObj === elem.matchDate) {
            if (!elem.isEdit) {
                deals = <li key={index} className={styles.liStyle}>
                    <div>
                        <span onClick={SetIsEditTrue} id={elem.id}>{elem.deals}</span>
                    </div>
                    <div className={styles.delDivStyle}>
                        <button id={elem.id} data-index={index} onClick={props.DelDeal} className={styles.delBtn}>&#10006;</button>
                    </div>
                    
                </li>
            } else {
                deals = <li key={index} className={styles.liStyle}>
                    <div>
                        <textarea value={props.changeValue} id={elem.id} onChange={props.OnChangeValue}/>
                    </div>
                    <div className={styles.delDivStyle}>
                        <button onClick={SetIsEditFalse} className={styles.saveBtn}>&#10003;</button>
                        <button id={elem.id} data-index={index} onClick={props.DelDeal} className={styles.delBtn}>&#10006;</button>
                    </div>
                    
                </li>                
            }
        }

        return deals;
    })

    return (
        <div className={styles.tasksForm}>
            {props.dateForObj !== null ?
                <p className={styles.TasksColorParag}>Мои задачи на {props.dateForObj}.{props.currentMonth + 1}.{props.currentYear}</p>
                :
                <p className={styles.TasksColorParag}>Мои задачи:</p>
            }

            <div className={styles.AddForm}>
                <input placeholder="новая задача" onChange={props.changeInput} value={props.dealValue} />
                <button onClick={props.addDeal} className={styles.AddFormBtn}>Добавить</button>
            </div>

            <ul className={styles.ulStyle}>{deals}</ul>
        </div>
    )
}

export default PrintTasks;

