import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import UserTable from "./UserTable";
import { connect } from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formElement = event.target;
        const formData = new FormData(formElement);
        const userName = formData.get("InputName");
        this.props.addNewUsername(userName);
    }

    render() {
        let buttonClasses = `btn ${this.props.buttonTheme}`;
        return (
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-xs-offset-3">
                        <div class="row">
                            <div class="col-xs-12">
                                <UserTable userList={this.props.userList} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <form
                                    class="form-inline"
                                    onSubmit={this.handleSubmit}
                                >
                                    <div class="form-group">
                                        <label for="InputName1">Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="InputName1"
                                            name="InputName"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={buttonClasses}
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userList: state.userList,
        buttonTheme: ownProps.buttonTheme,
    };
};

const mapDispatchToProps = (dispatch) => ({
    addNewUsername: (userName) =>
        dispatch({
            type: "ADD_USER",
            payload: userName,
        }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
