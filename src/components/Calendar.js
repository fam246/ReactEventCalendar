import React, { Component } from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

 class Calendar extends Component {
    
    //var today = new Date();
    //var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
      
    handleClick(e){
      this.props.onClick(e,this.props.date);
    }
  
  render() {
    
    return (
        <InfiniteCalendar 
        onSelect={function(date) {
            //alert('You selected: ' +  (date, 'ddd, MMM Do YYYY'))
            alert('You selected: ' +   Intl.DateTimeFormat('en-GB').format(date, 'ddd, MMM Do YYYY'))
        
            
         }
         
        }
        
        width={400}
        height={600}
        //selected={today}
        disabledDays={[0,6]}
        //minDate={lastWeek}
      />
    )
  }
}

export default Calendar;
