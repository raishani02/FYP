import React from "react";
import StudentMenu from "./StudentMenu";
import { useState } from 'react';
import { Button } from "react-bootstrap";


const StudentViewDeliverableDetail = () => {

    const data = [
        { Deliverable_No: "1", weightage: "2%", Difficulty_Level: "Medium",Total_Submissions_Recieved:"34", Posted_On:"2-April-2022", Deadline:	"3-April-2022" },
      ]

      const [delivNumber, setDelivNo] = useState('');

    return (
      <div>
        
        <StudentMenu />
        <h1 style={{ marginTop: "50px", textAlign: "center" }}>Project Deliverable</h1>

        <div className="container">
          <table
            style={{
              border: "2px solid skyblue",
              width: "800px",
              height: "200px",
              marginTop: "40px",
              marginLeft: "380px",
            }}
          >
            <tr>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Deliverable No</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Weightage</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Difficulty Level</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Total Submissions Recieved</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Posted On</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Deadline</strong>
              </th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Deliverable_No}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.weightage}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Difficulty_Level}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Total_Submissions_Recieved}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Posted_On}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Deadline}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
}; 
    
export default StudentViewDeliverableDetail;
