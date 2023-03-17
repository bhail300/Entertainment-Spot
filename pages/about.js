import styles from '../styles/About.module.css'
import Nav from '../comps/navbar'
import Image from 'next/image'
import aboutInfo from '../data/about.json'
import Link from 'next/link'

export default function About() {
    return(
        <div className={styles.container}>
            <div>
                <Nav/>
                <h1>About</h1>
                <div className={styles.description}>
                    <h3>App description:</h3>
                    <p>Entertainment Spot is an application that can help you find your next favorite movie or video game. This application was built using the Next.js framework and axios is being used to pull data from two separate APIs.</p>

                    <h3>APIs used:</h3>
                    <p><Link href='https://rawg.io/apidocs'>RAWG Video Games Database API</Link>, <Link href='https://www.omdbapi.com/'>OMDb API</Link></p>
                    <h3>UI Library:</h3>
                    <p><Link href='https://nextui.org/'>Next UI</Link></p>
                    <h3>App development start date:</h3>
                    <p>January 17, 2023</p>
                    <h3>App development finish date:</h3>
                    <p>Ongoing</p>
                    <h3>Github link:</h3>
                    <p> <a href='https://github.com/bhail300/Entertainment-Spot'>Entertainment Spot</a></p>
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
                                <Image
                                src={info.img}
                                alt="favicon"
                                width='100'
                                height='100'
                                />
                                <p>image goes here</p>
                            </div>
                            <div>
                                <h3>Role:</h3>
                                <p>{info.role_des}</p>
                            </div>
                            <div>
                                <h3>Portfolio site:</h3>
                                <p><Link href={`${info.portfolio_link}`}>{info.portfolio_link}</Link></p>
                            </div>
                            <div>
                                <h3>Github profile:</h3>
                                <p><Link href={`${info.github_link}`}>{info.github_link}</Link></p>
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
    )
}