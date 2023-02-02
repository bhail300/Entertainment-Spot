import Head from 'next/head'

export default function About() {
    return(
        <div className='container'>
            <Head>
                <title>About Us</title>
                <link rel="stylesheet" href="/styles.css"/>
            </Head>
            <h1>About</h1>
        </div>
    )
}