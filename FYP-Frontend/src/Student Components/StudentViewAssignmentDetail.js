import React from "react";
import StudentMenu from "./StudentMenu";
import { Row,Col } from "react-bootstrap";


const StudentViewAssignmentDetail = () => {

    const data = [
        { Assignment_No: "1", weightage: "2%", Difficulty_Level: "Medium", Posted_On:"2-April-2022", Deadline:	"3-April-2022" },
      ]

    return (
      <div>
        
        <StudentMenu />       

        <div className="container" >
            <Row>
                <Col>
                <h1 style={{ marginTop: "100px", textAlign:"center"}} >Assignment Details</h1>

                <table
            style={{
              border: "2px solid skyblue",
              width: "800px",
              height: "200px",
              marginLeft: "380px",
               marginTop: "100px",

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
                <strong>Assignment No</strong>
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
                    {val.Assignment_No}
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
                </Col>
            </Row>
         
        </div>
      </div>
    );
}; 
    
export default StudentViewAssignmentDetail;
