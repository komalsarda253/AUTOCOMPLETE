import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';
import "./App.css";

const Auto = () => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:4000/getDetails/' + search)
      .then((response) => {
        // console.log(response.data)
        setResult(response.data)
      }).catch(error => {
        setResult("")
      })
  }, [search]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm"
            id="auto"
            onClick={() => setDisplay(!display)}
            placeholder="What are you looking for?"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
          <button type="submit" className="searchButton"><SearchIcon style={{paddingBottom:"5px"}}></SearchIcon>
          </button>
        </div>
      </div>
      {result ? (
        <div style={{paddingTop:"50px"}}>
          <table className="table table-dark table-bordered" >
            <thead className="thead-light">
              <tr>
                <th scope="col">Restaurant Name</th>
                <th scope="col">Location</th>
                <th scope="col">Food Items</th>
              </tr>
            </thead>
            {result.map((data,i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td key={data.name}>{data.name}</td>
                    <td key={data.address}>{data.address}</td>
                    <td>{data.items.map((data,k) => {
                      return (

                        <ul key={k}>{data}</ul>
                      )
                    })}</td>
                  </tr>
                </tbody>
              )
            })}
          </table>
        </div>
      ): null
      }
    </div>

  );
};

function App() {
  return (
    <div className="App">
      <h2>AutoComplete React</h2>
      <div className="logo"></div>
      <div className="auto-container">
        <Auto />
      </div>
    </div>
  );
}

export default App;