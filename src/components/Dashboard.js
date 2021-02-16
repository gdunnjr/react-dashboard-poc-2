import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Feb 8', 'Feb 9', 'Feb 9', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13'],
  datasets: [
    {
      label: '  Persons Tested Positive',
      backgroundColor: 'rgba(0, 70, 255, 1)', //'rgba(255,99,132,0.2)',
      borderColor: 'rgba(0, 70, 255, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(13, 157, 239, 0.46)', //rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(13, 157, 239, 0.46)',
      data: [7866, 7101, 10099, 8404, 8763, 8316, 6365]
    },
    {
      label: '  Persons Tested',
      backgroundColor: 'rgba(255, 183, 84, 0.79)',
      borderColor: 'rgba(255, 183, 84, 0.79)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(251, 219, 9, 0.34)',
      hoverBorderColor: 'rgba(251, 219, 9, 0.34)',
      data: [17866, 17101, 20099, 18404, 18763, 18316, 16365]
    }
  ]
};

const mainStyle = {
  marginLeft: '40px'
};

export default class Dashboard extends Component {
  render() {
    return (
      <div style={mainStyle}>
        <h2>Test Results 2/8 - 2/15</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
}

// import React, { Component } from "react";
// import { VictoryLine, VictoryChart } from "victory";

// export default class Dashboard extends Component {
//   constructor() {
//     const baseProps = {
//         width: 250,
//         height: 100,
//         padding: 50
//       };
//     super();
//     this.state = {
//       data: [
//         { x: "Sunday", y: 3 },
//         { x: "Monday", y: 2 },
//         { x: "Tuesday", y: 0 },
//         { x: "Wednesday", y: 8 },
//         { x: "Thursday", y: 4 },
//         { x: "Friday", y: 2 },
//         { x: "Saturday", y: 4 },
//         { x: "Sunday", y: 6 }
//       ]
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Tacos per Day</h1>
//         <VictoryChart>
//           <VictoryLine
//             data={this.state.data}
//             style={{
//               data: {
//                 stroke: "#02B875"
//               }
//             }}
//           />
//         </VictoryChart>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react'
// import ChartistGraph from 'react-chartist'

// class Dashboard extends Component {
//   render() {
//     let dataPie = {
//       labels: ["40%", "20%", "40%"],
//       series: [40, 20, 40]
//     }
//     let dataSales = {
//       labels: [
//         "9:00AM",
//         "12:00AM",
//         "3:00PM",
//         "6:00PM",
//         "9:00PM",
//         "12:00PM",
//         "3:00AM",
//         "6:00AM"
//       ],
//       series: [
//         [287, 385, 490, 492, 554, 586, 698, 695],
//         [67, 152, 143, 240, 287, 335, 435, 437],
//         [23, 113, 67, 108, 190, 239, 307, 308]
//       ]
//     }
    
//     return (
//       <div className="content">
//         <div className="container-fluid">
//           <div className="row">

//             <div className="col-md-4">
//               <div className="card ">
//                 <div className="card-header ">
//                   <h4 className="card-title">Email Statistics</h4>
//                   <p className="card-category">Last Campaign Performance</p>
//                 </div>
//                 <div className="card-body ">
//                   <ChartistGraph data={dataPie} type="Pie" />
//                   <div className="legend">
//                     <i className="fa fa-circle text-info"></i> Open
//                                         <i className="fa fa-circle text-danger"></i> Bounce
//                                         <i className="fa fa-circle text-warning"></i> Unsubscribe
//                                     </div>
//                   <hr />
//                   <div className="stats">
//                     <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
//                                     </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-8">
//               <div className="card">
//                 <div className="card-header ">
//                   <h4 className="card-title">Users Behavior</h4>
//                   <p className="card-category">24 Hours performance</p>
//                 </div>
//                 <div className="card-body ">
//                   <ChartistGraph data={dataSales} type="Line" />
//                 </div>
//                 <div className="card-footer ">
//                   <div className="legend">
//                     <i className="fa fa-circle text-info"></i> Open
//                     <i className="fa fa-circle text-danger"></i> Click
//                     <i className="fa fa-circle text-warning"></i> Click Second Time
//                 </div>
//                   <hr />
//                   <div className="stats">
//                     <i className="fa fa-history"></i> Updated 3 minutes ago
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Dashboard