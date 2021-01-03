import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

class Home extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div>
                <Head>
                    <title>Arthur Soares</title>
                    <meta name="yandex-verification" content="2df1c6057b357520" />
                </Head>
                <h1>Home</h1>
                <Link href="/about"><a>Ir para sobre</a></Link>
            </div>
        )
    }
}

export default Home;