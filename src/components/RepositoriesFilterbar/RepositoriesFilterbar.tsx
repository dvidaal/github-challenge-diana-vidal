import RepositoriesFilterbarStyled from "./RepositoriesFilterbarStyled";

const RepositoriesFilterbar = (): JSX.Element => {
  return (
    <RepositoriesFilterbarStyled>
      <input
        type="Search repositories"
        placeholder="Filter repository..."
        className="filter-bar"
      />
      <select name="select" className="filter-options">
        <option value="language">By Language</option>
        <option value="name">By Name</option>
      </select>
    </RepositoriesFilterbarStyled>
  );
};

export default RepositoriesFilterbar;
