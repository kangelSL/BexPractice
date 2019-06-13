import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAccountId } from "../../actions/index";

class AccountDropdown extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.updateAccountId(event.target.value);
    }

    render() {
        return (
            <div>
                <select
                    onChange={this.handleChange}
                    style={{ width: 445, height: 25 }}
                >
                    {this.props.accounts &&
                        this.props.accounts.map(account => (
                            <option key={account.id} value={account.id}>
                                {account.name}
                            </option>
                        ))}
                </select>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts,
        currentAccountId: state.currentAccountId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateAccountId: form => dispatch(updateAccountId(form))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountDropdown);
