import Link from 'next/link';
import React, { ReactNode } from 'react';

class FourHundredFour extends React.Component {
  constructor(props: any) {
    super(props);
  }

	render(): ReactNode {
		return (
			<div className="min-h-screen flex flex-col justify-center items-center">
				<h1 className="text-2xl font-extralight text-center">404</h1>
				<h1 className="text-2xl font-extralight text-center">
					🚧 Como você chegou aqui?
				</h1>
				<Link href={"/"}>
          <a className="text-center">Voltar para home</a>
        </Link>
			</div>
		)
	}
}

export default FourHundredFour;