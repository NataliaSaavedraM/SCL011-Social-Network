import {
	createUser,
	loginemail,
	userGoogle,
	userFacebook,
	closeSession
} from "./../src/assets/js/auth.js";

describe("Es una funcion", () => {
	it("createUser debe ser una funcion", () => {
		expext(createUser().toBe(true));
	});
});

describe("Es una funcion", () => {
	it("loginemail debe ser una funcion", () => {
		expext(loginemail().toBe(true));
	});
});

describe("Es una funcion", () => {
	it("userGoogle debe ser una funcion", () => {
		expext(userGoogle().toBe(true));
	});
});

describe("Es una funcion", () => {
	it("userFacebook debe ser una funcion", () => {
		expext(userFacebook().toBe(true));
	});
});
describe("Es una funcion", () => {
	it("closeSession debe ser una funcion", () => {
		expext(closeSession().toBe(true));
	});
});