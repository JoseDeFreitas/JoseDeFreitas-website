import Head from "next/head";
import Layout from '../../components/Layout'
import { translationProjects } from '../../public/data/data_translation'

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
                    <section>
                        <h1>Translation</h1>
                        <p></p>
                    </section>
                    <section>
                        {projectsList.map(project => (
                            <div className="card">
                                <div>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <p>{project.creation}</p>
                                </div>
                                <div>
                                    <a href={project.link}>Translation</a>
                                    <a href={project.pr}>Context</a>
                                </div>
                                <p>{project.tags}</p>
                            </div>
                        ))}
                    </section>
                </main>
            </Layout>
        </>
    )
}
