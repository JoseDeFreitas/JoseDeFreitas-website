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
                    <section className="col-start-1 col-end-2 p-10 bg-first-50 border-r-2 border-first-200">
                        <h1 className="font-bold text-first-800 text-2xl mb-2">Translation</h1>
                        <p className="font-semibold text-first-600">
                            The documents I've translated from English to Spanish.<br/>
                            Each card consists of the project name, the project description, the translation
                            publication date, the link to the translation, the link to the context (I've
                            contributed to open-source projects. In this link I set the url of the pull
                            request or discussion about the translation. If it's a project created entirely
                            by me there's no link to "context") and some tags.<br/>
                            As you see, most translations are done through GitHub. However, I also have
                            Crowdin (a internationalization software) which I use to work on translations
                            from other projects. You can see the link to my Crowdin profile in the home page.<br/>
                            <strong>I sell translations.</strong> You can go to <a href="https://ko-fi.com/s/4d65477558" target="_blank">my shop</a> to see the translation service I'm selling.
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
                                            <a href={project.source} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200" target="_blank">Source</a>
                                            <a href={project.translation} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200" target="_blank">Translation</a>
                                            {project.pr ? <a href={project.pr} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-first-300 hover:bg-first-200" target="_blank">Context</a> : null}
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
