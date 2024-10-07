import { Company } from '@/components';
import Head from 'next/head';

export default function Companies() {
  return (
    <>
      <Head>
        <title>Industrial Succession | Companies</title>
        <meta name="description" content="Industrial Succession Companies Page" />
      </Head>
      <Company />
    </>
  );
};
