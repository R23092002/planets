const Hero=({text,backdrop})=>{
    return(
      <header className="bg-dark text-white p-2 hero-container">
        <h3 className="hero=text">{text}</h3>
        {backdrop &&
        <div className="hero-backdrop" style={{backgroundImage: `url(&{backdrop})`}}></div>
        }
      </header>
    )
  }

  export default Hero;