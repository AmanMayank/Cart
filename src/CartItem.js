import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ""
        }
    }

    increaseQuantity = () => {
        // this.setState({
        //     qty:this.state.qty + 1
        // });

        this.setState((prevState) => {
            return{
                qty:prevState.qty+1
            } 
        });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty===0){
            return
        }
        this.setState((prevState) => {
            
            return{
                qty:prevState.qty-1
            }
            
        });
    }

    render(){
        const{price, title, qty} = this.state;
        return(
           <div className="cart-item">
               <div className="left-block">   
                    <img style={styles.image} alt = "Phone"/> 
               </div>
               <div className="right-block">
                   <div style ={{fontSize:25}}>{title}</div>
                   <div>Rs {price}</div>
                   <div>Qty: {qty}</div>
                   <div className="cart-item-actions">
                    {/*Buttons*/}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src= "https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                        onClick = {this.increaseQuantity}
                        />
                        <img
                        alt="decrease" 
                        className="action-icons" 
                        src= "https://www.flaticon.com/svg/static/icons/svg/659/659892.svg"
                        onClick = {this.decreaseQuantity}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src= "https://www.flaticon.com/svg/static/icons/svg/1345/1345823.svg"
                        /> 
                   </div>
               </div>
           </div> 
        );
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;