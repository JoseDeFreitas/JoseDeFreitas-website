import Head from "next/head";
import Layout from '../components/layout'
import { translationProjects } from '../public/data/data_translation'

export const getStaticProps = async () => {
    return {
        props: {
            projectsList: translationProjects,
        }
    }
}

export default function Translation({ projectsList }) {
    return (
        <>
            <Head>
                <title>Translation projects - José De Freitas</title>
            </Head>

            <Layout>
                <main className="pl-48 h-screen grid grid-cols-4">
                    <section className="col-start-1 col-end-2 p-10 bg-first-50 border-r-2 border-first-200 dark:bg-first-700 dark:border-first-900">
                        <h1 className="font-bold text-first-800 text-2xl mb-2 dark:text-first-100">Translation</h1>
                        <p className="font-semibold text-first-600 dark:text-first-300">
                            I'm a native Spanish speaker who has been interested in languages since a
                            long time ago.<br/><br/>
                            The "Source" button links to the original document from the language I
                            translated it. The "Translation" button links to the translation I made.
                            The "Context" button links to the conversation or thread created regarding
                            the translation (if available). Note that many buttons links to GitHub
                            (because I've also contributed to open-source projects).
                            project (if available).<br/><br/>
                            language that I don't know; the experience of learning those is awesome.<br/><br/>
                            As a software engineer I have a very good knowledge of IT concepts and the
                            like. Most of the documents I've translated are about some technology or
                            service related. However, I also like to translate other kinds of documents.<br/><br/>
                            I know how to use different document formats, such as HTML, Markdown, XML, YML,
                            TXT and RST.
                        </p>
                    </section>
                    <section className="col-start-2 col-end-5 p-6 bg-first-50 overflow-y-auto dark:bg-first-700">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {projectsList.map(project => (
                                <div className="relative bg-first-100 border-2 border-first-300 p-3 rounded divide-y-2 divide-first-300 dark:bg-first-800 dark:border-first-900 dark:divide-first-900">
                                    <div className="mb-14">
                                        <h3 className="text-first-800 font-semibold text-lg dark:text-first-100">{project.name}</h3>
                                        <p className="text-first-700 dark:text-first-200">{project.description}</p>
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
                                            <a href={project.source} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200 dark:text-first-50 dark:border-first-900 dark:hover:bg-first-900" target="_blank">Source</a>
                                            <a href={project.translation} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200 dark:text-first-50 dark:border-first-900 dark:hover:bg-first-900" target="_blank">Translation</a>
                                            {project.pr ? <a href={project.pr} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200 dark:text-first-50 dark:border-first-900 dark:hover:bg-first-900" target="_blank">Context</a> : null}
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
