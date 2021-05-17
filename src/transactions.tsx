const Transactions = (props: any) =>{
    return (
        <div className="transactions">
            <h3 style= {{textAlign:'left'}}>Transactions: </h3>
            {
                props.transactions.map((data:any,i:number)=>{
                    return (
                        data.date &&
                        <p key={i}>
                            {data.date + " - " + data.amount}
                        </p>
                    )
                })
            }
        </div>
    );
}

export default Transactions;