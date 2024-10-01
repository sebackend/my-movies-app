import styles from './index.module.css';
import '../../assets/styles/grid.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="grid-container mt-2">
        <div className="grid-item col-12">
          <h1>🎥 My Movies App 🍿</h1>
          <h2>
            Busca y guarda las películas y series que has visto o quieres ver
          </h2>
        </div>
        <div className="grid-item col-6 mt-5">
          <p>Column 1 (50%)</p>
        </div>
        <div className="grid-item col-6 mt-5">
          <p>Column 2 (50%)</p>
        </div>
      </div>
    </div>
  );
}
