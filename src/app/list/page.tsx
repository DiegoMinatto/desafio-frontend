'use client'

import { useState } from "react";
import ListTable, { iChangeProps } from "../components/listTable/listTable";
import { fetchData } from "../api/apiService";

interface iTableData {
  id: number;
  year: number;
  title: string;
  winner: boolean;
}

export default function list() {

  const [len, setLen] = useState<number>(1);
  const [tableData, setTableData] = useState<iTableData[]>([])

  const getData = async (page: number, year: string, winner: string) => {

    const params = new URLSearchParams();
    params.append("page", `${page}`);
    params.append("size", "10");
    if (winner)
      params.append("winner", winner);
    if (year)
      params.append("year", year);

    let posts = await fetchData<any>(params.toString());

    setLen(posts.totalElements)
    setTableData(posts.content)

  }

  return (
    <ListTable data={tableData} dataLen={len} onChange={(values: iChangeProps) => { getData(values.page, values.year, values.winner) }} />
  );
}
