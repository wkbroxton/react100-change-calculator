import React, { Component } from 'react';
// import "./App.css";

export default class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    amountDue: 0,
    amountReceived: 0,
    changeDue: "",
    showCurrency: false,
    currency: [
  { currencyType: "hundreds", currencyValue: 100, count: 0 },
  { currencyType: "fifties", currencyValue: 50, count: 0 },
  { currencyType: "twenties", currencyValue: 20, count: 0 },
  { currencyType: "tens", currencyValue: 10, count: 0 },
  { currencyType: "fives", currencyValue: 5, count: 0 },
  { currencyType: "ones", currencyValue: 1, count: 0 },
  { currencyType: "quarters", currencyValue: 0.25, count: 0 },
  { currencyType: "dimes", currencyValue: 0.1, count: 0 },
  { currencyType: "nickels", currencyValue: 0.05, count: 0 },
  { currencyType: "pennies", currencyValue: 0.01, count: 0 },
],
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

  let currency = JSON.parse(JSON.stringify(this.state.currency));

let amount;

for (let i = 0; i < currency.length; i++) {
  amount = Math.floor(returnValue / currency[i]["currencyValue"]);
  if (amount > 0) {
    currency[i]["count"] = amount;
    returnValue = returnValue % currency[i]["currencyValue"];
  }
}

  this.setState( { currency: currency, changeDue: change, showCurrency: true });
}

render() {
  console.log(this.state.currency)
  return (
    <div className='container'>
      <div className='change-calc'>
      <h1>Change Calculator</h1>
      <hr/>
      <div className='row'>
        <div className='col-4'>
          <div className="">
          <label htmlFor="amountDue" className="col-4 control-label">Amount Due:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="amountDue" placeholder="Enter Amount Due" onChange={this.onChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="amountReceived" className="col-4 control-label">Amount Received:</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="amountReceived" placeholder="How much was received?" onChange={this.onChange}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <button type="submit" className="submit btn btn-default" name="submit" onClick={this.handleClick}>Submit</button>
          </div>
        </div>
        </div>
        <div className='col-7'>
          {this.state.showCurrency ? 
          <div className="all-currency">
          <h2>Currency</h2>
              <div className='container'>
                <div className='bills col-8'>
                  <div className='row'>
                    <div className="alert alert-success">
                      The total change due is {""} { new Intl.NumberFormat('dollars', {style: 'currency', currency: 'USD'}).format(this.state.changeDue)}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col money'>Hundreds</div>
                    <div className='col money'>Fifties</div>
                    <div className='col money'>Twenties</div>
                    <div className='col money'>Tens</div>
                    <div className='col money'>Fives</div>
                    <div className='col money'>Ones</div>
                  </div>
                  <div className='row'>
                    <div className='col money hundred'>
                      <img src="https://i.imgur.com/56KReuN.jpg" />
                    </div>
                    <div className='col money'>
                      <img src="https://i.imgur.com/BWvVpiY.jpg" />
                    </div>
                    <div className='col money'>
                      <img src="https://i.imgur.com/ytVxBKH.jpg" />
                    </div>
                    <div className='col money'>
                      <img src="https://i.imgur.com/YPsx94N.jpg" />
                    </div>
                    <div className='col money'>
                      <img src="https://i.imgur.com/1dOItrU.jpg" />
                    </div>
                    <div className='col money'>
                      <img src="https://i.imgur.com/ktsryAU.jpg" />
                    </div>
                  </div>
                  <div className='row'>
                    <div name="hundreds" className='col money change'>{this.state.currency[0]["count"]}</div>
                    <div name="fifties" className='col money change'>{this.state.currency[1]["count"]}</div>
                    <div name="twenties" className='col money change'>{this.state.currency[2]["count"]}</div>
                    <div name="tens" className='col money change' >{this.state.currency[3]["count"]}</div>
                    <div name="fives" className='col money change' >{this.state.currency[4]["count"]}</div>
                    <div name="ones" className='col money change' >{this.state.currency[5]["count"]}</div>
                  </div>
                </div>
                <div className='cents col-8'>
                  <div className='row'>
                    <div className='col money-cents'>Quarters</div>
                    <div className='col money-cents'>Nickels</div>
                    <div className='col money-cents'>Dimes</div>
                    <div className='col money-cents'>Pennies</div>
                  </div>
                  <div className='row'>
                    <div className='col money-cents'>
                      <img src="https://i.imgur.com/lq2ak2c.jpg" />
                    </div>
                    <div className='col money-cents'>
                      <img src="https://i.imgur.com/e1o1BNt.png" />
                    </div>
                    <div className='col money-cents'>
                      <img src="https://i.imgur.com/HyDU0Rj.jpg" />
                    </div>
                    <div className='col money-cents'>
                      <img src="https://i.imgur.com/6ih6o50.jpg" />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col money-cents change'>{this.state.currency[6]["count"]}</div>
                    <div className='col money-cents change'>{this.state.currency[7]["count"]}</div>
                    <div className='col money-cents change'>{this.state.currency[8]["count"]}</div>
                    <div className='col money-cents change'>{this.state.currency[9]["count"]}</div>
                  </div>
                </div>
            </div >
          </div> 
          : <div>
            <h2>See How much Change is Due</h2>
          </div> }
          </div>
        </div>
      </div>
</div>
)}
}