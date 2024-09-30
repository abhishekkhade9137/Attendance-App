import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <section className="cards">
          <article className="card">
            <h2>Card 1</h2>
            <p>This is a sample card.</p>
          </article>
          <article className="card">
            <h2>Card 2</h2>
            <p>This is another sample card.</p>
          </article>
          <article className="card">
            <h2>Card 3</h2>
            <p>This is yet another sample card.</p>
          </article>
        </section>
        <section className="charts">
          <h2>Charts</h2>
          <div className="chart">
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;