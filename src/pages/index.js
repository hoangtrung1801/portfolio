function Home() {
  return (
    <div class="about">
      <h1>Hello, my name is Lê Kim Hoàng Trung.</h1>
      <span>I am a <span class="/highlight">full-stack web developer</span></span>
      <span>Contact with me via <span class="highlight">hoangtrung1801.2003@gmail.com</span></span>

      <div class="follow-me">
        <ul>
          <li>Follow me</li>
          <li>
            <a href="https://github.com/hoangtrung1801" className='github' target="_blank" rel="noreferrer">
              <span>Github</span>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/hoangtrung1801/" target="_blank" className='instagram' rel="noreferrer">
              <span>Instagram</span>
            </a>
          </li>

          <li>
            <a href="https://facebook.com/trung181" className='facebook' target={"_blank"} rel="noreferrer">
              <span>Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home;