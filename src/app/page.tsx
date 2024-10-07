'use client';

import { Attributes, Hero, NumbersCard, Team, Video, Why } from "@/components";
import styles from "./page.module.css";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Head>
        <title>Industrial Succession</title>
        <meta name="description" content="Industrial Succession Home Page" />
      </Head>
      <div className={styles.page}>
        <Hero setIsPlaying={setIsPlaying} />
        <Video isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Why />
        <Team />
        <NumbersCard />
        <Attributes />
      </div>
    </>
  );
}
