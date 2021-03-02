import Head from "next/head";
import Layout from '../components/Layout'

export default function Home() {
    return (
        <div>
        <Head>
            <title>Home - José De Freitas</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
            <h1>Main page</h1>
        </Layout>
        </div>
    );
}
