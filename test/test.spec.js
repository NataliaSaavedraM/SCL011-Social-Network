 import {
	loginemail,
	userGoogle,
	userFacebook,
	closeSession
} from "../src/assets/js/auth.js"
import {
	validateUserInput,
	validateRecordInput
	}from '../src/assets/js/validate.js'





describe("Es una funcion", () => {
	it("loginemail debe ser una funcion", () => {
		expect(loginemail().toBe(true));
	});
});

describe("Es una funcion", () => {
	it("userGoogle debe ser una funcion", () => {
		expect(userGoogle().toBe(true));
	});
});

describe("Es una funcion", () => {
	it("userFacebook debe ser una funcion", () => {
		expect(userFacebook().toBe(true));
	});
});
describe("Es una funcion", () => {
	it("closeSession debe ser una funcion", () => {
		expect(closeSession().toBe(true));
	});
});
 

describe("Es una funcion", () => {
	it("Deberia retornar true para campos vacios" ,()=>{
        expect(validateUserInput("pepito ","pepe@gmail.com ","")).toBe(true)
	});
});

describe("Es una funcion", () => {
	it("Deberia retornar true para campos vacios" ,()=>{
        expect(validateRecordInput("pepito ","pepe@gmail.com ","")).toBe(true)
	});
});