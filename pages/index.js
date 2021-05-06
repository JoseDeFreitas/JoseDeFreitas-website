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
                <meta name="description" content="Portfolio website of José De Freitas"/>
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
                <main className="pt-16 h-screen grid grid-flow-row md:grid-cols-2 xl:pl-48 xl:pt-0">
                    <section className="relative p-8 bg-first-50 border-b-2 border-first-300 dark:bg-first-900 dark:border-first-700 md:border-b-0 md:border-r-2 md:p-10">
                        <div className="grid grid-flow-col mb-6 bg-first-200 rounded border-2 border-first-400 p-5 dark:bg-first-800 dark:border-first-600 xl:auto-cols-max xl:mb-10">
                            <div className="col-start-1 col-end-2 self-center">
                                <img src="https://avatars.githubusercontent.com/u/37962411?v=4" className="w-36 rounded-full xl:w-28 2xl:w-44"/>
                            </div>
                            <div className="col-start-2 col-end-3 self-center ml-4 2xl:ml-6">
                                <h1 className="text-first-800 font-bold text-3xl dark:text-first-100 xl:text-4xl 2xl:text-5xl">José De Freitas</h1>
                                <p className="text-first-800 font-semibold text-lg dark:text-first-100 xl:text-xl 2xl:text-2xl">Programmer and Translator</p>
                            </div>
                        </div>
                        <div className="mb-10">
                            <p className="text-first-600 font-semibold text-lg text-justify dark:text-first-300 xl:text-xl">
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
                        <div className="absolute bg-first-200 bottom-0 left-0 w-full p-4 border-t-2 border-first-300 dark:bg-first-800 dark:border-first-700">
                            <div className="grid grid-flow-col gap-4 justify-items-stretch">
                                <a href="https://github.com/JoseDeFreitas" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-400 hover:bg-gray-400 dark:text-first-100 dark:border-first-600 dark:hover:bg-gray-700" target="_blank">GitHub</a>
                                <a href="https://www.linkedin.com/in/jose-de-freitas" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-400 hover:bg-blue-400 dark:text-first-100 dark:border-first-600 dark:hover:bg-blue-700" target="_blank">LinkedIn</a>
                                <a href="https://crowdin.com/profile/JoseDeFreitas" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-400 hover:bg-green-400 dark:text-first-100 dark:border-first-600 dark:hover:bg-green-700" target="_blank">Crowdin</a>
                                <a href="https://twitter.com/JoseDeF32503298" className="p-2 rounded text-first-800 text-base text-center font-semibold border-2 border-first-400 hover:bg-blue-400 dark:text-first-100 dark:border-first-600 dark:hover:bg-blue-700" target="_blank">Twitter</a>
                            </div>
                        </div>
                    </section>
                    <section className="p-6 bg-first-50 dark:bg-first-900">
                        <div>
                            <div className="mb-4">
                                <h2 className="font-bold text-first-800 text-2xl mb-2 dark:text-first-100">Skills</h2>
                            </div>
                            <div className="w-full grid grid-flow-row gap-4">
                                <div className="w-full bg-first-200 border-2 border-first-400 p-3 rounded dark:bg-first-800 dark:border-first-600">
                                    <h2 className="text-first-800 font-semibold dark:text-first-100">Overall</h2>
                                    <div className="flex flex-wrap mt-3 p-0.5">
                                        {overallList.map(item => (
                                            <p className={"lname m-0.5 relative cursor-default py-1 px-2 rounded text-sm bg-" + item.color + "-300 text-" + item.color + "-800 dark:bg-" + item.color + "-700 dark:text-" + item.color + "-200"}>
                                                {item.name}
                                                <span className="yname absolute z-10 invisible text-white text-xs text-center bg-first-500 px-2 py-1 rounded">{moment([moment().year(), moment().month()]).diff(item.date, 'years')}y</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full bg-first-200 border-2 border-first-400 p-3 rounded dark:bg-first-800 dark:border-first-600">
                                    <h2 className="text-first-800 font-semibold dark:text-first-100">Programming languages</h2>
                                    <div className="flex flex-wrap mt-3 p-0.5">
                                        {planguagesList.map(item => (
                                            <p className={"lname m-0.5 relative cursor-default py-1 px-2 rounded text-sm bg-" + item.color + "-300 text-" + item.color + "-800 dark:bg-" + item.color + "-700 dark:text-" + item.color + "-200"}>
                                                {item.name}
                                                <span className="yname absolute z-10 invisible text-white text-xs text-center bg-first-500 px-2 py-1 rounded">{moment([moment().year(), moment().month()]).diff(item.date, 'years')}y</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full bg-first-200 border-2 border-first-400 p-3 rounded dark:bg-first-800 dark:border-first-600">
                                    <h2 className="text-first-800 font-semibold dark:text-first-100">Technologies</h2>
                                    <div className="flex flex-wrap mt-3 p-0.5">
                                        {technologiesList.map(item => (
                                            <p className={"lname m-0.5 relative cursor-default py-1 px-2 rounded text-sm bg-" + item.color + "-300 text-" + item.color + "-800 dark:bg-" + item.color + "-700 dark:text-" + item.color + "-200"}>
                                                {item.name}
                                                <span className="yname absolute z-10 invisible text-white text-xs text-center bg-first-500 px-2 py-1 rounded">{moment([moment().year(), moment().month()]).diff(item.date, 'years')}y</span>
                                            </p>
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
