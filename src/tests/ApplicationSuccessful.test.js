import React from "react";
import ApplicationSuccessful from "../pages/ApplicationSuccessful";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import renderer from "react-test-renderer";

test("ApplicationSuccessful renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <ApplicationSuccessful />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
