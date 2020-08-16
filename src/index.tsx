import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import IndexPage from "@/pages/IndexPage";
import "@/styles/reset.css";
import "@/styles/base.css";

ReactDOM.render(
    <Router>
        <IndexPage/>
    </Router>,
    document.getElementById('app')
);