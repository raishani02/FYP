import React from "react";
import StudentMenu from "./StudentMenu";
import StudentAssignmentCompletionChart from "./StudentAssignmentCompletionChart";
import StudentCourseProgressChart from "./StudentCourseProgressChart";
import StudentDueAssignmentsChart from "./StudentDueAssignmentsChart";
import StudentProjectDeliverableChart from "./StudentProjectDeliverableChart";
import { Row,Col,Card, Container } from "react-bootstrap";

function StudentHome() {
  return (
    <div>
      <StudentMenu />
      <div
        style={{
          float: "right",
          height: "100%",
          width: "75%",
          backgroundColor: "lightgray",
        }}
      >

<Container>
          {/* ***********************Card-1***************************** */}
          <Row>
            
        
          <Col>
            <Card
              style={{
                marginLeft: "80px",
                marginTop: "80px",
                width: "380px",
                height: "220px",
                background: "lightblue",
                borderWidth: "5px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "left" }}>
                  <strong> Course Completion Progress</strong>
                </Card.Title>
                <Card.Text
                  style={{ bottom: "10px", textAlign: "left" }}
                ></Card.Text>
              </Card.Body>
              <Card.Footer>
                  <StudentCourseProgressChart />
              </Card.Footer>
            </Card>
          {/* </div> */}
          </Col>

          {/* ***********************Card-2***************************** */}
          <Col>
          {/* <div class="column p-3"> */}
            <Card
              style={{
                marginLeft: "80px",
                marginTop: "80px",
                width: "380px",
                height: "220px",
                background: "lightblue",
                borderWidth: "5px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "left" }}>
                  <strong>Due Assignments' Status</strong>
                </Card.Title>
                <Card.Text
                  style={{ bottom: "10px", textAlign: "left" }}
                ></Card.Text>
              </Card.Body>
              <Card.Footer>
                 <StudentDueAssignmentsChart />
                 </Card.Footer>
            </Card>
           </Col>
          </Row>

          {/* ***********************Card-3***************************** */}
          <Row>
          <Col>
          
            <Card
              style={{
                marginLeft: "80px",
                marginTop: "80px",
                width: "380px",
                height: "220px",
                background: "lightblue",
                borderWidth: "5px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "left" }}>
                  <strong>Assignments Completion Progress</strong>
                </Card.Title>
                <Card.Text
                  style={{ bottom: "10px", textAlign: "left" }}
                ></Card.Text>
              </Card.Body>
              <Card.Footer>
                <StudentAssignmentCompletionChart />
              </Card.Footer>
            </Card>
          </Col>
          {/* ***********************Card-4***************************** */}

        <Col>
            <Card
              style={{
                marginLeft: "80px",
                marginTop: "80px",
                width: "380px",
                height: "220px",
                background: "lightblue",
                borderWidth: "5px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "left" }}>
                  <strong> Project Deliverable Progress</strong>
                </Card.Title>
                <Card.Text
                  style={{ bottom: "10px", textAlign: "left" }}
                ></Card.Text>
              </Card.Body>
              <Card.Footer>
                  <StudentProjectDeliverableChart />
              </Card.Footer>
            </Card>
            </Col>
          </Row>
          </Container>

       
      </div>
    </div>
  );
}

export default StudentHome;
