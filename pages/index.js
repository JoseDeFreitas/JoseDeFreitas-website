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
                    <section className="col-start-1 col-end-2 p-12 bg-first-50 border-r-2 border-first-200">
                        <div className="grid auto-cols-max mb-12 bg-first-100 rounded border-2 border-first-300 p-5">
                            <div className="col-start-1 col-end-2 self-center">
                                <img src="https://avatars.githubusercontent.com/u/37962411?v=4" className="w-52 rounded-full"/>
                            </div>
                            <div className="col-start-2 col-end-3 self-center ml-8">
                                <h1 className="text-first-800 font-bold text-5xl">José De Freitas</h1>
                                <p className="text-first-800 font-semibold text-2xl">Programmer and translator</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-first-600 font-semibold text-xl">About me (bla bla bla not!)</p>
                        </div>
                    </section>
                    <section className="relative col-start-2 col-end-3 bg-first-50">
                        <div className="h-full p-4">
                            <div className="grid grid-rows-3 gap-4">
                                <div className="bg-first-100 border-2 border-first-300 p-3 rounded">
                                    <h2 className="text-first-800 font-semibold">Overall</h2>
                                </div>
                                <div className="bg-first-100 border-2 border-first-300 p-3 rounded">
                                    <h2 className="text-first-800 font-semibold">Programming languages</h2>
                                </div>
                                <div className="bg-first-100 border-2 border-first-300 p-3 rounded">
                                    <h2 className="text-first-800 font-semibold">Technologies</h2>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bg-first-100 bottom-0 w-full p-4 border-t-2 border-first-200">
                            <div className="grid grid-cols-3 gap-4 justify-items-stretch">
                                <a href="https://github.com/JoseDeFreitas" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200" target="_blank">GitHub</a>
                                <a href="https://crowdin.com/profile/JoseDeFreitas" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200" target="_blank">Crowdin</a>
                                <a href="https://twitter.com/JoseDeF32503298" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200" target="_blank">Twitter</a>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
}
