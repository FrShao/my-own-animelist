import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET
});

export async function uploadImage(file) {
	/*
	// Sauvegarde locale
	await fs.writeFile(`./uploads/${file.name}`, file.stream());
	*/
  	const buffer = Buffer.from(await file.arrayBuffer());
	
	return new Promise((resolve, reject) => { 
		cloudinary.uploader.upload_stream(
			{resource_type: 'image', folder: process.env.CLOUD_FOLDER}, async function(error, result) {
				if (result) {
					resolve(result);
				} else {
					reject(error);
				}
			})
		.end(buffer);
	});
}

export async function deleteImage(publicId) {
	return new Promise((resolve, reject) => { 
		cloudinary.uploader.destroy(publicId, function(error,result) {
			if (result) {
				resolve(result);
			} else {
				reject(error);
			}
		});
	});
}
