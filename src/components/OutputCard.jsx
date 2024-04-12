import { SortAlfa } from '../assets';
import { ButtonsFooter } from './ButtonsFooter';
import { HeaderCard } from './HeaderCard';

export const OutputCard = ({
	langActive,
	setLangActive,
	targetLang,
	setTargetLang,
	className,
	translatedText,
}) => {
	return (
		<div
			className={`${className} rounded-xl h-[350px] p-7 flex flex-col gap-5 border border-graySecondary`}
		>
			<HeaderCard
				langActive={langActive}
				setLangActive={setLangActive}
				targetLang={targetLang}
				setTargetLang={setTargetLang}
				isResultTranslate={true}
			/>
			<form className='h-full flex flex-col gap-3'>
				<div className='relative h-full'>
					<textarea
						className='w-full bg-transparent border-none focus:outline-none resize-none text-white font-bold h-full'
						disabled
						value={translatedText}
					></textarea>
				</div>

				<div className='flex justify-between items-center mt-3'>
					<ButtonsFooter text={translatedText} />
				</div>
			</form>
		</div>
	);
};
