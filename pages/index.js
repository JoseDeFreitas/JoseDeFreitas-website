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
                <main id="main">
                    <section id="author">
                        <h1 id="name">José De Freitas</h1>
                        <p id="title">Programmer and translator</p>
                        <a href="https://ko-fi.com/D1D62AAG8" target="_blank"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Ko-fi button"/></a>
                    </section>
                    <section id="description">
                        <div id="programming">
                            <h2>Programming</h2>
                            <p>
                                I code various types of programs. I like many topics, but to<br/>
                                list some of them, I'd say: automation, web development<br/>
                                (front-end and back-end), web applications, desktop applications,<br/>
                                networking, and more. I also do coding challenges very often, as I<br/>
                                find them pretty fun and they make me gain more skills.
                            </p>
                            <p>
                                I use Python, C++ and C# as programming languages, though<br/>
                                I also know JavaScript, HTML and CSS (sass). About more specific<br/>
                                technologies I know git and the main IDE I use is Visual Studio Code.
                            </p>
                        </div>
                        <div id="translation">
                            <h2>Translation</h2>
                            <p>
                                I'm a native Spanish speaker that have been lerning English years ago.<br/>
                                I started to translate documents some time ago and it's something I<br/>
                                really enjoy. I have a very meticulous process when it comes to<br/>
                                doing a translation job, as I consider a translation should reflect<br/>
                                the same ideas and content of the original document.
                            </p>
                            <p>
                                I've translated numerous documents. The topics of these documents<br/>
                                are mainly tech-related and of various different topics within this<br/>
                                broad field.
                            </p>
                        </div>
                    </section>
                    <section id="contact">
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
