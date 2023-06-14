import Hero from './Hero'

const Home = () => {
  return (
    <>
      <Hero text="Welcome to this page" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">
              Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
            </p>
            <div className="col-lg-6 offset-lg-3 my-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" style={{ width: "100%", margin: "10px" }}>
                    <img src="https://d31xsmoz1lk3y3.cloudfront.net/games/imgur/MH2gcAN.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" style={{ width: "100%", margin: "10px" }}>
                    <img src="https://d31xsmoz1lk3y3.cloudfront.net/games/imgur/MH2gcAN.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
