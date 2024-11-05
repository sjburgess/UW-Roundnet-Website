// document.querySelector("#locations").addEventListener("click", (event) => {
//     ddiv.innerHTML = ` <main>
//     <div class="main1">
//       <h1 class=" m-6 box has-background-success-10 has-text-white has-text-centered is-size-4">
//         FaunaFind currently hosts animal information from three states in the US, whith hopes to grow in the future. Please see each state for a few select inhabitant species.
//       </h1>
//     </div>

document.querySelector("#about_us").addEventListener("click", (event) => {
  backing.innerHTML = ` <body class="has-background-black pt-6">
  <h1 class="title">
    <div style="display: flex; justify-content: center">
      <img
        class="roundnettitle"
        src="https://github.com/sjburgess/UW-Roundnet-Website/blob/main/Screenshot%202024-09-27%20at%2012.03.23%E2%80%AFPM.png?raw=true"
        alt="Badger Roundnet Title"
      />
    </div>
  </h1>

  <nav>
    <div>
      <div class="grid columns is-centered has-text-centered">
        <a
          class="subtitle has-text-white m-6 has-text-centered"
          href="index.html"
          >Home</a
        >
        <a
          class="subtitle has-text-white m-6 has-text-centered"
          href="about.html"
          >About Us</a
        >
        <a
          class="subtitle has-text-white m-6 has-text-centered"
          href="board-members.html"
          >Board Members</a
        >
        <a
          class="subtitle has-text-white m-6 has-text-centered"
          href="calendar.html"
          >Calendar</a
        >
        <a
          class="subtitle has-text-white m-6 has-text-centered"
          href="interestform.html"
          >Club Interest Form</a
        >
      </div>
    </div>
  </nav>

  <div id="backing" class="columns">
    <div class="column">
      <div class="container">
        <section class="section" id="backing">
          <h2 class="title has-text-white has-text-centered">About Us</h2>
          <p class="has-text-white has-text-centered">
            Founded in 2019, the Badger Roundnet Club is dedicated to creating
            an inclusive community where students can experience the thrill of
            roundnet (commonly known as Spikeball). Whether you're a seasoned
            player or just discovering the game, our club offers opportunities
            for everyone to play, improve their skills, and enjoy the
            camaraderie of fellow roundnet enthusiasts. We actively
            participate in tournaments and have proudly qualified for
            nationals in the past! Join us for a fun and competitive
            experience!
          </p>
          <div
            class="image-container"
            style="
              display: flex;
              justify-content: center;
              margin-bottom: 2rem;
            "
          >
            <img
              src="https://github.com/sjburgess/UW-Roundnet-Website/blob/main/aboutmephotos/aboutmephoto3.jpg?raw=true"
              alt="Image Description 3"
              style="width: 30%; margin: 0 2rem; border-radius: 8px"
            />
            <img
              src="https://github.com/sjburgess/UW-Roundnet-Website/blob/main/aboutmephotos/aboutmephoto1.jpg?raw=true"
              alt="Image Description 2"
              style="width: 30%; margin: 0 2rem; border-radius: 8px"
            />
            <img
              src="https://github.com/sjburgess/UW-Roundnet-Website/blob/main/aboutmephotos/aboutmephoto2.jpg?raw=true"
              alt="Image Description 1"
              style="width: 30%; margin: 0 2rem; border-radius: 8px"
            />
          </div>
          <h3 class="subtitle has-text-white mt-4">Practice Information</h3>
          <p class="has-text-white">
            We practice at Gordon's front lawn on Mondays and Thursdays from
            4:30-6:30 pm. <br />
            Drop by for laid-back match play or competitive practice. <br />
            Check out the "Calendar" tab for upcoming events and full
            schedule!
          </p>

          <h3 class="subtitle has-text-white mt-4">Contact Us!</h3>
          <ul class="has-text-white">
            <li>Email: badgerroundnet@gmail.com</li>
            <li>Instagram: @bagderroundnet</li>
          </ul>

          <h3 class="subtitle has-text-white mt-4">Membership Information</h3>
          <p class="has-text-white">
            Open to all undergraduate and graduate students. No registration
            fees or GPA requirements.
          </p>

          <h3 class="subtitle has-text-white mt-4">Affiliation</h3>
          <p class="has-text-white">
            We are proudly affiliated with Spikeball College Roundnet.
          </p>
        </section>
        <figure style="display: flex; justify-content: center">
          <img
            class="logo"
            src="https://github.com/sjburgess/UW-Roundnet-Website/blob/main/Screenshot%202024-10-02%20at%208.08.03%E2%80%AFPM.png?raw=true"
            alt="Roundnet Club Logo"
          />
        </figure>
      </div>
      <div class="p-6 has-text-centered has-text-white"></div>
    </div>
  </div>
</body>`;
});
