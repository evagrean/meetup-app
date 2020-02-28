import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend, Line } from 'recharts';



class Event extends Component {


  state = {
    showDetails: false,
  }

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });

    }
    else {
      this.setState({ showDetails: false });
    }

  }

  getChartData = () => {
    const yesRsvp = this.props.event.yes_rsvp_count;
    const openSlots = this.props.event.rsvp_limit - yesRsvp;

    return ([
      { name: 'participants', value: yesRsvp },
      { name: 'vacancies', value: openSlots }
    ]
    )
  }




  render() {
    const { event } = this.props;
    let colors = ['#ff971d', '#ffe8d6'];


    return (

      <div className="Event">
        <div className="event-time">{event.local_date} | {event.local_time}</div>
        <div className="event-name">{event.name}</div>
        <div className="group-name">{event.group.name}</div>
        {!this.state.showDetails &&
          <button className="showDetailsButton" onClick={() => this.handleShowDetails()}>Details</button>
        }
        {this.state.showDetails && (
          <div>
            {event.rsvp_limit ? (
              <ResponsiveContainer height={250}>
                <PieChart margin={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                  <Pie dataKey="value" isAnimationActive={false} data={this.getChartData()} cx="50%" cy="50%" outerRadius={60} label>
                    {
                      this.getChartData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                      ))
                    }
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="top" align="center" iconType="circle">
                    <Line name="participants" type="monotone" dataKey="yesRsvp" stroke="#e42c64" />
                    <Line name="vacancies" type="monotone" dataKey="openSlots" stroke="#fff" />
                  </Legend>
                </PieChart>
              </ResponsiveContainer>
            ) : <div className="going"> {event.yes_rsvp_count} People are going</div>
            }

            <button className="showLessButton" onClick={() => this.handleShowDetails()}>Show Less</button>
          </div>
        )
        }
        {this.state.showDetails ? <div className="details" dangerouslySetInnerHTML={{ __html: event.description }}></div> : null}


      </div >
    );
  }
}

export default Event;