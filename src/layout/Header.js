import Logo from "../images/logo.png";
export default function Header(props) {
  return (
    <div className="d-flex justify-content-between align-items-center p-3" style={{backgroundColor:"black"}}>
      <img src={Logo} alt="name" width="230px" height="55px" style={{objectFit:"cover"}}/>
      <div className="input-group mb-3 pt-1" style={{ width: "26rem", height: "3rem" }}>
        <input
          type="text"
          placeholder="search..."
          className="form-control"
          value={props.searchTerm}
          onChange={(e)=>props.setSearchTerm(e.target.value)}
          aria-label="Recipient's username" 
          aria-describedby="button-addon2"
          
        />
        <button type="submit" className="btn btn-dark btn-lg" id="button-addon2">
          Search
        </button>
      </div>
      <div> 
      <button type="button" className="btn btn-secondary px-4 py-2 me-5">
        Sign in
      </button>
      </div>
    </div>
  );
}
