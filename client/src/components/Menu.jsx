import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import classes from "./Menu.css";

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
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/menus/${this.state.UrlId}`).then(res => {
      this.setState({ menu: res.data[0].Breakfast });
    });
  }

  getMenus(menutype) {
    axios.get(`http://localhost:3004/menus/${this.state.UrlId}`).then(res => {
      this.setState({ menu: res.data[0][menutype] });
    });
  }

  render() {
    return (
      <div className={classes.menubox} data-test="menu">
        <h3>Menu</h3>
        <div className={classes.buttonsBox} data-test="nav-bar">
          <button
            className={classes.navButton}
            data-test="nav-button"
            onClick={() => {
              this.getMenus("Breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            className={classes.navButton}
            data-test="nav-button"
            onClick={() => {
              this.getMenus("Lunch");
            }}
          >
            Lunch
          </button>
          <button
            className={classes.navButton}
            data-test="nav-button"
            onClick={() => {
              this.getMenus("Dinner");
            }}
          >
            Dinner
          </button>
          <button
            className={classes.navButton}
            data-test="nav-button"
            onClick={() => {
              this.getMenus("Business");
            }}
          >
            Business
          </button>
          <button
            className={classes.navButton}
            data-test="nav-button"
            onClick={() => {
              this.getMenus("HappyHour");
            }}
          >
            Happy Hour
          </button>
          <button
            className={classes.navButton}
            data-test="nav-button"
            onClick={() => {
              this.getMenus("Lunch");
            }}
          >
            Dessert Menu
          </button>
          <button
            className={classes.navButton}
            data-test="nav-button"
            onClick={() => {
              this.getMenus("Dinner");
            }}
          >
            Beverage List
          </button>
        </div>
        <button
          className={
            this.state.collapse ? classes.toggleMenuFull : classes.toggleMenu
          }
          onClick={() => {
            this.toggle();
          }}
        >
          {this.state.collapse ? "Collapse menu" : "View full menu"}
        </button>
        <div
          className={
            this.state.collapse ? classes.allItems : classes.allItemsCollapsed
          }
          data-test="menu-items"
        >
          {this.state.menu.map(item => (
            <div className={classes.itemContainer} key={item._id}>
              <p className={classes.itemName}>{item.itemName}</p>
              <p className={classes.itemPrice}>{item.itemPrice}</p>
              <p className={classes.itemDescription}>{item.itemDescription}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
