function Home({ setPage }) {
  return (
    <div className="home">
      <h1>Multiple Questions? One place to ask them.</h1>
      <p>
        Trifecta is a pair of assistants one for your health, one for your
        skin. Ask what's going on and get a direction to try. More assistants are coming soon.
      </p>

      <h2>What do you want to ask about?</h2>

      <div className="options-grid">
        <div className="option-card health-card" onClick={() => setPage("health")}>
          <h3>Health</h3>
          <p>Workouts, recovery, everyday health questions.</p>
        </div>

        <div className="option-card skin-card" onClick={() => setPage("skin")}>
          <h3>Skin</h3>
          <p>Routines and product picks for your skin.</p>
        </div>

        <div className="option-card locked-card">
          <h3>Coming soon</h3>
          <p>More assistants are on the way.</p>
        </div>
        <div className="option-card locked-card">
          <h3>Coming soon</h3>
          <p>More assistants are on the way.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;