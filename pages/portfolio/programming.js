import Head from "next/head";
import Layout from '../../components/layout'
import { programmingProjects } from "../../public/data/data_programming"

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
                <main id="main">
                    <section id="header">
                        <h1>Programming</h1>
                        <p>The project I've been working on and that I've made.</p>
                        <p>
                            Each card consists of the project name, the project description, the project<br/>
                            publication date (I update most of them when needed), the link to the project<br/>
                            page (usually a GitHub repository) and some tags (including the programming<br/>
                            language I've used).
                        </p>
                        <p>These project are of various topics and are open-source.</p>
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
                                <hr/>
                                <div className="card-links">
                                    <a href={project.link}>Project</a>
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            </Layout>
        </>
    )
}
