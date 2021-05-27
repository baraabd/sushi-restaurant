import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Läcker mat, levereras till dig</h2>
      <p>
      Välj din favoritmåltid från vårt breda urval av tillgängliga måltider
         och njut av en utsökt lunch eller middag hemma.
      </p>
      <p>
      Alla våra måltider tillagas med högkvalitativa ingredienser, just-in-time och
         naturligtvis av erfarna kockar!
      </p>
    </section>
  );
};

export default MealsSummary;
