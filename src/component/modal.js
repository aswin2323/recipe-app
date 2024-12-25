export default function Modal({ viewData }) {
  // console.log(viewData);

  return (
    <div
      className="modal fade"
      id={`${viewData.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Preparation Details:
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Ingredients: </b>
                <ul>
                  {viewData.ingredients.map((inst, index) => (
                    <li key={index}>{inst}</li>
                  ))}
                </ul>
              </li>
              <li className="list-group-item">
                <b>Instructions: </b>
                <ol>
                  {viewData.instructions.map((inst, index) => (
                    <li key={index}>{inst}</li>
                  ))}
                </ol>
              </li>
              <li className="list-group-item">
                <b>Calories: </b>
                {viewData.caloriesPerServing}
              </li>
              <li className="list-group-item">
                <b>Preparation-Time: </b>
                {viewData.prepTimeMinutes}
              </li>
              <li className="list-group-item">
                <b>Meal Type: </b>
                {viewData.mealType}
              </li>
              <li className="list-group-item">
                <b>Difficulty: </b>
                {viewData.difficulty}
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
