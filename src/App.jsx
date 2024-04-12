import { useState } from 'react';
import { Logo } from './assets';
import { InputCard, OutputCard } from './components';
import { translate } from './services/action';

function App() {
	const [langActive, setLangActive] = useState('en');
	const [targetLang, setTargetLang] = useState('fr');
	const [textToTranslate, setTextToTranslate] = useState(
		'Hello, how are you?'
	);
	const [translatedText, setTranslatedText] = useState('Bonjour, comment vas-tu?');
	const [isLoading, setIsLoading] = useState(false);

	const onTextareaChange = e => {
		const newText = e.target.value;
		setTextToTranslate(newText);
		if (newText.length > 500) {
			setTextToTranslate(newText.substr(0, 500));
		} else {
			setTextToTranslate(newText);
		}
	};

	const onSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);

		const { responseData } = await translate(
			textToTranslate,
			`${langActive}|${targetLang}`
		);
		console.log(
			responseData,
			`---${textToTranslate}---${langActive}|${targetLang}`
		);

		setIsLoading(false);
		setTranslatedText(responseData.translatedText);
	};

	return (
		<div className='h-screen text-white p-[72px] bg-no-repeat bg-cover bg-center flex flex-col justify-center bg-custom-gradient max-sm:p-7'>
			<div className='container'>
				<div className='grid place-items-center mb-16'>
					<img src={Logo} alt='Logo' className='w-[200px] h-auto' />
				</div>

				{/* Cards de Traducción */}
				<div className='grid grid-cols-2 gap-[14px] max-lg:grid-cols-1'>
					<InputCard
						langActive={langActive}
						setLangActive={setLangActive}
						targetLang={targetLang}
						setTargetLang={setTargetLang}
						className={'bg-grayTransparentPrimary'}
						textToTranslate={textToTranslate}
						isLoading={isLoading}
						// Form Events
						onChange={onTextareaChange}
						onSubmit={onSubmit}
					/>
					<OutputCard
						langActive={langActive}
						setLangActive={setLangActive}
						targetLang={targetLang}
						setTargetLang={setTargetLang}
						className={'bg-grayTransparentSecondary'}
						translatedText={translatedText}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
