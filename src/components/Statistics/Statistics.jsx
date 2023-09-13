const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, procentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{procentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
