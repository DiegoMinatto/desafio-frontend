import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AppSidebar from "./sidebar";

jest.mock('next/navigation', () => ({ usePathname: () => '/' }));

describe("Sidebar", () => {
  it("renders items", () => {
    render(<AppSidebar />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("List")).toBeInTheDocument();
  });

  it("applies is-selected attribute based on pathname", () => {
    render(<AppSidebar />);
    const dashboardLink = screen.getByText("Dashboard").closest('div');
    expect(dashboardLink).toHaveAttribute('is-selected', 'true');
  });


  
});
