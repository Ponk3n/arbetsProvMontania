import React, { useState, useEffect } from "react";
import MontaniaAPIService from "./shared/api/service/MontaniaAPIService";
import './shared/global/global.css'

function App() {
  const [product, setProduct] = useState([])

  const fetchDataFromMontaniaAPI = async () => {
    try {
      const response = await MontaniaAPIService.getProduct()
      setProduct(response.data.results)
    }
    catch (error) {
      console.log(error)
    }
  }

  const displayMovieList = () => {
    const countingTitle = product.length;

    return <span className="item1">
      <table className="tableList">
        <caption>Number of movies: {countingTitle}</caption>
        <thead className="listHead">
          <tr>
            <th>Movie</th>
            <th>Year</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody className="listBody">
          {product.sort((a, b) => {
            a = a.title.toLowerCase();
            b = b.title.toLowerCase();

            return a < b ? -1 : a > b ? 1 : 0;
          })
            .map((items, i) => (
              <tr>
                <td key={i}>{items.title}</td>
                <td>{items.release_date}</td>
                <td>{items.director}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </span >
  }

  const highestAndLowestNumber = () => {
    const datesArray = product.sort((a, b) => {
      a = a.release_date
      b = b.release_date
      return a < b ? -1 : a > b ? 1 : 0;
    }).map(x => x.release_date)

    const firstMovie = datesArray[0]
    const latestMovie = datesArray[datesArray.length - 1]

    return <span className="item1">
      <h2>First movie: {firstMovie}</h2>
      <h2>Latest movie: {latestMovie}</h2>
    </span>
  }

  useEffect(() => {
    fetchDataFromMontaniaAPI();
  }, [])


  return (
    <div>
      <div className="navigationBarWrapper">
        <h1 className="title">Uppgift</h1>
      </div>
      <div className="container">
        {displayMovieList()}
      </div>
      <div className="container">
        {highestAndLowestNumber()}
      </div>
    </div>
  );
}

export default App;
