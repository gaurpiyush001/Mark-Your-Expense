import './Card.css';

//now this Card Container component which will work as a shell around our expense item conttent
function Card(props){//this is special prop, that every componenet recieve and we will use this to make it a wrapper component

    //Below Code will allow Custom Components to accept ClassNames and has an affect
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;//value of props.children is the in between content between opening and closing tag of your custom components
}

export default Card;