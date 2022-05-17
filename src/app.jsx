import React, { Component } from 'react';
// import "./App.css";

export default class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    amountDue: 0,
    amountReceived: 0,
    changeDue: "",
    currency: [],
  };
  this.onChange = this.onChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

onChange(e){
  const name = e.target.name;
  const value = e.target.value;
  this.setState({ [name]: value });
}

handleClick(e){
  const owed = this.state.amountDue;
  const given = this.state.amountReceived;
  const change = given - owed;
  let returnValue = change;

  const currency = [
  { currencyType: "hundred", currencyValue: 100, count: 0 },
  { currencyType: "fifty", currencyValue: 50, count: 0 },
  { currencyType: "twenty", currencyValue: 20, count: 0 },
  { currencyType: "ten", currencyValue: 10, count: 0 },
  { currencyType: "five", currencyValue: 5, count: 0 },
  { currencyType: "dollar", currencyValue: 1, count: 0 },
  { currencyType: "quarter", currencyValue: 0.25, count: 0 },
  { currencyType: "dime", currencyValue: 0.1, count: 0 },
  { currencyType: "nickel", currencyValue: 0.05, count: 0 },
  { currencyType: "penny", currencyValue: 0.01, count: 0 },
];

let amount;

for (let i = 0; i < currency.length; i++) {
  amount = Math.floor(returnValue / currency[i]["currencyValue"]);
  if (amount > 0) {
    currency[i]["count"] = amount;
    returnValue = returnValue % currency[i]["currencyValue"];
  }
}

  this.setState( { currency: currency, changeDue: change  });
}

render() {
  return (
    <div className='container'>
      <div className='change-calc'>
      <h3>Change Calculator</h3>
      <div className='row'>
        <div className='col-5'>
          <div className="">
          <label htmlFor="amountDue" className="col-4 control-label">Amount Due:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="amountDue" placeholder="Enter Amount Due" onChange={this.onChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="amountReceived" className="col-4 control-label">Amount Recieved:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="amountReceived" placeholder="How much was received?" onChange={this.onChange}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <button type="submit" className="submit btn btn-default" name="submit" onClick={this.handleClick}>Submit</button>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <div className="alert alert-success">
              The total change due is {""} { new Intl.NumberFormat('dollars', {style: 'currency', currency: 'USD'}).format(this.state.changeDue)}
            </div>
        </div>
      </div>
        </div>
        <div className='col-7'>
          <div id="all-currency">
          <h2>Currency</h2>
              <div id="bills">
                <div>
                  <div className="money">
                    <img src="$100.jpg" />
                    <p id="hundred"></p>
                  </div>
                  <div className="money">
                    <img src="$50.jpg" />
                    <p id="fifty" type="text"></p>
                  </div>
                  <div className="money">
                    <img src="$20.jpg" />
                    <p id="twenty" type="text"></p>
                  </div>
                  <div className="money">
                    <img src="$10.jpg" />
                    <p id="ten" type="text"></p>
                  </div>
                  <div className="money">
                    <img src="$5.jpg" />
                    <p id="five" type="text"></p>
                  </div>
                  <div className="money">
                    <img src="$1.jpg" />
                    <p id="dollar" type="text"></p>
                  </div>
                </div>
              </div>

              <div id="cents">
                <div>
                  <div className="money-cents">
                    <img src="quarter.png" />
                    <p id="quarter"></p>
                  </div>
                  <div className="money-cents">
                    <img src="dime.png" />
                    <p id="dime" type="text"></p>
                  </div>
                  <div className="money-cents">
                    <img src="nickel.png" />
                    <p id="nickel" type="text"></p>
                  </div>
                  <div className="money-cents">
                    <img src="penny.png" />
                    <p id="penny" type="text"></p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
</div>
)}
}

// {this.state.currency[0]["count"]}