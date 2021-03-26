import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./App.css";
//
function App() {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const [flowerData, setFlowerData] = useState({
    sepal_length: "",
    sepal_width: "",
    petal_length: "",
    petal_width: "",
    species: "",
  });
  const apiUrl = "http://localhost:3000/run";
  //runs once after the first rendering of page
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(apiUrl)
        .then((result) => {
          console.log("result.data:", result.data);
          setData(result.data);
          setShowLoading(false);
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
    };
    fetchData();
  }, []);

  const onChange = (e) => {
    e.persist();
    setFlowerData({ ...flowerData, [e.target.name]: e.target.value });
  };

  const getSpecies = () => {
    axios.post();
  };

  return (
    <div>
      {showLoading === false ? (
        <div>
          {showLoading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}

          <h1>Prediction Results</h1>
          <h2> the values for species will be:</h2>
          <li>setosa: 1,0,0</li>
          <li>virginica: 0,1,0</li>
          <li>versicolor: 0,0,1 </li>

          <table className="App-table">
            <thead>
              <tr>
                <th>Test 1</th>
                <th>Test 2</th>
                <th>Test 3</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="App-td">
                  {data.row1.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                <td className="App-td">
                  {data.row2.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                <td className="App-td">
                  {data.row3.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div>
            {" "}
            <Jumbotron>
              <Form onSubmit={getSpecies}>
                <Form.Group>
                  <Form.Label>Student Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="studentNumber"
                    id="studentNumber"
                    placeholder="Enter student number"
                    value={flowerData.sepal_length}
                    onChange={onChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label> First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter first name"
                    value={flowerData.sepal_width}
                    onChange={onChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label> Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                    value={flowerData.petal_length}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter address"
                    value={flowerData.petal_width}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    value={flowerData.species}
                    onChange={onChange}
                  />
                </Form.Group>
                {/* <Form.Group>
                  <Form.Label>phone</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter first name"
                    value={user.phone}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    id="email"
                    rows="3"
                    placeholder="Enter email"
                    value={user.email}
                    onChange={onChange}
                  />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Form>
            </Jumbotron>
          </div>
        </div>
      ) : (
        <div>
          {showLoading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Waiting for results...</span>
            </Spinner>
          )}
        </div>
      )}
    </div>
  );
}
//
export default App;
