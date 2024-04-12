import { franc } from 'franc';
import { HorizontalTop } from '../assets';
import { languages } from '../helpers/languages';
import { ButtonIcon } from './ButtonIcon';

export const HeaderCard = ({
	langActive,
	setLangActive,
	targetLang,
	setTargetLang,
	isResultTranslate = false,
	textInput = '',
}) => {
	const handleTradeLang = () => {
		setLangActive(targetLang);
		setTargetLang(langActive);
	};

	const handleDetectLanguage = () => {
		if (textInput.length < 1) return;

		const langCode = franc(textInput);
	};

	return (
		<div className='flex items-center gap-6 border-b pb-4 border-lightSecondary'>
			{isResultTranslate ? (
				// OUTPUT CARD
				<>
					{languages.slice(0, 3).map(language => (
						<button
							className={`text-sm py-2 px-4 rounded-xl ${
								language.code === targetLang ? 'bg-graySecondary' : ''
							}`}
							key={language.code}
							onClick={() => {
								if (language.code === langActive) {
									handleTradeLang();
								}
								setTargetLang(language.code);
							}}
						>
							{language.name}
						</button>
					))}
					<div className='flex justify-end flex-1'>
						<ButtonIcon
							img={HorizontalTop}
							alt='Trade Language'
							onClick={handleTradeLang}
						/>
					</div>
				</>
			) : (
				// INPUT CARD
				<>
					<button className='' onClick={handleDetectLanguage}>
						Detect Language
					</button>
					{languages.slice(0, 3).map(language => (
						<button
							className={`text-sm py-2 px-4 rounded-xl ${
								language.code === langActive ? 'bg-graySecondary' : ''
							}`}
							key={language.code}
							onClick={() => {
								if (language.code === targetLang) {
									handleTradeLang();
								}
								setLangActive(language.code);
							}}
						>
							{language.name}
						</button>
					))}
				</>
			)}
		</div>
	);
};
