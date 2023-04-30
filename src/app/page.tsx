import AgeCalculator from '@/components/AgeCalculator';
import styles from '../styles/HomePage.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <AgeCalculator />
    </main>
  );
}
