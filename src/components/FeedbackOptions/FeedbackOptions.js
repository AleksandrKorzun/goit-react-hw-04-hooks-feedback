import Button from '@material-ui/core/Button';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    
    return (
        <div>
            {Object.keys(options).map((option)=>
                <Button variant="contained" type="button" name={option} key={option} onClick={onLeaveFeedback} style={{backgroundColor: "green", marginRight: "10px"}}>{option}</Button>
            )}
        </div>
    );
}

export default FeedbackOptions;