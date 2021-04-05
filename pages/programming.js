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
                <main className="pl-48 h-screen grid grid-cols-4">
                    <section className="col-start-1 col-end-2 p-10 bg-first-50 border-r-2 border-first-200">
                        <h1 className="font-bold text-first-800 text-2xl mb-2">Programming</h1>
                        <p className="font-semibold text-first-600">
                            The project I've been working on and that I've made.<br/>
                            Each card consists of the project name, the project description, the project
                            publication date (I update most of them when needed), the link to the project
                            page (usually a GitHub repository) and some tags (including the programming
                            language I've used).<br/>
                            These project are of various topics and are open-source.
                        </p>
                    </section>
                    <section className="col-start-2 col-end-5 p-6 bg-first-50 overflow-y-auto">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {projectsList.map(project => (
                                <div className="relative bg-first-100 border-2 border-first-300 p-3 rounded divide-y-2 divide-first-300">
                                    <div className="mb-14">
                                        <h3 className="text-first-800 font-semibold text-lg">{project.name}</h3>
                                        <p className="text-first-700">{project.description}</p>
                                        <div className="mb-3 mt-2">
                                            <div className="grid grid-flow-col auto-cols-max gap-1 mt-2">
                                                {project.tags.map(tag => (
                                                    <p className="cursor-default py-1 px-2 rounded text-xs bg-gray-200 text-gray-700">{tag}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-2">
                                        <div className="grid grid-flow-col gap-4 justify-items-stretch">
                                            <a href={project.link} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200" target="_blank">Project</a>
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
