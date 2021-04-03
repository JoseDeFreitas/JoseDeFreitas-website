import Head from "next/head";
import Layout from '../components/layout'

export default function Home() {
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
                <main className="container mx-auto">
                    <section>
                        <h1>José De Freitas</h1>
                        <p>Programmer and translator</p>
                        <a href="https://ko-fi.com/D1D62AAG8" target="_blank"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Ko-fi button"/></a>
                    </section>
                    <section>
                        <div>
                            <h2>Programming</h2>
                            <p>
                                I code various types of programs. I like many topics, but to
                                list some of them, I'd say: automation, web development
                                (front-end and back-end), web applications, desktop applications,
                                networking, and more. I also do coding challenges very often, as I
                                find them pretty fun and they make me gain more skills.
                            </p>
                            <p>
                                I use Python, C++ and C# as programming languages, though
                                I also know JavaScript, HTML and CSS (sass). About more specific
                                technologies I know git and the main IDE I use is Visual Studio Code.
                            </p>
                        </div>
                        <div>
                            <h2>Translation</h2>
                            <p>
                                I'm a native Spanish speaker that have been lerning English years ago.
                                I started to translate documents some time ago and it's something I
                                really enjoy. I have a very meticulous process when it comes to
                                doing a translation job, as I consider a translation should reflect
                                the same ideas and content of the original document.
                            </p>
                            <p>
                                I've translated numerous documents. The topics of these documents
                                are mainly tech-related and of various different topics within this
                                broad field.
                            </p>
                        </div>
                    </section>
                    <section>
                        <p>Contact:</p>
                        <ul>
                            <li>
                                <a href="https://github.com/JoseDeFreitas" target="_blank">GitHub</a>
                            </li>
                            <li>
                                <a href="https://crowdin.com/profile/JoseDeFreitas" target="_blank">Crowdin</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/JoseDeF32503298" target="_blank">Twitter</a>
                            </li>
                        </ul>
                    </section>
                </main>
            </Layout>
        </>
    );
}
