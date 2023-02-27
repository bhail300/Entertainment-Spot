import styles from '../styles/About.module.css'
import Nav from '../comps/navbar'
import Image from 'next/image'
import aboutInfo from '../data/about.json'

export default function About() {
    return(
        <div className={styles.container}>
            <div>
                <Nav/>
                <h1>About</h1>
                <div className={styles.description}>
                    <h2>App description:</h2>
                    <p>Entertainment Spot was built using Next.js. Axios is used to pull data from two separate APIs.</p>
                    <h3>APIs used:</h3>
                    <p>RAWG Video Games Database API, OMDB API</p>
                    <h3>UI Library:</h3>
                    <p>Next UI</p>
                    <h3>App development start date:</h3>
                    <p>January 17, 2023</p>
                    <h3>App development finish date:</h3>
                    <p>Ongoing</p>
                    <h3>Github link:</h3>
                    <p> <a href='https://github.com/bhail300/Entertainment-Spot'>Entertainment Spot</a></p>
                </div>
                <h4>Meet the developers</h4>
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