import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoginModel from '../LoginModal/LoginModal';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.openLoginForm = this.openLoginForm.bind(this);
    }

    openLoginForm() {
        alert('Tung ngu vkl');
        var form = document.getElementById('loginDialog');
        if (form == null) {
            alert('nothing');
        }
        alert(form.value);
    }

    render() {
        return (
            
            <nav className="navbar bg-dark navbar-dark container-fluid">
            <LoginModel />
        <div className="row w-100">
            {/* <!-- icon or logo --> */}
            <div className="col-md-auto">
                <a className="navbar-brand" href="/">
                    Badminton Shop Online
                </a>
            </div>
            {/* <!-- close logo --> */}

            {/* <!-- search bar --> */}
            <div className="col-md-6">
                <form action="" className="form-inline mw-100">
                    <div className="input-group w-100">
                        <input className="form-control border" type="text" placeholder="Search" aria-label="Search" id="search" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" onClick={this.openLoginForm}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <!-- close search bar --> */}

            {/* <!-- shopping cart --> */}
            <div className="col-md-auto">
                <a href="" className="navbar-brand fa fa-shopping-cart fa-2x" role="button" data-toggle="modal" data-placement="bottom" title="Tài khoản" data-target="#shoppingCartDialog"></a>
            </div>

            {/* <!-- login --> */}
            <div className="col-md-auto">
                <a href="" className="navbar-brand fa fa-user fa-2x" role="button" data-toggle="modal" data-placement="bottom" title="Tài khoản"
                    data-target="#loginDialog"></a>
            </div>
            <div className="col-md-auto">
                <p id="user"></p>
            </div>
            <div className="col-md-auto">
                <a href="/logout" id="logout"></a>
            </div>
        </div>
        {/* <!-- close div row--> */}

    </nav>
        )
    }
}

export default TopBar;