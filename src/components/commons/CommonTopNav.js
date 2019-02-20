import React, { Component } from 'react';
import { Button, Toolbar, SegmentedButton } from '@sencha/ext-modern';
import { withRouter } from 'react-router-dom';

@withRouter
class CommonTopNav extends Component {
    constructor(props) {
        super(props);
        this.routeList = [{
            path: '/quest',
            text: '任务列表',
        }, {
            path: '/standing_books',
            text: '台账管理',
        }, {
            path: '/question',
            text: '问题列表',
        }, {
            path: '/data',
            text: '统计分析',
        }, {
            path: '/inspect',
            text: '检查报告',
        }, {
            path: '/exam',
            text: '综合考评'
        }, {
            path: '/user',
            text: '用户管理'
        }, {
            path: '/announce',
            text: '通知公告',
        }];
        this.onNavBtnClick = this.onNavBtnClick.bind(this);
    }
    
    onNavBtnClick(path) {
        return () => {
            this.props.history.push(path);
        }
    }

    render() {
        const { location = {} } = this.props;
        const { pathname = '' } = location;
        return (
            <Toolbar align="right" className="theme-bg" shadow={false}>
                <SegmentedButton>
                    {this.routeList.map((v, i) =>
                        <Button ui="toolbar-btn" margin="0 2px" key={i} pressed={pathname.indexOf(v.path) >= 0} handler={this.onNavBtnClick(v.path)}>{v.text}</Button>
                    )}
                </SegmentedButton>
        </Toolbar>
        );
    }
}

export default CommonTopNav;