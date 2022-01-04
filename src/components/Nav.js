function Nav({activeNav}) {
  return (
    <nav className={`nav ${activeNav ? "nav-active" : ""}`}>
      <a href="">
        <span>
          about
        </span>
      </a>
      <a href="">
        <span>
          portofolio
        </span>
      </a>
      <a href="">
        <span>
          labs
        </span>
      </a>
      <a href="">
        <span>
          contact
        </span>
      </a>
    </nav>
  )
}

export default Nav;