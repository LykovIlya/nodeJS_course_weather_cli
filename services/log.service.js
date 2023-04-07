import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
	console.log(chalk.bgRed(" ERROR ") + ": " + error);
};

const printSuccess = (error) => {
	console.log(chalk.bgGreen(" SUCSESS ") + ": " + error);
};

const printHelp = () => {
	console.log(
		dedent(`${chalk.bgCyan(" HELP ")}
	${chalk.magenta(`Без параметров - вывод погоды
	- s [CITY] для уствновки города
	- h для вывода помощи
	- t [API_KEY] для сохранения токена`)}
	`));
};

const printWeather = (weather) => {
	const {
		weather: [{
			description
		}],
		main: {
			temp,
			temp_min,
			temp_max,
		},
		name
	} = weather;
	console.log(chalk.bgYellow(`${name}, погода:\n${description},\nТекущая температура: ${temp}C.\n`));
};

export { printError, printSuccess, printHelp, printWeather };