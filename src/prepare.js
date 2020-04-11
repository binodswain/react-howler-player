import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./styles.scss";

export default class Prepare extends Component {
    static propTypes = {
        loadingText: PropTypes.string,
        isDark: PropTypes.bool,
        preparingComp: PropTypes.any,
    };

    render() {
        const { loadingText = "Preparing", isDark, preparingComp } = this.props;

        const className = [
            style["player"],
            style["r-howler"],
            style[isDark ? "dark-themed" : "light-themed"],
        ].join(" ");

        const preparing = preparingComp || (
            <div className={[style["prepare"], style["notready"]].join(" ")}>{loadingText}</div>
        );

        return <div className={className}>{preparing}</div>;
    }
}
