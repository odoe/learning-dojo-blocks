const { resolve } = require('path');
const { v } = require('@dojo/framework/widget-core/d');
const sharp = require('sharp');

export default async function(path: string) {
	path = resolve(__dirname, path);

	const images = [
		await sharp(path).resize(200).toBuffer(),
		await sharp(path).resize(300).toBuffer(),
		await sharp(path).resize(400).toBuffer(),
		await sharp(path).resize(500).toBuffer()
	];

	return images.map((a) => v('img', { src: `data:image/jpeg;base64, ${a.toString('base64')}`, alt: 'my pic' }));
}
