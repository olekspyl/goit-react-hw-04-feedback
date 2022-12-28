
export const Section = ({ title, children }) => {
  return (
    <SectionCommon>
      {title && <Header>{title}</Header>}
      {children}
    </SectionCommon>
  );
};