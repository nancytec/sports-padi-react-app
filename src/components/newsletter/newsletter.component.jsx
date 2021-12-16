import React, {useState} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "../form-elements/form-input.component";
import FormButton from "../form-elements/form-button.component";

import { contactRegistrationStart } from "../../redux/newsletter/contact.actions";
import {selectContactLoadingStatus} from "../../redux/newsletter/contact.selectors";

const Newsletter = ({ contactRegistrationStart, isLoading }) => {

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        name: ''
    });
    const { email, name } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        contactRegistrationStart(email, name)
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    };


    return (
        <div className="col-sm-6">
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <h3 style={{
                    textAlign: 'center',
                    marginBottom: '1rem'
                }}>Know When We <span
                    style={{
                        color: '#00a01e'
                    }}>Launch</span></h3>
                <div className="mb-3">
                    <FormInput
                        type="text"
                        className="form-control"
                        id="exampleText"
                        aria-describedby="textHelp"
                        placeholder="Name"
                        value={name}
                        name='name'
                        handleChange={handleChange}
                        required
                    />

                </div>
                <div className="mb-3">
                    <FormInput
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        placeholder="Email"
                        name="email"
                        value={email}
                        handleChange={handleChange}
                        required
                    />
                </div>
                <FormButton type="submit" disabled={isLoading} className="btn" >{isLoading? 'Please wait...': 'Notify Me'}</FormButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    contactRegistrationStart: (email, name) => dispatch(contactRegistrationStart({ email, name }))
});
const mapStateToProps = createStructuredSelector({
    isLoading: selectContactLoadingStatus
})
export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);