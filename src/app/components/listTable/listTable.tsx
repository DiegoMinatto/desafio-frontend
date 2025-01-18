"use client";

import * as React from "react";
import styles from "./listTable.module.css";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { IoCaretBack } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";
import { useEffect, useState } from "react";

interface iTableData {
  id: number;
  year: number;
  title: string;
  winner: boolean;
}

export interface iChangeProps {
  year: string;
  winner: string;
  pagina: number;
}

interface iProps {
  dataLen: number;
  data: iTableData[];
  onChange: (data: iChangeProps) => void;
}

export default function ListTable(props: iProps) {
  const [pagina, setPagina] = useState<number>(0);
  const [len, setLen] = useState<number>(props.dataLen);

  const [year, setYear] = useState<string>("");
  const [winner, setWinner] = useState<string>("");

  const trocaPagina = (pagina: number) => {
    setPagina(pagina);
  };

  useEffect(() => {
    props.onChange({ pagina, year, winner });
  }, [pagina, year, winner]);

  return (
    <div className={styles.containerTable}>
      <div className={styles.WrpTable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">
                <div className={styles.thContainer}>
                  <span>Year</span>
                  <div className={styles.ContainerInput}>
                    <input
                      type="number"
                      onChange={(evt) => setYear(evt.target.value)}
                      placeholder="Search by year"
                    ></input>
                  </div>
                </div>
              </th>
              <th scope="col"> Tittle</th>
              <th scope="col">
                <div className={styles.thContainer}>
                  <span>Winner?</span>

                  <div className={styles.ContainerInput}>
                    <select
                      onChange={(evt) => {
                        setWinner(evt.target.value);
                      }}
                    >
                      <option value="">Yes/No</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((value: iTableData) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.year}</td>
                  <td>{value.title}</td>

                  <td>{value.winner ? "yes" : "no"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.wrpPaginacao}>
        <div
          onClick={() => {
            trocaPagina(0);
          }}
          className={styles.ContainerButton}
        >
          <FaStepBackward color="#848587" size={15} />
        </div>

        <div
          onClick={() => {
            if (pagina - 1 > -1) trocaPagina(pagina - 1);
          }}
          className={styles.ContainerButton}
        >
          <IoCaretBack color="#848587" size={15} />
        </div>

        {pagina < Math.ceil(len / 10) - 3 ? (
          <>
            <div
              is-active={pagina < Math.ceil(len / 10) - 3 ? "true" : "false"}
              className={styles.ContainerButton}
            >
              <span>{pagina + 1}</span>
            </div>

            <div
              onClick={() => {
                trocaPagina(pagina + 1);
              }}
              className={styles.ContainerButton}
            >
              <span>{pagina + 2}</span>
            </div>

            <div
              onClick={() => {
                trocaPagina(pagina + 2);
              }}
              className={styles.ContainerButton}
            >
              <span>{pagina + 3}</span>
            </div>

            <div
              onClick={() => {
                trocaPagina(pagina + 3);
              }}
              className={styles.ContainerButton}
            >
              <span>{pagina + 4}</span>
            </div>

            <div
              onClick={() => {
                trocaPagina(pagina + 4);
              }}
              className={styles.ContainerButton}
            >
              <span>{pagina + 5}</span>
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => {
                trocaPagina(Math.ceil(len / 10) - 5);
              }}
              className={styles.ContainerButton}
            >
              <span>{Math.ceil(len / 10) - 5}</span>
            </div>

            <div
              onClick={() => {
                trocaPagina(Math.ceil(len / 10) - 4);
              }}
              is-active={pagina === Math.ceil(len / 10) - 4 ? "true" : "false"}
              className={styles.ContainerButton}
            >
              <span>{Math.ceil(len / 10) - 4}</span>
            </div>

            <div
              onClick={() => {
                trocaPagina(Math.ceil(len / 10) - 3);
              }}
              is-active={pagina === Math.ceil(len / 10) - 3 ? "true" : "false"}
              className={styles.ContainerButton}
            >
              <span>{Math.ceil(len / 10) - 3}</span>
            </div>

            <div
              onClick={() => {
                trocaPagina(Math.ceil(len / 10) - 2);
              }}
              is-active={pagina === Math.ceil(len / 10) - 2 ? "true" : "false"}
              className={styles.ContainerButton}
            >
              <span>{Math.ceil(len / 10) - 2}</span>
            </div>

            <div
              onClick={() => {
                trocaPagina(Math.ceil(len / 10) - 1);
              }}
              is-active={pagina === Math.ceil(len / 10) - 1 ? "true" : "false"}
              className={styles.ContainerButton}
            >
              <span>{Math.ceil(len / 10) - 1}</span>
            </div>
          </>
        )}

        <div
          onClick={() => {
            if (Math.ceil(len / 10) - 1 >= pagina + 1) trocaPagina(pagina + 1);
          }}
          className={styles.ContainerButton}
        >
          <IoCaretForward color="#848587" size={15} />
        </div>

        <div
          onClick={() => {
            trocaPagina(Math.ceil(len / 10) - 1);
          }}
          className={styles.ContainerButton}
        >
          <FaStepForward color="#848587" size={15} />
        </div>
      </div>
    </div>
  );
}
