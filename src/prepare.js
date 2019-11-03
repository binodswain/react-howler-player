import React, { Component } from 'react'

export default class Prepare extends Component {
    render() {
        let className = [
            "player", "r-howler",
            this.props.isDark ? "dark-themed" : "light-themed"
        ].join(" ");

        return (
            <div className={className}>
                <div className="prepare notready">
                    Preparing
                </div>
            </div>
        )
    }
}
