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
                <main className="pl-48 h-screen grid grid-cols-2">
                    <section className="col-start-1 col-end-2 p-12 bg-second-500 border-r-8 border-second-700">
                        <div className="mb-12">
                            <img src="https://avatars.githubusercontent.com/u/37962411?v=4" className="w-56 rounded-full mb-4"/>
                            <h1 className="text-fourth font-bold text-5xl">José De Freitas</h1>
                            <p className="text-fourth font-semibold text-2xl">Programmer and translator</p>
                        </div>
                        <div>
                            <p className="text-fourth font-semibold text-xl">About me (bla bla bla not!)</p>
                        </div>
                    </section>
                    <section className="relative col-start-2 col-end-3">
                        <div>
                            <h1>Hi</h1>
                        </div>
                        <div className="absolute bg-first-400 bottom-0 w-full p-4 border-t-8 border-first-600">
                            <div className="grid grid-cols-3 gap-4 justify-items-stretch">
                                <a href="https://github.com/JoseDeFreitas" className="p-2 rounded-lg bg-second-500 text-fourth text-lg text-center font-bold hover:bg-second-600" target="_blank">GitHub</a>
                                <a href="https://crowdin.com/profile/JoseDeFreitas" className="p-2 rounded-lg bg-second-500 text-fourth text-lg text-center font-bold hover:bg-second-600" target="_blank">Crowdin</a>
                                <a href="https://twitter.com/JoseDeF32503298" className="p-2 rounded-lg bg-second-500 text-fourth text-lg text-center font-bold hover:bg-second-600" target="_blank">Twitter</a>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
}
