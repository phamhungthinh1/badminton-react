import React, { Component } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { connect } from "react-redux";
class ShoppingCartModal extends Component {
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      product: []
    };
    
  }

  handleDeleteItem(productId) {
    this.props.deleteFromCart(productId);
    const listShoppingProduct = this.props.shoppingCart.product;
    this.setState({
      show: true,
      product: listShoppingProduct
    });
  }

  handleAddItem(product) {
    console.log("add item");
    
    this.props.addItem(product);
    const listShoppingProduct = this.props.shoppingCart.product;
    this.setState({
      show: true,
      product: listShoppingProduct
    });
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    const listShoppingProduct = this.props.shoppingCart.product;
    this.setState({
      show: true,
      product: listShoppingProduct
    });
  }



  render() {
    return (
      <div>
        <a
          onClick={this.handleShow}
          href=""
          className="navbar-brand fa fa-shopping-cart fa-2x"
          role="button"
          data-toggle="modal"
          data-placement="bottom"
          title="Tài khoản"
        />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.product.map((product, i) => (
                  <TableRow
                    key={i}
                    data={product}
                    number={i}
                    onDeleteItem={() => this.handleDeleteItem(product.id)}
                    onAddItem={() => this.handleAddItem(product)}
                  />
                ))}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Payment
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

class TableRow extends Component {
  render() {
    var {id, name, price, count } = this.props.data
    return (
      <tr>
        <td>{this.props.number + 1}</td>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price * count}</td>
        <td>{count}</td>
        <td>
        <button
            className="btn btn-primary"
            onClick={this.props.onAddItem}
          >
            Add
          </button>
          <button className="primary" onClick={this.props.onDeleteItem}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: productId => {
      dispatch({
        type: "DELETE_ITEM_SHOPPING",
        productId: productId
      });
    },
    addItem: product => {
      dispatch({
        type: "ADD_QUANTITY_ITEM_SHOPPING",
        product: product
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartModal);
