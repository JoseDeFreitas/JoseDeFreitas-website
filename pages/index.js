import Head from "next/head";
import Layout from '../components/layout'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home - José De Freitas</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Portfolio of José De Freitas"/>
                <meta name="keywords" content="Portfolio, Programming, Translation"/>
                <meta name="author" content="José De Freitas"/>
                <link rel="icon" href="https://avatars.githubusercontent.com/u/37962411?v=4"/>
            </Head>

            <Layout>
                <main className="pl-48 h-screen grid grid-cols-2 grid-rows-2">
                    <section className="col-start-1 col-end-2 row-start-1 row-end-3 p-12 bg-second-300">
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/37962411?v=4" className="w-56 rounded-full"/>
                            <h1>José De Freitas</h1>
                            <p>Programmer and translator</p>
                        </div>
                        <div>
                            <p>About me (bla bla bla not!)</p>
                        </div>
                    </section>
                    <section className="col-start-2 col-end-3 row-start-1 row-end-2">
                        <h1>Hi</h1>
                    </section>
                    <section className="col-start-2 col-end-3 row-start-2 row-end-3 bg-first-300">
                        <p>Contact:</p>
                        <ul>
                            <li>
                                <a href="https://github.com/JoseDeFreitas" target="_blank">GitHub</a>
                            </li>
                            <li>
                                <a href="https://crowdin.com/profile/JoseDeFreitas" target="_blank">Crowdin</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/JoseDeF32503298" target="_blank">Twitter</a>
                            </li>
                        </ul>
                    </section>
                </main>
            </Layout>
        </>
    );
}
