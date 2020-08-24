import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import IndexPage from "@/pages/IndexPage";
import "@/global-styles/reset.css";
import "@/global-styles/base.css";

const basePath = window.location.pathname.indexOf('react_project_foundation') !== -1
    ? '/react_project_foundation/dist'
    : '';

ReactDOM.render(
    <Router basename={basePath}>
        <IndexPage/>
    </Router>,
    document.getElementById('app')
);