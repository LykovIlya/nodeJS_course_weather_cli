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

export { printError, printSuccess, printHelp };