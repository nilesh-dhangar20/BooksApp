import React, { useEffect, useState } from "react";
import "./Table.css"
const Table = () => {
  const [tabledata, settabledata] = useState([]);
  const [search, setsearch] = useState("");
  const callApi = async () => {
    const res = await fetch(
      `https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba`
    );
    const data = await res.json();
    console.log(data);
    settabledata(data.clients);
  };
  useEffect(() => {
    callApi();
  }, []);
  const handleChangeSearch = (e) => setsearch(e.target.value);

  const arr = tabledata.filter((elem) => {
    return elem.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <>
      <div className="search container mt-4">
        <input
          type="text"
          onChange={handleChangeSearch}
          value={search}
          placeholder="search"
          className="ps-3"
        />
      </div>
      <table className="table container table-hover table-bordered text-center mt-5 bg-light">
        <thead>
          <tr>
            <th scope="col">Sno</th>
            <th scope="col">Name</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
          {search !== "" ? (
            arr.map((elem, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{elem.name}</td>
                    <td>{elem.company}</td>
                  </tr>
                </>
              );
            })
          ) : (
            <>
              {tabledata.map((elem, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index+1}</th>
                      <td>{elem.name}</td>
                      <td>{elem.company}</td>
                    </tr>
                  </>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
