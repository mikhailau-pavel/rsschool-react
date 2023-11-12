import React from "react";
import {jest, expect, test, describe, beforeEach, afterEach} from '@jest/globals'
import ShallowRenderer from "react-test-renderer/shallow";

import Results from "../src/Components/Results/Results";


window.React = React;
let realUseContext;
let useContextMock;

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});

afterEach(() => {
  React.useContext = realUseContext;
});



const contextValue = {
  planets: [
		{
			"name": "Tatooine",
			"rotation_period": "23",
			"orbital_period": "304",
			"diameter": "10465",
			"climate": "arid",
			"gravity": "1 standard",
			"terrain": "desert",
			"surface_water": "1",
			"population": "200000",
			"residents": [
				"https://swapi.dev/api/people/1/",
				"https://swapi.dev/api/people/2/",
				"https://swapi.dev/api/people/4/",
				"https://swapi.dev/api/people/6/",
				"https://swapi.dev/api/people/7/",
				"https://swapi.dev/api/people/8/",
				"https://swapi.dev/api/people/9/",
				"https://swapi.dev/api/people/11/",
				"https://swapi.dev/api/people/43/",
				"https://swapi.dev/api/people/62/"
			],
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/4/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"created": "2014-12-09T13:50:49.641000Z",
			"edited": "2014-12-20T20:58:18.411000Z",
			"url": "https://swapi.dev/api/planets/1/"
		},
    {
			"name": "Tatooine",
			"rotation_period": "23",
			"orbital_period": "304",
			"diameter": "10465",
			"climate": "arid",
			"gravity": "1 standard",
			"terrain": "desert",
			"surface_water": "1",
			"population": "200000",
			"residents": [
				"https://swapi.dev/api/people/1/",
				"https://swapi.dev/api/people/2/",
				"https://swapi.dev/api/people/4/",
				"https://swapi.dev/api/people/6/",
				"https://swapi.dev/api/people/7/",
				"https://swapi.dev/api/people/8/",
				"https://swapi.dev/api/people/9/",
				"https://swapi.dev/api/people/11/",
				"https://swapi.dev/api/people/43/",
				"https://swapi.dev/api/people/62/"
			],
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/4/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"created": "2014-12-09T13:50:49.641000Z",
			"edited": "2014-12-20T20:58:18.411000Z",
			"url": "https://swapi.dev/api/planets/1/"
		}
  ],
     setPlanets: jest.fn()
  
};


describe("test for cards render", () => {



  test("check final number of cards equal to results", async () => {

    useContextMock.mockReturnValue(contextValue);
    const element = new ShallowRenderer().render(
      <Results isLoad={false}onNextPageClick={jest.fn()} onPrevPageClick={jest.fn()} disable={{
        left: false,
        right: false
      }} setPanelAppear={jest.fn()} page={"1"}  />,
    )


    expect(element.props.children[1].length).toBe(2)
  })
})

