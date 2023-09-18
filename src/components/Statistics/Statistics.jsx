import {
  StatList,
  StatListItem,
  StatSection,
  StatTitle,
  StatValue,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <span>{label}</span>
            <StatValue>{percentage}%</StatValue>
          </StatListItem>
        ))}
      </StatList>
    </StatSection>
  );
};

export default Statistics;
