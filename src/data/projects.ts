import indiamart from "../assets/indiamart-landing-page.png";
import fraazoClone from "../assets/fraazoClone.png";
import weatherApp from "../assets/weatherApp.png";
import arrayApp from "../assets/arrayApp.png";
import starwarsApp from "../assets/starwarsApp.png";
import todoTsx from "../assets/todoTsx.png";
import myHours from "../assets/myHoursLandingPage.png";
import chattingApp from "../assets/chattingApp.png";

type project = {
	image: string;
	title: string;
	description: string;
	projectLink: string;
	githubLink: string;
};

export const projects: project[] = [
	{
		image: chattingApp,
		title: "Basic Chatting App",
		description:
			"An app that lets you instantly broadcast messages to and receive messages from the users using the app... Chat history is retained even after you refresh or close the app.",
		githubLink: "https://github.com/shabh2412/basic-chatting-app",
		projectLink: "https://basic-chatting-app.herokuapp.com/",
	},
	{
		image: myHours,
		title: "My Hours Clone [Group Project]",
		description:
			"An app that lets you track your team members, clients, projects, and time taken for each project.",
		githubLink: "https://github.com/shabh2412/inconclusive-stop-6058",
		projectLink: "https://my-hourss.netlify.app/",
	},
	{
		image: todoTsx,
		title: "Todo App",
		description:
			"Simple Todo app that offers CRUD operations. Tech Stack used: Chakra UI, ReactJS, TypeScript, Redux, JSON Server.",
		projectLink: "https://todo-tsx.vercel.app/",
		githubLink: "",
	},
	{
		image: indiamart,
		title: "IndiaMART Clone [Group Project]",
		description:
			"This is a clone of e-commerce website named as IndiaMART. Users can search for products, view product details, place product request.",
		projectLink: "https://indiamart-clone-masai.netlify.app/",
		githubLink: "https://github.com/shabh2412/Indiamart-Clone",
	},
	{
		image: fraazoClone,
		title: "Fraazo Clone [Group Project]",
		description:
			"This is a clone of e-commerce website named as Fraazo. Users can buy groceries on this platform. Generates a random array of items and displays it in deal of the day section. Pages: Home Page, Products Listing Page, Product Details Page, User Detail Page, Cart, Checkout & Payment Page.",
		projectLink: "https://fraazo-clone.netlify.app/",
		githubLink: "https://github.com/shabh2412/Fraazo-Clone",
	},
	{
		image: weatherApp,
		title: "Weather App",
		description:
			"This app fetches the user's current location using GeoLocation API, and then uses the location data to fetch the current weather data via the Open Weather Map API. User can search weather data of any location by just typing the location name. Application uses debouncing to reduce the number of requests sent to the API.",
		projectLink: "https://shabh2412.github.io/Weather-APP-JS/",
		githubLink: "https://github.com/shabh2412/Weather-APP-JS",
	},
	{
		image: arrayApp,
		title: "Simple Array Visualiser",
		description:
			"I built this app when I was learning about Prototype, Objects, and stacks in javascript.The user can create an array, push items, pop items, print the array, print in the reversed order, check size of array, show the top element of the array.",
		projectLink: "https://stack-custom.netlify.app/",
		githubLink: "",
	},
	{
		image: starwarsApp,
		title: "Starwars Character Search App",
		description:
			"I built this app when I was learning about debouncing. It uses the SWAP Api to fetch data. User can search for a character, select the character from the results and view their details by clicking on the character name from the results.",
		projectLink: "https://star-wars-search-characters.netlify.app/",
		githubLink: "https://github.com/shabh2412/star-wars-character-search",
	},
];
