import React, { Component } from 'react';
import { Container, Pannel } from '@sencha/ext-modern';
import CommonTabBar from '@components/commons/CommonTabBar';
import { ENGINE_METHOD_ALL } from 'constants';
const tabTypes = {
    ALL: 1,
    NOPUBLISH: 2,
    PUBLISHED: 3,
}

class ExamList extends Component {
    constructor(props) {
        super(props);
        this.tabs = [{
            id: tabTypes['ALL'],
            text: '全部(4)'
        },{
            id: tabTypes['NOPUBLISH'],
            text: '未发布(2)'
        },{
            id: tabTypes['PUBLISHED'],
            text: '已发布(1)'
        }];
        this.onTabChange = this.onTabChange.bind(this);
    }
    onTabChange(selectedIds) {
        
    }
    render() {
        return (
            <Container>
                <CommonTabBar tabs={this.tabs} onTabChange={this.onTabChange} />
            </Container>
        )
    }
}

export default ExamList;