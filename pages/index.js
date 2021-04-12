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
                    .lname .yname {
                        bottom: 130%;
                        left: 50%;
                        width: 34px;
                        margin-left: -17px;
                    }
                    
                    .lname .yname::after {
                        content: "";
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        margin-left: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: #6B7280 transparent transparent transparent;
                    }

                    .lname:hover .yname {
                        visibility: visible;
                    }
                `}</style>
                <main className="pt-16 grid grid-cols-1 grid-rows-2">
                    <section className="relative row-start-1 row-end-2 p-8 bg-first-50 border-b-2 border-first-300 dark:bg-first-700 dark:border-first-900">
                        <div className="grid grid-flow-col mb-6 bg-first-200 rounded border-2 border-first-400 p-5 dark:bg-first-800 dark:border-first-900">
                            <div className="col-start-1 col-end-2 self-center">
                                <img src="https://avatars.githubusercontent.com/u/37962411?v=4" className="w-36 rounded-full"/>
                            </div>
                            <div className="col-start-2 col-end-3 self-center ml-4">
                                <h1 className="text-first-800 font-bold text-3xl dark:text-first-100">José De Freitas</h1>
                                <p className="text-first-800 font-semibold text-lg dark:text-first-100">Software Engineer and Translator</p>
                            </div>
                        </div>
                        <div className="mb-8">
                            <p className="text-first-600 font-semibold text-lg dark:text-first-300">
                                I'm a Software Engineer who loves to create new projects, especially open-source.
                                I also love to contribute to other projects in any way in order to make the
                                project even better.<br/><br/>
                                I started programming some years ago and is something I'm really motivated
                                about and that makes me happy. I use plenty of technologies to create
                                different types of projects, such as websites, applications, libraries, etc.<br/><br/>
                                I'm a native Spanish speaker that enjoys a lot learning about other languages
                                and my native one. I like translating different types of documents into my
                                native language to make available more resources for people who speak Spanish.<br/><br/>
                            </p>
                        </div>
                        <div className="absolute bg-first-200 bottom-0 left-0 w-full p-4 border-t-2 border-first-300 dark:bg-first-800 dark:border-first-900">
                            <div className="grid grid-flow-col gap-4 justify-items-stretch">
                                <a href="https://github.com/JoseDeFreitas" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-400 hover:bg-gray-300 dark:text-first-100 dark:border-first-900 dark:hover:bg-gray-700" target="_blank">GitHub</a>
                                <a href="https://crowdin.com/profile/JoseDeFreitas" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-400 hover:bg-green-200 dark:text-first-100 dark:border-first-900 dark:hover:bg-green-700" target="_blank">Crowdin</a>
                                <a href="https://twitter.com/JoseDeF32503298" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-400 hover:bg-blue-200 dark:text-first-100 dark:border-first-900 dark:hover:bg-blue-700" target="_blank">Twitter</a>
                            </div>
                        </div>
                    </section>
                    <section className="row-start-2 p-6 row-end-3 bg-first-50 dark:bg-first-700">
                        <div>
                            <div className="mb-4">
                                <h2 className="font-bold text-first-800 text-2xl mb-2 dark:text-first-100">Experience</h2>
                                <p className="font-semibold text-first-600 dark:text-first-300">
                                    Below you can see my experience using different technologies. The "Overall"
                                    section wraps wide topics. The "Programming languages" section wraps both
                                    programming and markup languages. Finally, the "Technologies" section wraps
                                    some technologies I use. There's some information I don't include in here,
                                    such as my spoken languages, libraries/packages I work with, etc. That
                                    information can be seen at the other pages of my website. Hover over an
                                    item to see how many years of experience I have with the item you selected.
                                </p>
                            </div>
                            <div className="w-full grid grid-rows-3 gap-4">
                                <div className="w-full bg-first-200 border-2 border-first-400 p-3 rounded dark:bg-first-800 dark:border-first-900">
                                    <h2 className="text-first-800 font-semibold dark:text-first-100">Overall</h2>
                                    <div className="grid grid-flow-col auto-cols-max gap-1 mt-3">
                                        {overallList.map(item => (
                                            <div>
                                                <p className={"lname relative cursor-default py-1 px-2 rounded text-sm bg-" + item.color + "-300 text-" + item.color + "-800 dark:bg-" + item.color + "-700 dark:text-" + item.color + "-200"}>
                                                    {item.name}
                                                    <span className="yname absolute z-10 invisible text-white text-xs text-center bg-first-500 px-2 py-1 rounded">{moment([moment().year(), moment().month()]).diff(item.date, 'years')}y</span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full bg-first-200 border-2 border-first-400 p-3 rounded dark:bg-first-800 dark:border-first-900">
                                    <h2 className="text-first-800 font-semibold dark:text-first-100">Programming languages</h2>
                                    <div className="grid grid-cols-2 auto-cols-max gap-1 mt-3">
                                        {planguagesList.map(item => (
                                            <div>
                                                <p className={"lname relative cursor-default py-1 px-2 rounded text-sm bg-" + item.color + "-300 text-" + item.color + "-800 dark:bg-" + item.color + "-700 dark:text-" + item.color + "-200"}>
                                                    {item.name}
                                                    <span className="yname absolute z-10 invisible text-white text-xs text-center bg-first-500 px-2 py-1 rounded">{moment([moment().year(), moment().month()]).diff(item.date, 'years')}y</span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full bg-first-200 border-2 border-first-400 p-3 rounded dark:bg-first-800 dark:border-first-900">
                                    <h2 className="text-first-800 font-semibold dark:text-first-100">Technologies</h2>
                                    <div className="grid grid-flow-col auto-cols-max gap-1 mt-3">
                                        {technologiesList.map(item => (
                                            <div>
                                                <p className={"lname relative cursor-default py-1 px-2 rounded text-sm bg-" + item.color + "-300 text-" + item.color + "-800 dark:bg-" + item.color + "-700 dark:text-" + item.color + "-200"}>
                                                    {item.name}
                                                    <span className="yname absolute z-10 invisible text-white text-xs text-center bg-first-500 px-2 py-1 rounded">{moment([moment().year(), moment().month()]).diff(item.date, 'years')}y</span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
}
