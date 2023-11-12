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
  planets: [],
  setPlanets: jest.fn() 
};


describe("test for cards render", () => {



  test("check final number of cards equal to results", async () => {

    useContextMock.mockReturnValue(contextValue);
    const element = new ShallowRenderer().render(
      <Results isLoad={false} onNextPageClick={jest.fn()} onPrevPageClick={jest.fn()} disable={{
        left: false,
        right: false
      }} setPanelAppear={jest.fn()} page={"1"}  />,
    )
    expect(element.props.children[2]).toEqual(<p>no planets</p>)
  })
})

