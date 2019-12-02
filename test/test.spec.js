import {
	loginemail,
	userGoogle,
	userFacebook,
	closeSession
} from "../src/assets/js/auth.js";
import {
	validatedUserInput,
	validatedRecordInput
	}from '../src/assets/js/validate.js'

const chai = require('chai');



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


describe("Es una funcion", () => {
	it("Deberia retornar true para campos vacios" ,()=>{
        expect(validatedUserInput("pepito ","pepe@gmail.com ","")).toBe(true)
	});
});

describe("Es una funcion", () => {
	it("Deberia retornar true para campos vacios" ,()=>{
        expect(validatedRecordInput("pepito ","pepe@gmail.com ","")).toBe(true)
	});
});