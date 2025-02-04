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
  page: number;
}

interface iProps {
  dataLen: number;
  data: iTableData[];
  onChange: (data: iChangeProps) => void;
}

export default function ListTable(props: iProps) {
  const [page, setpage] = useState<number>(0);
  const [len, setLen] = useState<number>(0);

  const [year, setYear] = useState<string>("");
  const [winner, setWinner] = useState<string>("");

  const trocapage = (page: number) => {
    setpage(page);
  };

  useEffect(() => {
    setLen(props.dataLen)
  }, [props.dataLen])

  useEffect(() => {

    props.onChange({ page, year, winner });
    setpage(0);

  }, [ year, winner]);


  useEffect(() => {

    props.onChange({ page, year, winner });
  

  }, [page]);

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
      <div className={styles.wrppagecao}>
        <div
          onClick={() => {
            trocapage(0);
          }}
          className={styles.ContainerButton}
        >
          <FaStepBackward color="#848587" size={15} />
        </div>

        <div
          onClick={() => {
            if (page - 1 > -1) trocapage(page - 1);
          }}
          className={styles.ContainerButton}
        >
          <IoCaretBack color="#848587" size={15} />
        </div>

        {page < Math.ceil(len / 10) - 4 ? (
          <>
            <div
              is-active={page < Math.ceil(len / 10) - 3 ? "true" : "false"}
              className={styles.ContainerButton}
            >
              <span>{page + 1}</span>
            </div>

            <div
              onClick={() => {
                trocapage(page + 1);
              }}
              className={styles.ContainerButton}
            >
              <span>{page + 2}</span>
            </div>

            <div
              onClick={() => {
                trocapage(page + 2);
              }}
              className={styles.ContainerButton}
            >
              <span>{page + 3}</span>
            </div>

            <div
              onClick={() => {
                trocapage(page + 3);
              }}
              className={styles.ContainerButton}
            >
              <span>{page + 4}</span>
            </div>

            <div
              onClick={() => {
                trocapage(page + 4);
              }}
              className={styles.ContainerButton}
            >
              <span>{page + 5}</span>
            </div>
          </>
        ) : (
          <>


            {(Math.ceil(len / 10) - 4) > 0 ?

              <div
                onClick={() => {
                  trocapage(Math.ceil(len / 10) - 5);
                }}
                className={styles.ContainerButton}
                is-active={page === Math.ceil(len / 10) - 5 ? "true" : "false"}
              >
                
                <span>{Math.ceil(len / 10) - 4}</span>
              </div>

              : null}

            {(Math.ceil(len / 10) - 3) > 0 ?
              <div
                onClick={() => {
                  trocapage(Math.ceil(len / 10) - 4);
                }}
                is-active={page === Math.ceil(len / 10) - 4 ? "true" : "false"}
                className={styles.ContainerButton}
              >
                <span>{Math.ceil(len / 10) - 3}</span>
              </div>
              : null}

            {(Math.ceil(len / 10) - 2) > 0 ?
              <div
                onClick={() => {
                  trocapage(Math.ceil(len / 10) - 3);
                }}
                is-active={page === Math.ceil(len / 10) - 3 ? "true" : "false"}
                className={styles.ContainerButton}
              >
                <span>{Math.ceil(len / 10) - 2}</span>
              </div>
              : null}
            {(Math.ceil(len / 10) - 1) > 0 ?
              <div
                onClick={() => {
                  trocapage(Math.ceil(len / 10) - 2);
                }}
                is-active={page === Math.ceil(len / 10) - 2 ? "true" : "false"}
                className={styles.ContainerButton}
              >
                <span>{Math.ceil(len / 10) - 1}</span>
              </div>
              : null}

            <div
              onClick={() => {
                trocapage(Math.ceil(len / 10) - 1);
              }}
              is-active={page === Math.ceil(len / 10) - 1 ? "true" : "false"}
              className={styles.ContainerButton}
            >
              <span>{Math.ceil(len / 10)}</span>
            </div>
          </>
        )}

        <div
          onClick={() => {
            if (Math.ceil(len / 10) - 1 >= page + 1) trocapage(page + 1);
          }}
          className={styles.ContainerButton}
        >
          <IoCaretForward color="#848587" size={15} />
        </div>

        <div
          onClick={() => {
            trocapage(Math.ceil(len / 10) - 1);
          }}
          className={styles.ContainerButton}
        >
          <FaStepForward color="#848587" size={15} />
        </div>
      </div>
    </div>
  );
}
