import React from "react";
import PropTypes from 'prop-types';
import {StatisticsItem, Container} from "../App.styled"

const Statistics = ({good, neutral, bad, total,  positivePercentage }) => {
  return (
    <Container>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total} </StatisticsItem>
        <StatisticsItem>Positive feedback: {positivePercentage} </StatisticsItem>
      </Container>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;


