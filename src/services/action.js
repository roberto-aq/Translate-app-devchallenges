export const translate = async (text, language) => {
	try {
		const response = await fetch(
			`https://api.mymemory.translated.net/get?q=${text}&langpair=${language}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		throw new Error('Algo salió mal');
	}
};
