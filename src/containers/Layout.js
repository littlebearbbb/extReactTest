import React, { Component } from 'react'
import { Container, Button, Sheet, Panel, Toolbar, SegmentedButton, Image, Spacer } from '@sencha/ext-modern';
import { Transition} from '@sencha/ext-react-transition';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { medium, large } from './responsiveFormulas';
import ExamList from '@containers/exams/ExamList';
import CommonTitleBar from '@components/commons/CommonTitleBar';
// import Home from './Home/Home';
// import About from './About/About';
// import NavMenu from './NavMenu';
var REACT_VERSION = require('react').version

/**
 * The main application view and routes
 */
class Layout extends Component {

    title = "通州区生态林养护精细化管理信息系统";

    state = {
        showAppMenu: false
    }

    toggleAppMenu = () => {
        this.setState({ showAppMenu: !this.state.showAppMenu });
    }

    onHideAppMenu = () => {
        this.setState({ showAppMenu: false });
    }

    navigate = (path) => {
        this.setState({ showAppMenu: false });
        this.props.history.push(path);
    }

    render() {
        const { showAppMenu } = this.state;
        const { location } = this.props;

        const navMenuDefaults = {
            onItemClick: this.navigate,
            selection: location.pathname
        }

        return (
            <Container scrollable="x">
                <Panel minWidth={1200}>
                    <CommonTitleBar />
                </Panel>
                <Switch>
                    <Redirect from="/" to="/exam" exact></Redirect>
                    <Route path="/exam" component={ExamList} />
                </Switch>
                
            </Container>
            // <Container fullscreen layout="fit">
            //     <TitleBar title={this.title} docked="top">
            //         {Ext.platformTags.phone && (
            //             <Button align="left" iconCls="x-fa fa-bars" handler={this.toggleAppMenu} ripple={false}/>
            //         )}
            //     </TitleBar>
            //     {Ext.platformTags.phone ? (
            //         <Sheet displayed={showAppMenu} side="left" onHide={this.onHideAppMenu}>
            //             <Panel scrollable title="TestApp">
            //                 <NavMenu {...navMenuDefaults} width="250"/>
            //             </Panel>
            //         </Sheet>
            //     ) : (
            //         <Panel scrollable docked="left" shadow zIndex={2}>
            //             <NavMenu
            //                 {...navMenuDefaults}
            //                 responsiveConfig={{
            //                     [medium]: {
            //                         micro: true,
            //                         width: 56
            //                     },
            //                     [large]: {
            //                         micro: false,
            //                         width: 200
            //                     }
            //                 }}
            //             />
            //         </Panel>
            //     )}
            //    <Switch>
            //       <Route path="/" component={Home} exact/>
            //       <Route path="/about" component={About}/>
            //     </Switch>
            // </Container>
        );
    }
}

export default withRouter(Layout);