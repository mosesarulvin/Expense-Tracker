import { useEffect, useState } from 'react';

const ExpenseForm = (props : any) => {

    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    const [validation, setValidation] = useState(false);    
    const [insufficient, setInsufficient] = useState(false);    

    const addBalance = () => {
        if (amount > 0) {
            setBalance(balance + amount);
            transactions(amount, "Add");
            setValidation(false);
            setInsufficient(false);
        }else{
            setValidation(true);
        }
    }

    const removeBalance = () => {
        if (amount > 0) {
            if(balance >= amount){
                setBalance(balance - amount);
                transactions(amount, "Remove");
                setValidation(false);
            }
            else{
                setInsufficient(true);
            }
        }else{
            setValidation(true);
        }
    }

    var [transactionsData,setTransactionsData] = useState([{}]);

    const transactions = (amount: number , type : string) =>{
        setTransactionsData(transactionsData => [...transactionsData,{
            amount : `${amount} - ${type}`,
            date: new Date().toISOString()
        }]);
    }

    const handleChange = (event :any) => {
        const value = parseInt(event.target.value)
        if (value > 0 ) {
            setAmount(value);
        } 
    }   

    useEffect(()=>{
        setAmount(0);
        props.setTransactions(transactionsData);
    },[balance])

    return (
        <div className="expenseForm">
            <div>
                <h3>Balance : {balance}</h3>
            </div>
            <div className="formInput">
                <input style={{borderColor: validation ? "#ff000040" : "white" }} type="number" value={amount} onChange={handleChange} />
                <div>{ validation && <span className="errorMessage">Invalid Entry</span> }
                {insufficient && <span className="errorMessage">Insufficient</span> }</div>
            </div>
            <div>
                <button className="formButton" onClick={addBalance}>Add</button>  
                <button className="formButton" onClick={removeBalance}>Remove</button>
            </div>
        </div>
    );
}

export default ExpenseForm;