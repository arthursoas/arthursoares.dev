import React, { ReactNode, Component } from 'react';
import Parent from '../components/parent';

class Home extends Component {
	endLanding: HTMLElement;

	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		this.endLanding = document.getElementById('endLanding');
	}

	render(): ReactNode {
		return (
			<Parent>
				<div>
					<div className="min-h-screen-except-nav flex flex-col justify-center items-center">
						<p className="text-center">Made with ❤ by</p>
						<h1 className="text-6xl font-thin text-center">Arthur Soares</h1>
						<div className="flex justify-center">
							<img src="/images/arrow-down.svg" className="animate-pulse h-16 mt-3 cursor-pointer"
								onClick={() => {
									this.endLanding.scrollIntoView({
										behavior: 'smooth'
									})
								}}/>
						</div>
					</div>
					<div id="endLanding" className="min-h-screen-except-nav">
						<div className="pt-3 flex">
							<h2 className="text-2xl font-extralight">"</h2>
							<h2 className="text-2xl font-extralight">
								Não há tal coisa como a perfeição. Este mundo não é perfeito e,
								por isso, ele é lindo."
							</h2>
						</div>
						<p className="ml-2">Roy Mustang</p>
						<br/>
						<br/>
						<div className="max-w-xl mb-10">
							<p className="text-xl">Sou Arthur,</p>
							<p>
								dev de formação e carreira.
								Atualmente trabalho com foco em backend e algumas experiências em
								front.
							</p>
							<p className="mt-2">
								Demorei quase 1 hora para fazer o efeito de scroll dessa página.
								Se você não viu, volta lá no início e clica na setinha que tá
								piscando.
							</p>
							<p className="mt-2">
								Leve preferência para linguagens fortemente tipadas.
							</p>
							<p className="mt-2">
								Ainda não sei o que vou colocar nessa página, então fique
								aqui com as linguagens que já trabalhei:
							</p>
						</div>
						<div className="flex">
							<div className="flex items-center flex-col mr-10">
								<img src="/images/c-sharp.svg" className="h-16"></img>
								<p>C#</p>
							</div>
							<div className="flex items-center flex-col mr-10">
								<img src="/images/ruby.svg" className="h-16"></img>
								<p>Ruby</p>
							</div>
							<div className="flex items-center flex-col mr-10">
								<img src="/images/nodejs.svg" className="h-16"></img>
								<p>Node JS</p>
							</div>
						</div>
					</div>
				</div>
			</Parent>
		)
	}
}

export default Home;