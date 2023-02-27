import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({ searchText: q });
  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length < 1) {
      return;
    }
    navigate(`?q=${searchText}`);
  };

  const heroes = getHeroByName(q);

  return (
    <>
      <h4>Search</h4>
      <hr />
      <div className="row mx-0">
        <div className="col-5">
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search a hero"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">{q} not found</div>
            )
          )}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
