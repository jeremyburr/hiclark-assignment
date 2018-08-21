import BILLS from './data.js' 
import React, { Component } from 'react' 


class App extends Component {
  constructor() {
    super();
    this.state = ({
      sortedData : null,     
      sortOrder: ["outstanding","overdue","paid"],
      sums: {
        total: 0,
        paid: 0,
        overdue: 0,
        outstanding: 0,
      } 
    })
  }

  // Render bill items to DOM  

  renderCategory = (category) => {
    return ( 
        Object.keys(this.state.sortedData[category]).map((bill) => {
          return ( 
              <li>
                {this.state.sortedData[category][bill].id}:{" "}  
                {this.state.sortedData[category][bill].amountInDollars},{" "}
                {this.state.sortedData[category][bill].status},{" "}
                {this.state.sortedData[category][bill].dueDate} 
              </li>
              )
          }) 
        )
  }

  componentWillMount() { 

    // Before component renders, process bill data below 

    // Convert cents to dollars, format 

    for (let i in BILLS) {
          let dollars = BILLS[i].amountInCents / 100;
          BILLS[i].dollars = dollars;
          BILLS[i].amountInDollars = dollars.toLocaleString("en-US", {
            style:"currency", 
            currency:"USD"
          }); 
        }

        let data = {
          outstanding : {},
          overdue : {},
          paid : {} 
        }

        // Categorize bill items based on payment date
        
        let today = Date.parse(new Date()); 
        for (let i in BILLS) { 
          let date = Date.parse(new Date(BILLS[i].dueDate+'T00:00:00+00:00'));
          if (BILLS[i].status === "pending") {
           if (today <= date) {
            BILLS[i].status = "outstanding" 
            data.outstanding[BILLS[i].id] = BILLS[i]; 
           }
            if (today > date) {
              BILLS[i].status = "overdue"
              data.overdue[BILLS[i].id] = BILLS[i];
             }
          } 
          else {
              data.paid[BILLS[i].id] = BILLS[i]; 
          }
        } 

        //  State object blueprint

        let sortedData = {
          outstanding: {},
          overdue: {},
          paid: {},
          sums: {
            total: 0,
            paid: 0,
            overdue: 0,
            outstanding: 0,
          } 
        };

        // Sort each category by due date, recent to past

        this.state.sortOrder.forEach((status)=> {
          Object.keys(data[status]).sort((x,y) => {
            let xDate = data[status][x].dueDate; 
            let yDate = data[status][y].dueDate; 
            if (xDate > yDate)  return -1 
            if (xDate < yDate) return 1 
            return 0 
          }) 
          .forEach((key) => {
            sortedData.sums[status]+= data[status][key].dollars; 
            sortedData[status][key] = BILLS[key];
          });
        }); 

        // Calculate total 
          
        sortedData.sums.total = sortedData.sums.paid + sortedData.sums.overdue + sortedData.sums.outstanding;

        for (let category in sortedData.sums) {
          console.log(sortedData.sums[category])
          sortedData.sums[category] = sortedData.sums[category].toLocaleString("en-US", {
            style:"currency", 
            currency:"USD"
          });
          console.log(sortedData.sums[category]);

        }

        // Set component state

        this.setState({sortedData, sums: sortedData.sums});

   }

  render() { 
    if (this.state.sortedData === null) {
      return <div />
    }
    return (
      <div>
        total: {this.state.sums.total}<br />
        paid: {this.state.sums.paid}<br />
        overdue: {this.state.sums.overdue}<br />
        outstanding: {this.state.sums.outstanding}<br />
        <ul>
          {this.renderCategory("outstanding")}      
          {this.renderCategory("overdue")}      
          {this.renderCategory("paid")}      
        </ul>
       </div>
    )
  }
}

export default App;
