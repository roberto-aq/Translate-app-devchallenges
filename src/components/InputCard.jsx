import { SortAlfa } from '../assets';
import { ButtonsFooter, HeaderCard } from './';

export const InputCard = ({
	langActive,
	setLangActive,
	targetLang,
	setTargetLang,
	className,
	textToTranslate,
	isLoading,
	// Form Events
	onChange,
	onSubmit,
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
				textInput={textToTranslate}
			/>
			<form
				className='h-full flex flex-col gap-3'
				onSubmit={onSubmit}
			>
				<div className='relative h-full'>
					<textarea
						placeholder='Translate here'
						className='w-full bg-transparent border-none focus:outline-none resize-none text-white font-bold h-full'
						value={textToTranslate}
						onChange={onChange}
					></textarea>
					<span className='font-medium text-lightSecondary text-xs absolute right-5 -bottom-5'>
						{textToTranslate.length}/500
					</span>
				</div>

				<div className='flex justify-between items-center mt-3'>
					<ButtonsFooter text={textToTranslate} />
					<button
						type='submit'
						className={`${
							isLoading ? 'bg-blueSecondary' : 'bg-bluePrimary'
						} px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-bold`}
					>
						<img src={SortAlfa} alt='svg Translate' />
						{isLoading ? 'Translating...' : 'Translate'}
					</button>
				</div>
			</form>
		</div>
	);
};
