'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";


interface iYearsMultipleWinners {

  year: number
  winnerCount: number

}

interface iTopThree {

  name: string
  winCount: number

}

interface iWinIntervalProducer {

  producer: string
  interval: number
  previousWin: number
  followingWin: number


}

interface iMaxMinProducers {

  min: iWinIntervalProducer[]
  max: iWinIntervalProducer[]

}

interface iWinnersByYear {

  id: number
  year: number
  title: string
  studios: string[]
  producers: string[]
  winner: boolean

}



export default function Home() {

  const [yearsMultipleWinners, setYearsMultipleWinners] = useState<iYearsMultipleWinners[]>([]);
  const [topThree, setTopThree] = useState<iTopThree[]>([]);
  const [maxMinProducers, setMaxMinProducers] = useState<iMaxMinProducers>();
  const [winnersByYear, setWinnersByYear] = useState<iWinnersByYear[]>([]);

  const [year, setYear] = useState<string>("");


  const findYearsMultipleWinners = async () => {

    let fetchYearsMultipleWinners = await fetch(`https://challenge.outsera.tech/api/movies?projection=years-with-multiple-winners`)
    let dataYearsMultipleWinners = await fetchYearsMultipleWinners.json()

    setYearsMultipleWinners(dataYearsMultipleWinners.years);

  }


  const findTopThree = async () => {

    let fetchTopThree = await fetch(`https://challenge.outsera.tech/api/movies?projection=studios-with-win-count`)
    let dataTopThree = await fetchTopThree.json()
    setTopThree(dataTopThree.studios);

  }

  const findMaxMinProducers = async () => {

    let fetchMaxMinProducers = await fetch(`https://challenge.outsera.tech/api/movies?projection=max-min-win-interval-for-producers`)
    let dataMaxMinProducers = await fetchMaxMinProducers.json()
    setMaxMinProducers(dataMaxMinProducers);

  }


  const findWinnersByYear = async (year: string) => {

    if (year) {
      const params = new URLSearchParams();
      params.append("year", `${year}`);
      let fetchWinnersByYear = await fetch(`https://challenge.outsera.tech/api/movies?winner=true&${params.toString()}`)
      let dataWinnersByYear = await fetchWinnersByYear.json()
      setWinnersByYear(dataWinnersByYear);
    } else {
      setWinnersByYear([])
    }

  }





  useEffect(() => {

    findYearsMultipleWinners();
    findTopThree();
    findMaxMinProducers();

  }, [])


  return (




    <div className={styles.containerContent}>
      <div className={styles.cardTable}>
        <div className={styles.cardLabel}>
          <h3>List years with multiple winners</h3>
        </div>
        <div className={styles.cardTableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Win Count</th>
              </tr>
            </thead>
            <tbody>


              {yearsMultipleWinners.map((values, idx) => {
                return <tr key={idx}>
                  <td>{values.year}</td>
                  <td>{values.winnerCount}</td>
                </tr>
              })}



            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.cardTable}>
        <div className={styles.cardLabel}>
          <h3>Top 3 studios with winners</h3>
        </div>

        <div className={styles.cardTableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Win Count</th>
              </tr>
            </thead>
            <tbody>



              {topThree.slice(0, 3).map((values, idx) => {
                return <tr key={idx}>
                  <td>{values.name}</td>
                  <td>{values.winCount}</td>
                </tr>
              })}



            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.cardTable}>
        <div className={styles.cardLabel}>
          <h3>
            Producers with longest and shortest interval between wins
          </h3>
        </div>

        <div className={styles.cardTableWrap}>
          <h4>Maximum</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Producer</th>
                <th scope="col">Interval</th>
                <th scope="col">Previous Year</th>
                <th scope="col">Following Year</th>
              </tr>
            </thead>
            <tbody>
              {maxMinProducers?.max.map((values, idx) => {
                return <tr key={idx}>
                  <td>{values.producer}</td>
                  <td>{values.interval}</td>
                  <td>{values.previousWin}</td>
                  <td>{values.followingWin}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.cardTableWrap}>
          <h4>Minimum</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Producer</th>
                <th scope="col">Interval</th>
                <th scope="col">Previous Year</th>
                <th scope="col">Following Year</th>
              </tr>
            </thead>
            <tbody>
              {maxMinProducers?.min.map((values, idx) => {
                return <tr key={idx}>
                  <td>{values.producer}</td>
                  <td>{values.interval}</td>
                  <td>{values.previousWin}</td>
                  <td>{values.followingWin}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.cardTable}>
        <div className={styles.cardLabel}>
          <h3>List movie Winners by year</h3>
        </div>

        <div className={styles.ContainerForm}>
          <div className={styles.ContainerInput}>
            <input onChange={(evt) => { setYear(evt.target.value) }} value={year} type="number" placeholder="Search by year"></input>
          </div>
          <div onClick={() => {findWinnersByYear(year)}} className={styles.ContainerButton}>
            <FaMagnifyingGlass color="white" size={15} />
          </div>
        </div>

        <div className={styles.cardTableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Year</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>

              {winnersByYear.map((values, idx) => {
                return <tr key={idx}>
                  <td>{values.id}</td>
                  <td>{values.year}</td>
                  <td>{values.title}</td>
                </tr>
              })}

            </tbody>
          </table>
        </div>
      </div>
    </div>




  );
}
