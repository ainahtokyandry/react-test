const API_URL = "https://api.foursquare.com/v3/places/";
const FOURSQUARE_AUTH = process.env.REACT_APP_API_KEY;

const get = async (url: string): Promise<any> => {
	const query = await fetch(`${API_URL}${url}`, {
		headers: { Authorization: FOURSQUARE_AUTH || "" },
	});
	return await query.json();
};

export { get };
