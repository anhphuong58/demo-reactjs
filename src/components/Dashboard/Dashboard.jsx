import React from 'react'
import './Dashboard.scss'
const data = [
    { name: "Anom", status: "active", used_amount: 10, usage_rate: 0.5, budget:100000, start_date:"2020-12-12 10:00", end_date:"2020-12-14 12:59" },
    { name: "Megha", status: "active", used_amount: 10, usage_rate: 0.5, budget:100000, start_date:"2020-12-12 10:00", end_date:"2020-12-14 12:59"},
    { name: "Subham", status: "active", used_amount: 10, usage_rate: 0.5, budget:100000, start_date:"2020-12-12 10:00", end_date:"2020-12-14 12:59"},
  ]
export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='filter-bar'>
                <div className='search-container'>
                        <input type='text' id='search-bar' placeholder='Search'/>
                </div>
            </div>
            <div className="table-data">
                <table>
                <tr>
                    <th>Campaign Name</th>
                    <th>Status</th>
                    <th>Used Amount</th>
                    <th>Usage Rate</th>
                    <th>Budget</th>
                    <th>Start date</th>
                    <th>End date</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.status}</td>
                            <td>{val.used_amount}</td>
                            <td>{val.usage_rate}</td>
                            <td>{val.status}</td>
                            <td>{val.start_date}</td>
                            <td>{val.end_date}</td>
                        </tr>
                    )
                })}
                </table>
            </div>
        </div>        
    );

}
