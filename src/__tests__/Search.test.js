import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const { asFragment } = render(<Search setSearchResults={() => {}} />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
