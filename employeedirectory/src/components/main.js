import React from "react";
import DataTable from "./DataTable";
import SearchBox from "./SearchBox";
import "../styles/main.css";
//import json file employees

export default class Main extends React.Component {
    state = {
        employees: employees,
        sorting: "ascending"
    }
        searchEmployee = e => {

        }
        sortName = () => {

        }
        render () {
        return (
            <>
             <SearchBox searchEmployee={this.searchEmployee}/>
             <DataTable sortName={this.sortName} employees={this.state.employees}/>
            </>
        );
    };
};
