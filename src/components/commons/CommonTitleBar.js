import React, { Component } from 'react';
import { TitleBar, Image } from '@sencha/ext-modern';
import CommonTopNav from './CommonTopNav';
import styles from './CommonTitleBar.cm.scss';

class CommonTitleBar extends Component {
    constructor(props) {
        super(props);
        this.title = "通州区生态林养护精细化管理信息系统";
    }
    render() {
        return (
            <TitleBar title={this.title} docked="top">
                <CommonTopNav />
                <Image align="right" width="36px" height="36px" className={styles.avatar}></Image>
            </TitleBar>
        );
    }
}

export default CommonTitleBar;