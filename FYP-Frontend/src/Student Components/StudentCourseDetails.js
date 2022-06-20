import React from "react";
import "antd/dist/antd.css";
import {Row, Col, Collapse, Breadcrumb, Menu} from 'antd';

import { HomeOutlined, PlayCircleOutlined, ReadOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


class StudentCourseDetails extends React.Component {

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
        heading: 'About the Author',
        currentTopicType: 'video',
        subTopics: {
            'Introduction': [
                {
                    'type': 'video',
                    'title': 'About the Author'
                },
                {
                    'type': 'reading',
                    'title': 'Preface'
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
        }
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
            if (subTopic['title'] == e.key) {
                this.setState({
                    heading: e.key,
                    currentTopicType: subTopic['type']
                })
            }
        }
    }

    render() {
        return <div style={{width: "100%"}}>
                <Row style={{marginTop: 12, marginBottom: 12, marginLeft: 12}}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                        <HomeOutlined />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                        <span>Courses</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{new URLSearchParams(window.location.search).get("course_name")}</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Col span={6}>
                    <Menu mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} onSelect={this.onTopicSelected}>
                        {this.state.epics.map((ele, index) => {
                            return <SubMenu key={ele} title={ele}>
                                {this.state.subTopics[ele].map((ele2, index2) => {
                                    return <Menu.Item 
                                                key={ele2['title']}
                                                icon={(ele2['type'] == 'video')?<PlayCircleOutlined />:<ReadOutlined />}
                                            >
                                            {ele2['title']}
                                        </Menu.Item>
                                })}
                            </SubMenu>;
                        })}
                    </Menu>

                    </Col>
                    <Col span={18}>
                        <div style={{marginLeft: 12, marginRight: 36}}>
                            <h2>{this.state.heading}</h2>
                            {(this.state.currentTopicType == 'video')?
                            <span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <div style={{height:300, width:800, border: "1px solid black", borderRadius: 5}}>
                                    <PlayCircleOutlined style={{fontSize: 48, marginTop:120, marginLeft: 380}} />
                                </div>
                            </span>:
                            <span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </span>}
                        </div>
                    </Col>
                </Row>
            </div>
    }
}

export default StudentCourseDetails;