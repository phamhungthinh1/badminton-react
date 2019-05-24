import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginModal extends Component {

    render() {
        return (
            <div className="container">
                <div className="modal fade align-items-center" data-backdrop="static" data-keyboard="false" id="loginDialog" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Login</h3>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form action="/login" method="post" id="login_form">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-user-o"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control w-75" placeholder="Username" required="required" name="username" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                        </div>
                                        <input type="password" className="form-control w-75" placeholder="Password" required="required" name="password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="button" className="btn btn-primary btn-block btn-lg" value="Login" id="login_button" />
                                    </div>
                                    <div className="form-group">
                                        <input type="button" className="btn btn-danger btn-block btn-lg" value="Create New Account" id="register_button" />
                                    </div> 
                                </form>
                            </div>
                            <div className="modal-footer">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModal;