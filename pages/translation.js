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
                <main id="main">
                    <section id="header">
                        <h1>Translation</h1>
                        <p>The documents I've translated from English to Spanish.</p>
                        <p>
                            Each card consists of the project name, the project description, the translation
                            publication date, the link to the translation, the link to the context (I've
                            contributed to open-source projects. In this link I set the url of the pull
                            request or discussion about the translation. If it's a project created entirely
                            by me there's no link to "context") and some tags.
                        </p>
                        <p>
                            As you see, most translations are done through GitHub. However, I also have
                            Crowdin (a internationalization software) which I use to work on translations
                            from other projects. You can see the link to my Crowdin profile in the home page.
                        </p>
                        <p>
                            <strong>I sell translations.</strong> You can go to <a href="https://ko-fi.com/s/4d65477558" target="_blank">my shop</a> to see the translation service I'm selling.
                        </p>
                    </section>
                    <section id="container">
                        {projectsList.map(project => (
                            <div className="card">
                                <div className="card-info">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="card-extra">
                                        <p class="date">{project.creation}</p>
                                        <p class="card-tags">Tags: {project.tags.join(', ')}</p>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <hr/>
                                    <div className="card-links">
                                        <a href={project.source}>Source</a>
                                        <a href={project.translation}>Translation</a>
                                        {project.pr ? <a href={project.pr}>Context</a> : <p>Context</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            </Layout>
        </>
    )
}
