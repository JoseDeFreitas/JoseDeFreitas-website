import Head from "next/head";
import Layout from '../components/layout'
import { programmingProjects } from "../public/data/data_programming"

export const getStaticProps = async () => {
    return {
        props: {
            projectsList: programmingProjects,
        }
    }
}

export default function Programming({ projectsList }) {
    return (
        <>
            <Head>
                <title>Programming projects - José De Freitas</title>
            </Head>

            <Layout>
                <main className="pt-16 h-screen grid grid-flow-row xl:grid-cols-4 xl:pl-48 xl:pt-0">
                    <section className="p-6 bg-first-50 border-b-2 border-first-300 dark:bg-first-900 dark:border-first-700 xl:border-b-0 xl:border-r-2 xl:col-start-1 xl:col-end-2">
                        <h1 className="font-bold text-first-800 text-2xl mb-2 dark:text-first-100">Programming</h1>
                        <p className="font-semibold text-justify text-first-600 dark:text-first-300">
                            At the left you can see all my programming projects. All of them are open
                            source!<br/><br/>
                            The "Project" button links to the GitHub repository where you can see the
                            code behind the project. The "Website" button links to the website of the
                            project (if available).<br/><br/>
                            Programming gives you a lot of possibilities to do whatever you want. You
                            can find many types of projects in here, but most of them are websites
                            (frontend and backend), desktop applications, packages/libraries and general
                            scripts.<br/><br/>
                            My main programming languages are Python, C# and JavaScript, though I
                            sometimes use other ones.<br/><br/>
                            I've worked with plenty of libraries. I like using Next.js for the frontend,
                            Flask for the backend and Avalonia for desktop apps. I try to integrate these
                            with other libraries in order to provide a good product.
                        </p>
                    </section>
                    <section className="p-6 bg-first-50 dark:bg-first-900 xl:col-start-2 xl:col-end-5">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
                            {projectsList.map(project => (
                                <div className="relative bg-first-200 border-2 border-first-400 p-3 rounded divide-y-2 divide-first-400 dark:bg-first-800 dark:border-first-600 dark:divide-first-600">
                                    <div className="mb-14">
                                        <h3 className="text-first-800 font-semibold text-lg dark:text-first-100">{project.name}</h3>
                                        <p className="text-first-700 dark:text-first-200">{project.description}</p>
                                        <div className="mb-3 mt-2">
                                            <div className="grid grid-flow-col auto-cols-max gap-1 mt-2">
                                                {project.tags.map(tag => (
                                                    <p className="cursor-default py-1 px-2 rounded text-xs bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200">{tag}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-2">
                                        <div className="grid grid-flow-col gap-4 justify-items-stretch">
                                            <a href={project.link} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-first-400 hover:bg-first-400 dark:text-first-50 dark:border-first-600 dark:hover:bg-first-900" target="_blank">Project</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    )
}
