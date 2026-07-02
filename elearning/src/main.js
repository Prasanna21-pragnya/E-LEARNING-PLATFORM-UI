import "./style.css";

document.querySelector("#app").innerHTML = `
  <nav class="navbar">
    <h1>E-Learning Platform</h1>

    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#courses">Courses</a></li>
      <li><a href="#progress">Progress</a></li>
      <li><a href="#videos">Videos</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <section id="home" class="hero">
    <h2>Learn Anytime, Anywhere</h2>

    <p>
      Upgrade your skills with our modern e-learning platform.
    </p>

    <a href="#courses">
  <button>Explore Courses</button>
</a>
  </section>

  <section id="courses" class="section">
    <h2>Popular Courses</h2>

    <div class="course-container">

      <div class="card">
        <h3>HTML</h3>
        <p>Learn structure of web pages.</p>
      </div>

      <div class="card">
        <h3>CSS</h3>
        <p>Design beautiful websites.</p>
      </div>

      <div class="card">
        <h3>JavaScript</h3>
        <p>Add interactivity to websites.</p>
      </div>

      <div class="card">
        <h3>ReactJS</h3>
        <p>Build modern frontend applications.</p>
      </div>

    </div>
  </section>

  <section id="progress" class="section">
    <h2>Learning Progress</h2>

    <div class="progress-box">
      <p>HTML - 90%</p>
      <div class="progress-bar">
        <div class="progress html"></div>
      </div>

      <p>CSS - 80%</p>
      <div class="progress-bar">
        <div class="progress css"></div>
      </div>

      <p>JavaScript - 70%</p>
      <div class="progress-bar">
        <div class="progress js"></div>
      </div>

      <p>ReactJS - 60%</p>
      <div class="progress-bar">
        <div class="progress react"></div>
      </div>
    </div>
  </section>

  <section id="videos" class="section">
    <h2>Video Lessons</h2>

    <div class="video-container">

      <iframe
        src="https://www.youtube.com/embed/qz0aGYrrlhU"
        title="HTML Tutorial"
        allowfullscreen>
      </iframe>

      <iframe
        src="https://www.youtube.com/embed/1Rs2ND1ryYc"
        title="CSS Tutorial"
        allowfullscreen>
      </iframe>

    </div>
  </section>

  <section id="contact" class="section">
    <h2>Contact</h2>

    <p>Email: prasanna@example.com</p>

    <p>LinkedIn: linkedin.com/in/prasanna</p>

    <p>GitHub: github.com/prasanna</p>
  </section>
`;