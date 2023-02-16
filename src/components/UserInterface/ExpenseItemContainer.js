import './ExpenseItemContainer.css'

function ExpenseItemContainer(props) {
    const classes = 'ExpenseItemContainer ' + props.className
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default ExpenseItemContainer
