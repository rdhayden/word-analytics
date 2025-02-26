export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat label={'words'} number={stats.words} />
      <Stat label={'characters'} number={stats.characters} />
      <Stat label={'instagram'} number={stats.instagram} />
      <Stat label={'facebook'} number={stats.facebook} />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
