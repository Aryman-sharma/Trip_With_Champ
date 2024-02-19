import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Trip With Champ</h2>
      </div>

      {/* important we can send the data of array and map it to every card using map function   */}
      <div className="cards">
        {tours.map((key) => {
          {/* obbject clone krke copy bhej di  */}
          return <Card key={key.id} {...key} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
