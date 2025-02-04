import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import List from "./page";
import { mockFetch } from "./mock-fetch";
import data from "./data.json";
import ListTable from "../components/listTable/listTable";

const MockList = {
  content: [
    {
      id: 1,
      year: 1980,
      title: "Can't Stop the Music",
      studios: ["Associated Film Distribution"],
      producers: ["Allan Carr"],
      winner: true,
    },
    {
      id: 2,
      year: 1980,
      title: "Cruising",
      studios: ["Lorimar Productions", "United Artists"],
      producers: ["Jerry Weintraub"],
      winner: false,
    },
    {
      id: 3,
      year: 1980,
      title: "The Formula",
      studios: ["MGM", "United Artists"],
      producers: ["Steve Shagan"],
      winner: false,
    },
    {
      id: 4,
      year: 1980,
      title: "Friday the 13th",
      studios: ["Paramount Pictures"],
      producers: ["Sean S. Cunningham"],
      winner: false,
    },
    {
      id: 5,
      year: 1980,
      title: "The Nude Bomb",
      studios: ["Universal Studios"],
      producers: ["Jennings Lang"],
      winner: false,
    },
    {
      id: 6,
      year: 1980,
      title: "The Jazz Singer",
      studios: ["Associated Film Distribution"],
      producers: ["Jerry Leider"],
      winner: false,
    },
    {
      id: 7,
      year: 1980,
      title: "Raise the Titanic",
      studios: ["Associated Film Distribution"],
      producers: ["William Frye"],
      winner: false,
    },
    {
      id: 8,
      year: 1980,
      title: "Saturn 3",
      studios: ["Associated Film Distribution"],
      producers: ["Stanley Donen"],
      winner: false,
    },
    {
      id: 9,
      year: 1980,
      title: "Windows",
      studios: ["United Artists"],
      producers: ["Mike Lobell"],
      winner: false,
    },
    {
      id: 10,
      year: 1980,
      title: "Xanadu",
      studios: ["Universal Studios"],
      producers: ["Lawrence Gordon"],
      winner: false,
    },
  ],
  pageable: {
    sort: {
      unsorted: true,
      sorted: false,
      empty: true,
    },
    offset: 0,
    pageSize: 10,
    pageNumber: 0,
    unpaged: false,
    paged: true,
  },
  last: false,
  totalPages: 21,
  totalElements: 206,
  size: 10,
  number: 0,
  sort: {
    unsorted: true,
    sorted: false,
    empty: true,
  },
  first: true,
  numberOfElements: 10,
  empty: false,
};

describe("ListTable", () => {
  it("renders", () => {
    render(<ListTable data={MockList.content} dataLen={MockList.numberOfElements} onChange={() => { }} />);
  });


  it("renders table headings", () => {
    render(<ListTable data={MockList.content} dataLen={MockList.numberOfElements} onChange={() => { }} />);
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Year")).toBeInTheDocument();
    expect(screen.getByText("Tittle")).toBeInTheDocument();
    expect(screen.getByText("Winner?")).toBeInTheDocument();
  });



  it("render rows", () => {
    render(<ListTable data={MockList.content} dataLen={MockList.numberOfElements} onChange={() => { }} />);
    expect(screen.getByText("Can't Stop the Music")).toBeInTheDocument();
    expect(screen.getByText("Xanadu")).toBeInTheDocument();
  });

});



