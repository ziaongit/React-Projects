class PomodoroTimer extends React.Component {
    constructor() {
        super();
        this.state = {
            timeElapsed: 0
        };
    }
    totalTime(timeOne, timeTwo) {
        var totalTime = timeOne + timeTwo;
        return totalTime;
    }

    componentDidMount() {
        this.interval = setInterval(this.elapseTime.bind(this), 1000);
        this.setState({ start: new Date() });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    elapseTime() {
        var currentTime = new Date();
        var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);

        this.setState({ timeElapsed: timeElapsed });

        if (this.state.timeElapsed >= this.props.workingTime * 60) {
            clearInterval(this.interval);
            alert('Time for break!');
        }
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'This time runs for ',
                this.props.workingTime,
                ' minutes, followed by rest of ',
                this.props.restingTime,
                ' minutes'
            ),
            React.createElement(
                'p',
                null,
                'For a total time of ',
                this.totalTime(this.props.workingTime, this.props.restingTime),
                ' minutes.'
            ),
            React.createElement(
                'p',
                null,
                'Timer rest time: ',
                this.props.restingTime,
                ' minutes.'
            ),
            React.createElement(
                'p',
                null,
                'There are ',
                this.state.timeElapsed,
                ' seconds elapsed.'
            )
        );
    }
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));