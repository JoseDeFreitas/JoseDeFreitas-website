import moment from "moment";
import Head from "next/head";
import Layout from '../components/layout'
import { statsOverall, statsPLanguages, statsTechnologies } from '../public/data/data_statistics'

export const getStaticProps = async () => {
    return {
        props: {
            overallList: statsOverall,
            planguagesList: statsPLanguages,
            technologiesList: statsTechnologies,
        }
    }
}

export default function Home({ overallList, planguagesList, technologiesList }) {
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
                <style jsx global>{`
                    .lname:hover .yname {
                        visibility: visible;
                    }
                `}</style>
                <main className="pl-48 h-screen grid grid-cols-2">
                    <section className="col-start-1 col-end-2 p-12 bg-first-50 border-r-2 border-first-200">
                        <div className="grid auto-cols-max mb-10 bg-first-100 rounded border-2 border-first-300 p-5">
                            <div className="col-start-1 col-end-2 self-center">
                                <img src="https://avatars.githubusercontent.com/u/37962411?v=4" className="w-52 rounded-full"/>
                            </div>
                            <div className="col-start-2 col-end-3 self-center ml-8">
                                <h1 className="text-first-800 font-bold text-5xl">José De Freitas</h1>
                                <p className="text-first-800 font-semibold text-2xl">Software engineer and Translator</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-first-600 font-semibold text-xl"><i>soon.</i></p>
                        </div>
                    </section>
                    <section className="relative col-start-2 col-end-3 bg-first-50">
                        <div className="h-max p-4">
                            <div className="mb-6">
                                <h2 className="font-bold text-first-800 text-2xl mb-2">Experience</h2>
                                <p className="font-semibold text-first-600">Below you can see my experience using different technologies. The "Overall" section wraps wide topics. The "Programming languages" section wraps both programming and markup languages. Finally, the "Technologies" section wraps some technologies I use. There's some information I don't include in here, such as my spoken languages, libraries/packages I work with, etc. That information can be seen at the other pages of my website. Right next to each item you can see how many years of experience I have with each one.</p>
                            </div>
                            <div className="grid grid-rows-3 gap-4 h-max">
                                <div className="bg-first-100 border-2 border-first-300 p-3 rounded h-max">
                                    <h2 className="text-first-800 font-semibold">Overall</h2>
                                    <div className="grid grid-flow-col auto-cols-max gap-1 mt-3">
                                        {overallList.map(item => (
                                            <div className="w-max">
                                                <p className={"lname relative cursor-default py-1 px-2 rounded text-sm bg-" + item.color + "-200 text-" + item.color + "-700"}>
                                                    {item.name}
                                                    <span className="yname absolute z-10 bottom-full left-1/2 invisible text-white bg-first-500 px-1 rounded w-auto">{moment([moment().year(), moment().month()]).diff(item.date, 'years')}y</span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-first-100 border-2 border-first-300 p-3 rounded h-max">
                                    <h2 className="text-first-800 font-semibold">Programming languages</h2>
                                    <div className="grid grid-flow-col auto-cols-max gap-1 mt-3">
                                        {planguagesList.map(item => (
                                            <div className="w-max">
                                                <p className={"cursor-default py-1 px-2 rounded text-sm bg-" + item.color + "-200 text-" + item.color + "-700"}>{item.name} - {moment([moment().year(), moment().month()]).diff(item.date, 'years')}y</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-first-100 border-2 border-first-300 p-3 rounded h-max">
                                    <h2 className="text-first-800 font-semibold">Technologies</h2>
                                    <div className="grid grid-flow-col auto-cols-max gap-1 mt-3">
                                        {technologiesList.map(item => (
                                            <div className="w-max">
                                                <p className={"cursor-default py-1 px-2 rounded text-sm bg-" + item.color + "-200 text-" + item.color + "-700"}>{item.name} - {moment([moment().year(), moment().month()]).diff(item.date, 'years')}y</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bg-first-100 bottom-0 w-full p-4 border-t-2 border-first-200">
                            <div className="grid grid-flow-col gap-4 justify-items-stretch">
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
