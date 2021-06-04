import styles from './CssStyles/AppStyle.module.css'

import ContainerComponentDates from "./calendar/ForPrintDates/ContainerComponentDates";
import ContainerComponentMonth from "./calendar/ForPrintMonth/ContainerComponentMonth";
import ContainerComponentTasks from "./calendar/PrintTasks/ContainerComponentTasks";


function App() {
  return (
    <div className={styles.App}>
      <div className={styles.calendar}>
        <ContainerComponentMonth />
        <ContainerComponentDates />
      </div>
      <div className={styles.deals}>
        <ContainerComponentTasks />
      </div>
    </div>
  );
}

export default App;
