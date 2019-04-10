import React, { Component } from "react";
import ReactDOM from "react-dom";
//import { Transition } from 'react-transition-group';
//import { Collapse, Button, CardBody, Card } from 'reactstrap';
//import {Collapse} from 'react-collapse';
import axios from "axios";
// import { Route, Switch } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      collapse: false,
      UrlId: window.location.pathname.slice(1)
    };
    this.getMenus = this.getMenus.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
    console.log(this.state);
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/menus/${this.state.UrlId}`).then(res => {
      console.log(res.data);
      this.setState({ menu: res.data[0].Breakfast });
    });
  }

  getMenus(menutype) {
    axios.get(`http://localhost:3004/menus/${this.state.UrlId}`).then(res => {
      console.log(res.data);
      this.setState({ menu: res.data[0][menutype] });
    });
  }
  //this.componentDidMount();
  //<Collapse isOpened={this.state.collapse}>
  //</Collapse>

  render() {
    return (
      <div className="menu-box" data-test="menu">
        <h3>Menu</h3>
        <div className="buttons-box" data-test="nav-bar">
          <button
            className="nav-button"
            onClick={() => {
              this.getMenus("Breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            className="nav-button"
            onClick={() => {
              this.getMenus("Lunch");
            }}
          >
            Lunch
          </button>
          <button
            className="nav-button"
            onClick={() => {
              this.getMenus("Dinner");
            }}
          >
            Dinner
          </button>
          <button
            className="nav-button"
            onClick={() => {
              this.getMenus("Business");
            }}
          >
            Business
          </button>
          <button
            className="nav-button"
            onClick={() => {
              this.getMenus("HappyHour");
            }}
          >
            Happy Hour
          </button>
          <button
            className="nav-button"
            onClick={() => {
              this.getMenus("Lunch");
            }}
          >
            Dessert Menu
          </button>
          <button
            className="nav-button"
            onClick={() => {
              this.getMenus("Dinner");
            }}
          >
            Beverage List
          </button>
        </div>
        <button
          className={this.state.collapse ? "toggle-menu-full" : "toggle-menu"}
          onClick={() => {
            this.toggle();
          }}
        >
          {this.state.collapse ? "Collapse menu" : "View full menu"}
        </button>
        <div
          className={this.state.collapse ? "all-items" : "all-items-collapsed"}
          data-test="menu-items"
        >
          {this.state.menu.map(item => (
            <div className="item-container" key={item._id}>
              <p className="item-name">{item.itemName}</p>
              <p className="item-price">{item.itemPrice}</p>
              <p className="item-description">{item.itemDescription}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
