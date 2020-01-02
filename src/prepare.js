import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./styles.scss";

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
            style["player"], style["r-howler"],
            style[isDark ? "dark-themed" : "light-themed"]
        ].join(" ");

        return (
            <div className={className}>
                <div className={`${style["prepare"]} ${style["notready"]}`}>
                    {loadingText}
                </div>
            </div>
        );
    }
}
