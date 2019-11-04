import React, { Component } from 'react'

export default class Prepare extends Component {
    render() {
        const {
            loadingText = 'Preparing'
        } = this.props
        let className = [
            "player", "r-howler",
            this.props.isDark ? "dark-themed" : "light-themed"
        ].join(" ");

        return (
            <div className={className}>
                <div className="prepare notready">
                    {loadingText}
                </div>
            </div>
        )
    }
}
