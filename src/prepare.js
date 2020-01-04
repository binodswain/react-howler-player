import React, { Component } from "react";
import PropTypes from "prop-types";
import  "./styles.scss";

export default class Prepare extends Component {
    static propTypes = {
        loadingText: PropTypes.string,
        isDark: PropTypes.bool
    };

    render() {
        const {
            loadingText = "Preparing",
            isDark
        } = this.props;

        let className = [
            "player", "r-howler",
            isDark ? "dark-themed" : "light-themed"
        ].join(" ");

        return (
            <div className={className}>
                <div className={`prepare notready`}>
                    {loadingText}
                </div>
            </div>
        );
    }
}
