import Button from "react-bootstrap/esm/Button";
import React from "react";
import "antd/dist/antd.css";
import {Row, Col, Breadcrumb, Menu, Modal, Input} from 'antd';

import { HomeOutlined, PlayCircleOutlined, ReadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import ReactPlayer from 'react-player';
import { CoronavirusOutlined } from "@mui/icons-material";
import { height } from "@mui/system";

const uploader = new Uploader({
  // Get production API keys from Upload.io
  apiKey: "free"
});


// initially, the selectedFilestate is set to null
// class MyCmpnents extends React.Component {
//   onChangeHandler = (event) => {
//     // Log event.target.files  is an array of all stored files
//     //   target.files[0]holds the actual file and its details.
//     //console.log(event.target.files[0])

//     // To pass the file to the state, setselectedFile state to event.target.files[0].
//     this.setState({
//       selectedFile: event.target.files[0],
//       loaded: 0,
//     });
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedFile: null,
//     };
//   }

//   // onClickhandle  will execute onClickHandler which sends a request to the server.
//   // The file from a state is appended as a file to FormData.

//   onClickHandler = () => {
//     const data = new FormData();
//     data.append("file", this.state.selectedFile);

//     // It sends POST request to http://localhost:8000/upload and gets response.
//     // Create form object and create POST request with axios. It needs endpoint URL and form data.
//     // We’ll use axios to send AJAX requests.
//     axios
//       .post("http://localhost:8000/upload", data, {
//         // receive two    parameter endpoint url ,form data
//       })

//       .then((res) => {
//         // then print response status
//         console.log("arslan"+res.statusText);
//       });

//     //  axios will send a request to the endpoint with a binary file in Form Data
//   };
// }   


const { SubMenu } = Menu;


class CourseDetails extends React.Component {

    state = {
        epics: [
            'Introduction',
            'Basic Concepts',
            'Schema Design',
            'Queries',
            'Transactions',
            'Review'
        ],
        openKeys: ['Introduction'],
        heading: 'What is OOP?',
        currentTopicType: 'video',
        subTopics: {
            'Introduction': [
                {
                    'type': 'video',
                    'title': 'What is OOP'
                },
                {
                    'type': 'reading',
                    'title': 'Introduction to OOP '
                }
            ],
            'Basic Concepts':[
                {
                    'type': 'video',
                    'title': 'Phsyical Data Indenpendence'
                },
                {
                    'type': 'reading',
                    'title': 'Data Models'
                }
            ],
            'Schema Design': [
                {
                    'type': 'video',
                    'title': 'ER Model'
                },
                {
                    'type': 'reading',
                    'title': 'Normalization'
                }
            ],
            'Queries': [
                {
                    'type': 'video',
                    'title': 'Relational Algebra'
                },
                {
                    'type': 'reading',
                    'title': 'SQL'
                }
            ],
            'Transactions': [
                {
                    'type': 'video',
                    'title': 'Transaction Basics'
                },
                {
                    'type': 'reading',
                    'title': 'Transaction Implementation'
                }
            ],
            'Review': [
                {
                    'type': 'video',
                    'title': 'Whats Next'
                },
                {
                    'type': 'reading',
                    'title': 'Final Remarks'
                }
            ]
        },
        showSectionAddModal: false,
        newSectionText: ''
    }

    setOpenKeys = (value) => {
        this.setState({
            openKeys: value
        });
    }

    onOpenChange = keys => {
        const latestOpenKey = keys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.epics.indexOf(latestOpenKey) === -1) {
          this.setOpenKeys(keys);
        } else {
            this.setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    onTopicSelected = (e) => {
        console.log(e.key);
        console.log(this.state.openKeys);
        
        let subTopics = this.state.subTopics;
        for (let subTopic of subTopics[this.state.openKeys[0]]) {
            if (subTopic['title'] === e.key) {
                this.setState({
                    heading: e.key,
                    currentTopicType: subTopic['type']
                })
            }
        }
    }

    showModal = () => {
        this.setState({
            showSectionAddModal: true
        })
    }
    
    handleOk = () => {
        let epics = this.state.epics;
        epics.push(this.state.newSectionText);
        
        let subTopics =  this.state.subTopics;
        subTopics[this.state.newSectionText] = []
        this.setState({
            showSectionAddModal:false,
            subTopics:subTopics,
            epics: epics,
        })
    };
    
    handleCancel = () => {
        this.setState({
            showSectionAddModal: false
        })
    }

    //editObject() {
     // console.log('edit',this.state.subTopics);
      // console.log(this.state.openKeys);
        
      // let subTopics = this.state.subTopics;
      // let epics = this.state.epics;
       
      //   epics.push(this.state.subTopics);
      //   this.setState({
      //       showSectionAddModal:false,
      //       subTopics:subTopics,
      //       epics: epics
      //   })
  //}

    render() {
        return (
          <div style={{ width: "1300px", height: "1000px" }}>
            <Row style={{ marginTop: 12, marginBottom: 12, marginLeft: 12 }}>
              <Breadcrumb>s
                <Breadcrumb.Item href="">
                  <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  <span>Courses</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  {new URLSearchParams(window.location.search).get(
                    "course_name"
                  )}
                </Breadcrumb.Item>
              </Breadcrumb>
            </Row>
            <Row>
              <Col span={6}>
                <Menu
                  mode="inline"
                  openKeys={this.state.openKeys}
                  onOpenChange={this.onOpenChange}
                  onSelect={this.onTopicSelected}
                >
                  {/* {this.state.epics.map((ele, index) => { */}
                  {this.state.epics.map((ele, index) => {
                    return (
                      <SubMenu
                        key={ele}
                        title={
                          <span>
                            {ele}
                            <EditOutlined style={{ marginLeft: 12 }} />
                            <DeleteOutlined style={{ marginLeft: 6 }} />
                          </span>
                        }
                      >
                        {this.state.subTopics[ele].map((ele2, index2) => {
                          return (
                            <Menu.Item
                              key={ele2["title"]}
                              icon={
                                ele2["type"] === "video" ? (
                                  <PlayCircleOutlined />
                                  // <ReactPlayer
                                  //   width="800px"
                                  //   height="400px"
                                  //   controls
                                  //   url="https://www.youtube.com/watch?v=SiBw7os-_zI"
                                  //   onReady={() =>
                                  //     console.log("onReady callback")
                                  //   }
                                  //   onStart={() =>
                                  //     console.log("onStart callback")
                                  //   }
                                  //   onPause={() =>
                                  //     console.log("onPause callback")
                                  //   }
                                  //   onEnded={() =>
                                  //     console.log("onEnded callback")
                                  //   }
                                  //   onError={() =>
                                  //     console.log("onError callback")
                                  //   }
                                  // />
                                ) : (
                                  <ReadOutlined />
                                )
                              }
                            >
                              {ele2["title"]}
                            </Menu.Item>
                          );
                        })}
                      </SubMenu>
                    );
                  })}
                </Menu>
                <Button
                  type="primary"
                  style={{ width: "94%", marginLeft: 12, marginRight: 12 }}
                  onClick={() => this.showModal(true)}
                >
                  Add New Section
                </Button>
              </Col>
              <Col span={18}>
                <div style={{ marginLeft: 12, marginRight: 36 }}>
                  <h2>{this.state.heading}</h2>
                  {this.state.currentTopicType === "video" ? (
                    <span>
                      <p>
                        Here is the introductional video of OOP.
                      </p>
                      <div
                      // style={{
                      //   height: 600,
                      //   width: 800,
                      //   border: "1px solid black",
                      //   borderRadius: 5,
                      // }}
                      >
                        {/* <PlayCircleOutlined
                          style={{
                            fontSize: 48,
                            marginTop: 120,
                            marginLeft: 380,
                          }}
                        /> */}
                        <ReactPlayer
                          width="800px"
                          height="400px"
                          controls
                          url="https://www.youtube.com/watch?v=SiBw7os-_zI"
                          onReady={() => console.log("onReady callback")}
                          onStart={() => console.log("onStart callback")}
                          onPause={() => console.log("onPause callback")}
                          onEnded={() => console.log("onEnded callback")}
                          onError={() => console.log("onError callback")}
                        />
                      </div>
                    </span>
                  ) : (
                    <span>
                      <p>
                        Object-oriented programming – As the name suggests uses
                        objects in programming. Object-oriented programming aims
                        to implement real-world entities like inheritance,
                        hiding, polymorphism, etc in programming. The main aim
                        of OOP is to bind together the data and the functions
                        that operate on them so that no other part of the code
                        can access this data except that function.
                      </p>
                      <h2 style={{  textAlign: "left" }}>Class: </h2>
                      <p>
                        The building block of C++ that leads to Object-Oriented
                        programming is a Class. It is a user-defined data type,
                        which holds its own data members and member functions,
                        which can be accessed and used by creating an instance
                        of that class. A class is like a blueprint for an
                        object.
                      </p>
                      <h2 style={{  textAlign: "left" }}>For Example: </h2>
                      <p>
                        Consider the Class of Cars. There may be many cars with
                        different names and brand but all of them will share
                        some common properties like all of them will have 4
                        wheels, Speed Limit, Mileage range etc. So here, Car is
                        the class and wheels, speed limits, mileage are their
                        properties.
                      </p>
                      <h2 style={{  textAlign: "left" }}>Some Characteristics of OOP : </h2>
                      <img src="images/OOPs-Concepts.jpg" alt="OOP Concepts" style={{marginleft: "auto", marginright: "auto"}}/>
                    </span>
                  )}
                </div>
                <br></br>
                {/* <Button type='default' style={{marginTop: 12, marginLeft:360}}>Update Section Content</Button> */}
                <UploadButton
                  uploader={uploader}
                  options={{ multi: true }}
                  onComplete={(files) => console.log(files)}
                >
                  {({ onClick }) => (
                    <Grid container justify="center">
                      {/* add change handler t0 pick the file on change. */}
                      {/* <input type="file" name="file" onChange={this.onChangeHandler}/>   */}
                      <Button onClick={onClick} >Upload </Button>
                      {/* <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload a File</button>  */}
                    </Grid>
                  )}
                </UploadButton>
              </Col>
            </Row>
            <Modal
              title="Add New Section"
              visible={this.state.showSectionAddModal}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Input
                placeholder="Section Name"
                onChange={(e) => {
                  this.setState({ newSectionText: e.target.value });
                }}
              />
            </Modal>
          </div>
        );
    }


    

  //   render() {
  //     return (
  //       <div style={{ width: "1300px", height: "1000px" }}>
  //         <Row style={{ marginTop: 12, marginBottom: 12, marginLeft: 12 }}>
  //           <Breadcrumb>
  //             <Breadcrumb.Item href="">
  //               <HomeOutlined />
  //             </Breadcrumb.Item>
  //             <Breadcrumb.Item href="">
  //               <span>Courses</span>
  //             </Breadcrumb.Item>
  //             <Breadcrumb.Item>
  //               {new URLSearchParams(window.location.search).get(
  //                 "course_name"
  //               )}
  //             </Breadcrumb.Item>
  //           </Breadcrumb>
  //         </Row>
          
                  
  //       </div>
  //     );
  // }





}
export default CourseDetails;