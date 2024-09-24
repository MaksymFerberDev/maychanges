import { Hero, Video } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Video />
    </div>
  );
}
