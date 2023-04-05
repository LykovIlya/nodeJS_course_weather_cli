import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import { printError } from "./log.service.js";


const getWeather = async (city) => {
	const token = await getKeyValue(TOKEN_DICTIONARY.token);
	if (!token) {
		throw new Error("Не задан ключ API, задайте его через команду -t [API-KEY].");
	}
	// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${}`;
	const url = new URL(`https://api.openweathermap.org/data/2.5/weather`);
	url.searchParams.append("q", city);
	url.searchParams.append("appid", token);
	url.searchParams.append("lang", "ru");
	url.searchParams.append("units", "metric");

	https.get(url, (response) => {
		let result = "";
		response.on("data", (chunk) => {
			result += chunk;
		});
		response.on("end", () => {
			console.log(result);
		});
		response.on("error", (error) => {
			printError(error);
		});

	});
};

export { getWeather };