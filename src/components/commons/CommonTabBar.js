import React, { Component } from 'react';
import styles from './CommonTabBar.cm.scss';
import classNames from 'classnames/bind';
import deepEqual from 'deepequal';
import propTypes from 'prop-types';
let cx = classNames.bind(styles);
class CommonTabBar extends Component {
    constructor(props) {
        super(props);
        this.onTabClick = this.onTabClick.bind(this);
        this.state = {
            tabs: [],
            selectedIds: [],
        }
    }

    componentDidMount() {
        const { tabs } = this.props;
        this.cloneTabs(tabs);
    }

    componentWillReceiveProps(props, nextProps) {
        if (!deepEqual(props.tabs, nextProps.tabs)) {
            this.cloneTabs(nextProps.tabs);
        }
        
    }

    cloneTabs (tabs) {
        const copyTabs = [];
        const { selectedIds } = this.state;
        let hasActive = false;
        const { allowMulti, onTabChange } = this.props;
        tabs.forEach((tab) => {
            let active = false;
            if (!hasActive || allowMulti) {
                active = tab.active || false;
                if (active) {
                    hasActive = true;
                    selectedIds.push(tab.id);
                }
            }
            copyTabs.push({ active, ...tab });
        })
        if (!hasActive && copyTabs.length > 0) {
            copyTabs[0] = { ...copyTabs[0], active: true };
            selectedIds.push(copyTabs[0].id);
        }
        onTabChange(selectedIds);   
        this.setState({
            tabs: copyTabs,
            selectedIds,
        });
    }
    
    onTabClick (index) {
        return () => {
            const { tabs, selectedIds } = this.state;
            const { allowMulti, onTabChange } = this.props;
            let newTabs = tabs;
            let newSelectedIds = selectedIds;
            if (newSelectedIds.indexOf(newTabs[index]) > -1) {
                return;
            }
            if (!allowMulti) {
                newSelectedIds = [];
                newTabs = newTabs.map(tab => ({ ...tab, active: false }));
            }
            newSelectedIds.push(newTabs[index].id);
            newTabs[index] = { ...newTabs[index], active: true };
            onTabChange(newSelectedIds);
            this.setState({
                tabs: newTabs,
                selectedIds: newSelectedIds,
            });
        }
    }
    render() {
        const { tabs } = this.state;
        return (
            <div className={styles.panelContainer}>
                {tabs.map((tab, idx) => <span className={cx(styles.tab, { active: tab.active }) } onClick={this.onTabClick(idx)} >{tab.text}</span>) }
            </div>
        );
    }
}

CommonTabBar.defaultProps = {
    tabs: [],
    allowMulti: false,
    onTabChange: () => {},
};

CommonTabBar.propTypes = {
    tabs: propTypes.array.isRequired,
    allowMulti: propTypes.bool.isRequired,
    onTabChange: propTypes.func,
}



export default CommonTabBar;