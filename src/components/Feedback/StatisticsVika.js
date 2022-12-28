export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <Section title="Statistics">
      <StatisticEl>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItemTotal>Total: {totalFeedback}</StatisticItemTotal>
        <StatisticItemSecondary>
          Positive feedback: {positiveFeedbackPercentage}%
        </StatisticItemSecondary>
      </StatisticEl>
    </Section>
  );
};