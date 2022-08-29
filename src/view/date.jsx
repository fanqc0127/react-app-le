import React from "react";


class DatetimeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toLocaleDateString(),
            dateTime : new Date().toLocaleTimeString()
        }
    }

    render() {
        this.setState(() => ({date: new Date().toLocaleDateString(),dateTime: new Date().toLocaleTimeString()}));
        const date = this.state.date;
        const datetime = this.state.dateTime;
      return (
        <div >
          <div className="date-time">
            {date + ' ' + datetime}
          </div>
        </div>
      );
    }
  }
  


export default DatetimeComponent;