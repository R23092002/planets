import Hero from './Hero'
const AboutView = () => {
  return (
    <>
      <Hero text="About us!!" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
              Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutView;