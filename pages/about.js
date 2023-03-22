import Head from "next/head";
import styles from '../styles/About.module.css'
import Nav from '../comps/navbar'
import Image from 'next/image'
import aboutInfo from '../data/about.json'
//import Link from 'next/link'
import { Link } from "@nextui-org/react";

export default function About() {
    return(
    <>
        <Head>
            <title>About</title>
            <meta name="author" content="Blen, Horus, Zahir" />
            <meta property="og:title" content="Entertainment-Spot" />
            <meta property="og:description" content="BCIT Digital Design and Development Program" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/png" href="/e_spot.svg" />
        </Head>    
        <div className={styles.container}>
            <div>
                <Nav/>
                <h1>About</h1>
                <div className={styles.description}>
                    <h3>App description:</h3>
                    <p>Entertainment Spot is an application that can help you find your next favorite movie or video game. This application was built using the Next.js framework and axios is being used to pull data from two separate APIs.</p>

                    <h3>APIs used:</h3>
                    <p><Link color="text" href='https://rawg.io/apidocs' isExternal>RAWG Video Games Database API</Link>, <Link color="text" href='https://www.omdbapi.com/' isExternal>OMDb API</Link></p>
                    <h3>UI Library:</h3>
                    <p><Link color="text" href='https://nextui.org/' isExternal>NextUI</Link></p>
                    <h3>App development start date:</h3>
                    <p>January 17, 2023</p>
                    <h3>App development finish date:</h3>
                    <p>March 27, 2023</p>
                    <h3>Github link:</h3>
                    <p> <Link color="text" href='https://github.com/bhail300/Entertainment-Spot' isExternal>Entertainment Spot</Link></p>
                </div>
                <h2>Meet the Developers</h2>
                <div className={styles.grid}>
                    {
                      aboutInfo && aboutInfo.map( (info, index) => {
                        return(
                        <div className={styles.card} key={index}>
                            <div className={styles.title}>
                                <h2>{info.name}</h2>
                            </div>
                            <div>
                                <h3>Role:</h3>
                                <p>{info.role_des}</p>
                            </div>
                            <div>
                                <h3>Portfolio site:</h3>
                                <p><Link color="text" href={`${info.portfolio_link}`} isExternal>{info.portfolio_link}</Link></p>
                            </div>
                            <div>
                                <h3>Github profile:</h3>
                                <p><Link color="text" href={`${info.github_link}`} isExternal>{info.github_link}</Link></p>
                            </div>
                            <div>
                                <h3>Bio:</h3>
                                <p>{info.bio_des}</p>
                            </div>
                        </div>
                        )
                      })
                    }
                </div>
            </div>
        </div>
    </>
    )
}