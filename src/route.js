import { templateLogin } from "./assets/views/templateLogin.js";
import { templateHome } from "./assets/views/templateHome.js";
import { templateRegister } from "./assets/views/templateRegister.js";
import { templateInitSection } from "./assets/views/templateInitSection.js";
/* hangeRouter llama a la función que carga cada template */
const changeRouter = hash => {
	if (hash === "") {
		return showTemplate("#/home");
	}
	if (hash === "#/home") {
		return showTemplate(hash);
	}
	if (hash === "#/login") {
		return showTemplate(hash);
	}
	if (hash === "#/register") {
		return showTemplate(hash);
	}
	if (hash === "#/initSection") {
		return showTemplate(hash);
	}
};

// imprimirá el template en el html
export const showTemplate = hash => {
	const router = hash.substring(2);
	const containerRoot = document.getElementById("root");
	containerRoot.innerHTML = "";

	//luego hacer un switch donde el parametro sea el route y analize los cada template
	switch (router) {
		case "home":
			//containerRoot.appendChild(templateHome());
			templateHome();
			break;
		case "login":
			//containerRoot.appendChild(templateLogin());
			templateLogin();
			break;
		case "register":
			//containerRoot.appendChild(templateRegister());
			templateRegister();

			break;
		case "initSection":
			//containerRoot.appendChild(templateInitSection());
			templateInitSection();
			break;
		default:
			containerRoot.innerHTML = `<p> Error 404 </p>`;
		//aqui deberia hacerse un template 404 explicando el error e indicandole al usuario que debe hacer
	}
};
/* initRouter es la función que 'escucha' los cambios de hash */
export const initRouter = () => {
	window.addEventListener("load", changeRouter(window.location.hash));

	// reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
	if ("onhashchange" in window) {
		window.onhashchange = () => {
			changeRouter(window.location.hash);
		};
	}
};
