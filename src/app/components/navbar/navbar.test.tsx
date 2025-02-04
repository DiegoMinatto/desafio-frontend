import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AppNavbar from "./navbar";

describe("Navbar", () => {

  it("renders", () => {
    render(<AppNavbar />);
  });


  it('renders a heading', () => {
    render(<AppNavbar />)

    const heading = screen.getByRole('heading', { level: 3 })

    expect(heading).toBeInTheDocument()
  })

  it("render app name", () => {
    render(<AppNavbar />)
    expect(screen.getByText("Frontend React Test")).toBeInTheDocument();
  });

});



