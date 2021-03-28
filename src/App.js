import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';

function App() {
	const [superhero, setSuperhero] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = superhero.length - 1;
		if(index < 0) {
			setIndex(lastIndex);
		}
		if(index > lastIndex) {
			setIndex(0);
		}
	}, [index, superhero]);

	useEffect(() => {
		let slider = setInterval(()=> {
			setIndex(index + 1);
		}, 7000);
		return () => clearInterval(slider);
	}, [index]);
	
	return (
		<section className='section'>
			<div className='title'>
				<h3 className='sub-title'>Marvel</h3>
				<h1>Avengers</h1>
			</div>
			<div className='section-center'>
				{
					superhero.map((hero, heroIndex) => {
						const {id, img, name, desc} = hero;

						let position = 'nextSlider';
						if(heroIndex === index) {
							position = 'activeSlide';
						}
						if(heroIndex === index - 1 || (index === 0 && heroIndex === superhero.length -1)) {
							position = 'lastSlider';
						}

						return (
							<article key={id} className={position}>
								<img src={img} alt={name} className='hero-img'/>
								<h4 className='hero-name'>{name}</h4>
								<p className='text'>{desc}</p>
							</article>
						);
					})
				}
				<button className='prev' onClick={()=> setIndex(index - 1)}>
          <FiChevronLeft/>
        </button>
        <button className='next' onClick={()=> setIndex(index + 1)}>
          <FiChevronRight/>
        </button>
			</div>
		</section>
	);
}

export default App;