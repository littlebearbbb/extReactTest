import React, { Component } from 'react';
import { Container, FormPanel, FieldSet, TextField, DatePickerField } from '@sencha/ext-modern';
import CommonTabBar from '@components/commons/CommonTabBar';
import { ENGINE_METHOD_ALL } from 'constants';
import styles from './ExamList.cm.scss';
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
                <FormPanel layout={{ type: 'vbox', pack: 'center' }} ui="common-form-panel" shadow className={styles.inputContainer} >
                    <FieldSet layout="hbox">
                        <TextField placeholder="请输入" labelAlign="top" label="考核编号" className={styles.field} ></TextField>
                        <TextField placeholder="请输入" labelAlign="top" label="考核名称" className={styles.field} ></TextField>
                        <DatePickerField placeholder="请输入" labelAlign="top" label="创建时间" className={styles.field} language="cn"></DatePickerField>
                    </FieldSet>
                </FormPanel>
            </Container>
        )
    }
}

export default ExamList;