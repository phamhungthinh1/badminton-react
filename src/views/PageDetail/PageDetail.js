import React, { Component } from 'react';
import TopBar from '../TopBar/TopBar'
import PageDetailBody from './PageDetailBody';

class PageDetail extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <PageDetailBody />
            </div>
        )
    }
}

export default PageDetail;