import Head from "next/head";
import Layout from '../components/layout'
import { blogNew, blogArchive } from '../public/data/data_posts'

export const getStaticProps = async () => {
    return {
        props: {
            newPosts: blogNew,
            archivePosts: blogArchive,
        }
    }
}

export default function Blog({ newPosts, archivePosts }) {
    return (
        <>
            <Head>
                <title>Blog - José De Freitas</title>
            </Head>

            <Layout>
                <main className="pl-48 h-screen grid grid-cols-1">
                    <section className="p-12 bg-first-50 overflow-y-auto dark:bg-first-700">
                        <div className="mb-6">
                            <h2 className="font-bold text-first-800 text-2xl mb-2 dark:text-first-100">New</h2>
                            <p className="text-lg font-semibold text-first-600 dark:text-first-300">No posts available.</p>
                            <div className="grid grid-cols-5 gap-4">
                                {newPosts.map(post => (
                                    <div className="relative bg-yellow-200 border-2 border-yellow-400 p-3 rounded divide-y-2 divide-yellow-400 dark:bg-yellow-500 dark:border-yellow-600 dark:divide-yellow-600">
                                        <div className="mb-14">
                                            <h3 className="text-first-800 font-semibold text-lg">{post.name}</h3>
                                            <p className="text-first-700">{post.description}</p>
                                            <div className="mb-3 mt-2">
                                                <div className="grid grid-flow-col auto-cols-max gap-2 mt-2">
                                                    <p className="font-semibold text-first-800 text-sm">{post.date}</p>
                                                    <p className="font-semibold text-first-800 text-sm">{post.len}</p>
                                                </div>
                                                <div className="grid grid-flow-col auto-cols-max gap-1 mt-2">
                                                    {post.tags.map(tag => (
                                                        <p className="cursor-default py-1 px-2 rounded text-xs bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200">{tag}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-2">
                                            <div className="grid grid-flow-col gap-4 justify-items-stretch">
                                                <a href={post.link} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-yellow-400 hover:bg-yellow-300 dark:border-yellow-600 dark:hover:bg-yellow-600" target="_blank">Read</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-first-800 text-2xl mb-2 dark:text-first-100">Archive</h2>
                            <p className="text-lg font-semibold text-first-600 dark:text-first-300">No posts available.</p>
                            <div className="grid grid-cols-5 gap-4">
                                {archivePosts.map(post => (
                                    <div className="relative bg-first-200 border-2 border-first-400 p-3 rounded divide-y-2 divide-first-400 dark:bg-first-800 dark:border-first-900 dark:divide-first-900">
                                        <div className="mb-14">
                                            <h3 className="text-first-800 font-semibold text-lg dark:text-first-100">{post.name}</h3>
                                            <p className="text-first-700 dark:text-first-200">{post.description}</p>
                                            <div className="mb-3 mt-2">
                                                <div className="grid grid-flow-col auto-cols-max gap-1 mt-2">
                                                    <p className="font-semibold text-first-800 text-sm dark:text-first-100">{post.date}</p>
                                                    <p className="font-semibold text-first-800 text-sm dark:text-first-100">{post.len}</p>
                                                </div>
                                                <div className="grid grid-flow-col auto-cols-max gap-1 mt-2">
                                                    {post.tags.map(tag => (
                                                        <p className="cursor-default py-1 px-2 rounded text-xs bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200">{tag}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-2">
                                            <div className="grid grid-flow-col gap-4 justify-items-stretch">
                                                <a href={post.link} className="p-1 rounded text-first-800 text-base text-center font-semibold border-2 border-first-400 hover:bg-first-300 dark:text-first-50 dark:border-first-900 dark:hover:bg-first-900" target="_blank">Read</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
}
