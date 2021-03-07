import React, { ReactNode } from 'react';
import Parent from '../../components/parent';

class Me extends React.Component {
  constructor(props: any) {
    super(props);
  }

	render(): ReactNode {
		return (
			<Parent>
				<h1 className="text-4xl font-thin">E quem sou eu?</h1>
				<p>Melhor do que me descrever, vou deixar você saber do que eu gosto!</p>
				<p>Tire suas próprias conclusões...</p>
				<div className="mt-3 border-t border-gray-500"></div>

				<h2 className="text-2xl font-thin mt-5">
					Minhas músicas preferidas:
				</h2>
				<small>
					Faça login na	<a href="https://www.deezer.com/" target="blank" className="underline">Deezer</a> para ouvir as músicas completas.</small>
				<iframe
					className="w-full h-96 mt-4"
					scrolling="no"
					src="https://www.deezer.com/plugins/player?
						format=classic&
						autoplay=false&
						playlist=true&
						color=EF5466&
						layout=dark&s
						ize=medium&
						type=playlist&
						id=1391081587">
				</iframe>
			</Parent>
		)
	}
}

export default Me;