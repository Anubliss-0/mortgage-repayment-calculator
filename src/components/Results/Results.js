function Results({ monthlyRepayments, total }) {
    return (
        <div>
            <span>{monthlyRepayments}</span>
            <br></br>
            <span>{total}</span>
        </div>
    );
}

export default Results;