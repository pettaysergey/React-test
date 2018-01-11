import React, { Component } from "react";
import uuid from "uuid";
import Item from "./Item.js";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetch: false,
      dataIds: [],
      dataById: {}
    };
    this.showInfo = this.showInfo.bind(this);
    this.deleteId = this.deleteId.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  showInfo() {
    this.setState({ isFetch: true, dataIds: [] });
    this.props
      .getData({ url: "people/" })
      .then(data => {
        if (data.status === 200) {
          const response = data.data.results.map(({ name, mass }) => ({
            name,
            mass,
            id: uuid.v4()
          }));
          this.setState({
            isFetch: false,
            dataById: response.reduce(
              (sum, curent) => ({
                ...sum,
                [curent.id]: curent
              }),
              {}
            ),
            dataIds: response.map(el => el.id)
          });
          console.log(response);
        } else {
          this.setState({ isFetch: false });
        }
      })
      .catch(error => {
        console.log("Произошла ошибка при обращении к серверу", error);
        this.setState({ isFetch: false });
      });
  }

  deleteId(id) {
    this.setState(({ dataIds }) => ({
      dataIds: dataIds.filter(el => el !== id)
    }));
  }

  changeValue(event, id) {
    const { target: { name, value } } = event;
    this.setState(({ dataById }) => ({
      dataById: {
        ...dataById,
        [id]: {
          ...dataById[id],
          [name]: value
        }
      }
    }));
  }

  render() {
    const { isFetch, dataById, dataIds } = this.state;
    const data = dataIds.map(el => dataById[el]);
    return (
      <div>
        <button onClick={this.showInfo}>Загрузить список</button>
        {data.length > 0 ? (
          <ul>
            {data.map(i => (
              <Item
                key={i.id}
                name={i.name}
                mass={i.mass}
                deleteId={() => this.deleteId(i.id)}
                changeValue={(event) => this.changeValue(event,i.id)}
              />
            ))}
          </ul>
        ) : isFetch ? (
          <div className="preloader">
            <div className="logo" />
          </div>
        ) : (
          <p>Данных нет...</p>
        )}
      </div>
    );
  }
}
