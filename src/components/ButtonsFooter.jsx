import { useState } from 'react';
import { Clipboard, SoundMaxFill } from '../assets';
import { ButtonIcon } from './';

export const ButtonsFooter = ({ text = '' }) => {
	const [showCopyAlert, setShowCopyAlert] = useState(false);

	// Function to play the text as audio
	const handleAudio = () => {
		if (text.length < 1) return;

		const utterance = new SpeechSynthesisUtterance(text);
		speechSynthesis.speak(utterance);
	};

	// Function to copy the text to the clipboard
	const handleCopyClipboard = async () => {
		if (text.length < 1) return;

		await navigator.clipboard.writeText(text);
		setShowCopyAlert(true);
		setTimeout(() => {
			setShowCopyAlert(false);
		}, 2000);
	};

	return (
		<div className='flex gap-2 items-center'>
			{/* AUDIO */}
			<ButtonIcon
				img={SoundMaxFill}
				alt='Sound Svg'
				onClick={handleAudio}
			/>
			{/* CLIPBOARD */}
			<ButtonIcon
				img={Clipboard}
				alt='Clipboard Svg'
				onClick={handleCopyClipboard}
			/>

			{/* Alerta Copy Clipboard */}
			{showCopyAlert && (
				<div className='fixed bottom-10 left-1/2 bg-bluePrimary text-white px-4 py-2 rounded-md'>
					Copied to clipboard!
				</div>
			)}
		</div>
	);
};
