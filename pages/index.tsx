import type {NextPage} from 'next'
import Head from 'next/head'
import Body from '../components/body';
import Header from "../components/header";
import { Poppins } from '@next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:['300','400','500','600','700'] });

const Home: NextPage = () => {
    return (
        <div className={poppins.className}>
            <Head>
                <title>media! - share your awesome photo & videos!</title>
                <meta name="description" content="media template made by Yefee!"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Nothing+You+Could+Do&display=swap"
                    rel="stylesheet"/>
            </Head>

            <Header/>

            <Body/>
        </div>
    )
}

export default Home;
