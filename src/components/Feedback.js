import React, { Component, useState } from 'react'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section';
import Notification from './Statistics/Notification';
import Statistics from './Statistics/Statistics'

const Feedback = () => {
    const [feadback, setFeadback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })
    const onLeaveFeedback = (e) => {
        const {name} = e.target;
        setFeadback((prev) => ({...prev, [name]: prev[name] + 1}))
    }
    const countTotalFeedback = (good, neutral, bad) => {
        return good + neutral + bad;        
    }
    const countPositiveFeedbackPercentage = (good, total) => {
       return good / total * 100
    }
    const {good, neutral, bad} = feadback
    const total = countTotalFeedback(good, neutral, bad)
    const positivePercentage = countPositiveFeedbackPercentage(good, total)
    return (
        <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={feadback} onLeaveFeedback={onLeaveFeedback} />
                </Section>
                <Section title="Statistics">
                    {total ? 
                    <Statistics 
                        good={good} 
                        neutral={neutral} 
                        bad={bad} 
                        total={total} 
                        positivePercentage={positivePercentage} /> :
                    <Notification message="No feedback given"/> }
                </Section>
            </>
    );
}

export default Feedback;


