import React, { useState, useEffect } from "react";

const Table = ({ products }) => {
  const [sortProduct, setSortProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSortClick = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_case - b.total_case;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick2 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_case - a.total_case;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick3 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_case_excludeabroad - b.total_case_excludeabroad;
    });

    setSortProduct(res);
  };
  const onSortClick4 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_case_excludeabroad - a.total_case_excludeabroad;
    });

    setSortProduct(res);
  };
  // const onSortClick5 = () => {
  //   console.log("click");

  //   const tempProducts = [...products];
  //   const res = tempProducts.sort((a, b) => {
  //     return a.province - b.province;
  //   });

  //   setSortProduct(res);
  // };
  // const onSortClick6 = () => {
  //   console.log("click");

  //   const tempProducts = [...products];
  //   const res = tempProducts.sort((a, b) => {
  //     return b.province - a.province;
  //   });

  //   setSortProduct(res);
  // };
  const onHandleSearch = (event) => {
    setSearchTerm(event.target.value);
    const tempProducts = [...products];

    const filterProducts = tempProducts.filter((item) => {
      return item.province

        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log({ filterProducts });

    setSortProduct(filterProducts);
  };

  useEffect(() => {
    setSortProduct(products);
  }, [products]);

  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link "
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-Contact"
            type="button"
            role="tab"
            aria-controls="pills-Contact"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link "
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-Support"
            type="button"
            role="tab"
            aria-controls="pills-Support"
            aria-selected="false"
          >
            Support
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-About"
            type="button"
            role="tab"
            aria-controls="pills-About"
            aria-selected="false"
          >
            About
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex="0"
        ></div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex="0"
        ></div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex="0"
        ></div>
        <div
          className="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabIndex="0"
        ></div>
      </div>
      <div className="box">
        รายงานสถานการณ์ COVID-19 ระลอก 3 <br></br>(ตั้งแต่ 01/04/2021 –ปัจจุบัน){" "}
        <br></br>แยกตามรายจังหวัด
      </div>
      <div className="input-group mb-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-primary">
            Search
          </button>
          <input className="btn btn-primary" type="reset" value="Undo"></input>
          <span className="input-group"></span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="ค้นหาจังหวัดของคุณ..."
          value={searchTerm}
          onChange={onHandleSearch}
        />
      </div>

      <table className="table table-bordered border-light table-dark  table-striped shadow">
        <thead>
          <tr>
            <th scope="col"></th>
            <th className="datecss" scope="col">
              Date
            </th>
            <th className="ticss" scope="col">
              New Case
            </th>
            <th scope="col" className="bracss">
              New Case Excludeabroad
            </th>
            <th scope="col">
              <th className="descss" scope="col">
                Province
                <span role="button" className=""></span>
                <span role="button" className=""></span>
              </th>
            </th>
            <th className="pricss" scope="col" style={{ width: "300px" }}>
              Total of Case{" "}
              <span role="button" className="" onClick={onSortClick}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick2}>
                ⬇️
              </span>
            </th>
            <th scope="col" className="ttcss">
              Total of Case Excludeabroad
              <span role="button" className="stcss" onClick={onSortClick3}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick4}>
                ⬇️
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortProduct.map((items, index) => {
            return (
              <tr className="table-primary table-bordered border-light">
                <td>{index + 1}</td>
                <td className="itti">{items.txn_date}</td>
                <td className="itti">{items.new_case}</td>
                <td className="itti">{items.new_case_excludeabroad}</td>
                <td className="itbra">{items.province}</td>
                <td className="itdes">{items.total_case}</td>
                <td className="itpri">{items.total_case_excludeabroad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
