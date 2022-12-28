export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <FeedbackButtonList>
        {options.map((option, idx) => {
          return (
            <li key={idx}>
              <FeedbackButton
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </FeedbackButton>
            </li>
          );
        })}
      </FeedbackButtonList>
    </Section>
  );
};