import "./Header.css";

function Header() {
  return (
    <>
      <header className="headercontainer headerflexlayout">
        <div className="headercolumn">
          <div className="headerflexlayout">
            <h2>Story</h2>
            <button className="headerbutton">Save Changes</button>
          </div>
        </div>
        <div className="headercolumn">
          <div className="headerflexlayout">
            <button className="headerbutton">Preview</button>
            <button className="headerbutton">Share</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
