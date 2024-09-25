import { Hero, NumbersCard, Team, Video, Why } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Video />
      <Why />
      <Team />
      <NumbersCard />
    </div>
  );
}
