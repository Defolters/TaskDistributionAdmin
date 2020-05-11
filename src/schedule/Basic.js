import React, { Component } from 'react'
import Scheduler, { SchedulerData, ViewTypes } from 'react-big-scheduler'
import withDragDropContext from './withDnDContext'
import superDataProvider from '../superDataProvider'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Test = {
    workerTypes: [
        {
            id: 1,
            name: 'Type1'
        },
        {
            id: 2,
            name: 'Resource7Resource7Resource7Resource7Resource7',
        },
        {
            id: 3,
            name: 'TTTTERER',
        }
    ],

    tasks: [
        {
            id: 1,
            start: '2017-12-19 15:50:00',
            end: '2017-12-19 23:30:00',
            resourceId: 1,
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red'
        },
        {
            id: 7,
            start: '2017-12-19 15:40:00',
            end: '2017-12-20 23:30:00',
            resourceId: 2,
            title: 'I am exceptional',
            bgColor: '#FA9E95'
        },
    ],

}


class Basic extends Component {
    constructor(props) {
        super(props);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        var schedulerData = new SchedulerData(today, ViewTypes.Week, false, false, {
            startResizable: false,
            endResizable: false,
            movable: false,
            creatable: false,
            displayWeekend: false,
            weekCellWidth: '16%',
            dayStartFrom: 9,
            dayStopTo: 17,
            dayCellWidth: '4%',
        });
        schedulerData.localeMoment.locale('en');
        this.state = {
            viewModel: schedulerData
        }

        console.log("prop", props)
        var data = superDataProvider.getList('schedule').then((json) => {
            console.log("promise", json)
            
            Test.workerTypes = json.data.workerTypes
            Test.tasks = json.data.tasks

            schedulerData.localeMoment.locale('en');
            schedulerData.setResources(Test.workerTypes);
            schedulerData.setEvents(Test.tasks);

            this.render()
        })
        console.log("log", data)
    }

    render() {
        const { viewModel } = this.state;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <ArrowBackIcon onClick={() => this.props.history.go(-1)} />
                        </IconButton>
                        <Typography variant="h6" >
                            Расписание
                    </Typography>
                    </Toolbar>
                </AppBar>
                <div>
                    <Scheduler schedulerData={viewModel}
                        prevClick={this.prevClick}
                        nextClick={this.nextClick}
                        onSelectDate={this.onSelectDate}
                        onViewChange={this.onViewChange}
                        eventItemClick={this.eventClicked}
                        onScrollLeft={this.onScrollLeft}
                        onScrollRight={this.onScrollRight}
                        onScrollTop={this.onScrollTop}
                        onScrollBottom={this.onScrollBottom}
                        toggleExpandFunc={this.toggleExpandFunc}
                    />
                </div>
            </div>
        )
    }

    prevClick = (schedulerData) => {
        schedulerData.prev();
        schedulerData.setEvents(Test.tasks);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData) => {
        schedulerData.next();
        schedulerData.setEvents(Test.tasks);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(Test.tasks);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(Test.tasks);
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
        alert(`Title: ${event.title}`);
    };

    onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
        if (schedulerData.ViewTypes === ViewTypes.Day) {
            schedulerData.next();
            schedulerData.setEvents(Test.tasks);
            this.setState({
                viewModel: schedulerData
            });

            schedulerContent.scrollLeft = maxScrollLeft - 10;
        }
    }

    onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
        if (schedulerData.ViewTypes === ViewTypes.Day) {
            schedulerData.prev();
            schedulerData.setEvents(Test.tasks);
            this.setState({
                viewModel: schedulerData
            });

            schedulerContent.scrollLeft = 10;
        }
    }

    onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log('onScrollTop');
    }

    onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log('onScrollBottom');
    }

    toggleExpandFunc = (schedulerData, slotId) => {
        schedulerData.toggleExpandStatus(slotId);
        this.setState({
            viewModel: schedulerData
        });
    }
}

export default withDragDropContext(Basic)
