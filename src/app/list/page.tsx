'use client'
import Image from "next/image";
import styles from "./page.module.css";

import { useEffect, useState } from "react";
import ListTable, { iChangeProps } from "../components/listTable/listTable";

interface iTableData {
  id: number;
  year: number;
  title: string;
  winner: boolean;
}

export default function list() {

  
  const [len, setLen] = useState<number>(100);
  const [tableData, setTableData] = useState<iTableData[]>([])

  const buscaDados = async (pagina: number, year: string, winner: string) => {

    const params = new URLSearchParams();

    params.append("page", `${pagina}`);
    params.append("size", "10");
    if (winner)
      params.append("winner", winner);
    if (year)
      params.append("year", year);
    let data = await fetch(`https://challenge.outsera.tech/api/movies?${params.toString()}`)
    let posts = await data.json()

    setLen(posts.totalElements)
    setTableData(posts.content)

    



  }



  return (



    <ListTable data={tableData} dataLen={len} onChange={(values: iChangeProps) => {buscaDados(values.pagina, values.year, values.winner)}}  />
  );
}
