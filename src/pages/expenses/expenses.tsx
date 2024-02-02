import styles from './expenses.module.scss';
import personOne from '../../assets/png/person1.png';
import personTwo from '../../assets/png/person2.png';
import personThree from '../../assets/png/person3.png';
import addIcon from '../../assets/png/addIcon.png';

export default function Expenses() {
    return (
        <>
        <main className={styles.expenses}>
            <div className={styles.expenseCard}>
                <section className={styles.expensesOverview}>
                    <div className={styles.expensesHeader}>
                        <p className={styles.expensesTitle}>Expenses</p>
                        <div className={styles.expensesActions}>
                            <div className={styles.personImages}>
                                <img src={personOne} alt="person one" /><img src={personTwo} alt="person two" /><img src={personThree} alt="person three" />
                            </div>
                            <button>
                                <img src={addIcon} alt="add" />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        </>
    )
}