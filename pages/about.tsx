import React, { ReactNode } from 'react';
import Link from 'next/link';

class About extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div>
                <h1>Sobre</h1>
                <Link href="/"><a>Voltar para Home</a></Link>
            </div>
        )
    }
}

export default About;