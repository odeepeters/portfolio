import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Using CSS module for styles

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
