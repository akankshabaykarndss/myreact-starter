import "../styles/Home.css"

 const handleClick = () => {
    console.log("Project Running!");
  };

const Home = () => {
  return (
    <div className="home-container">
  
      <p>Welcome to the Home Page!</p>
      <h2>Hello, World!</h2>
      <h1 className="name1">Hi ,Akanksha Baykar here😊</h1>

      <button className="btn" onClick={handleClick}>Click Me</button>

    </div>
  )
}

export default Home