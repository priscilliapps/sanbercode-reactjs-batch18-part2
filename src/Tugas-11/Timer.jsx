import React from 'react'

class Timer extends React.Component {

    state = {
        time: new Date(),
        number: 105,
        showTime: true
    }

    currentTime() {
        this.setState({
            time: new Date(),
        })
    }

    componentWillMount() {
        setInterval(() => this.currentTime())
        this.myInterval = setInterval(() => {
            const { number } = this.state

            if (number > 0) {
                this.setState(({ number }) => ({
                    number: number - 1
                }))
            }

            if (number === 0) {
                clearInterval(this.myInterval)
                this.setState(({ showTime: false }))
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    
    render() {
        return (
            <>
                { this.state.showTime && (
                    <h1>Sekarang Jam: {this.state.time.toLocaleTimeString("en-US")} </h1>
                )}
                <h1>Hitung Mundur: {this.state.number}</h1>
            </>
        )
    }
}

export default Timer