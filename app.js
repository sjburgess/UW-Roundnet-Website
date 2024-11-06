// document.querySelector("#locations").addEventListener("click", (event) => {
//     ddiv.innerHTML = ` <main>
//     <div class="main1">
//       <h1 class=" m-6 box has-background-success-10 has-text-white has-text-centered is-size-4">
//         FaunaFind currently hosts animal information from three states in the US, whith hopes to grow in the future. Please see each state for a few select inhabitant species.
//       </h1>
//     </div>
let backing = document.querySelector("#backing");

document.querySelector("#board").addEventListener("click", (event) => {
  backing.innerHTML = ` <div id="backing" class="container p-6">
  <p class="title has-text-white has-text-centered">
    Meet Our Board Members
  </p>

  <div class="columns is-vcentered p-4">
    <div class="column is-one-quarter">
      <img src="peyton headshot.jpg" alt="peyton" class="custom-image" />
    </div>
    <div class="column">
      <p class="subtitle has-text-white">Peyton Garcia - President</p>
      <p class="member-description">
        Peyton is a sophomore studying Finance, Investment, and Banking from
        Green Bay, Wisconsin. Owner and founder of Wisconsin Roundnet.
      </p>
    </div>
  </div>

  <div class="columns is-vcentered p-4">
    <div class="column is-one-quarter">
      <img src="cj headshot.jpg" alt="CJ" class="custom-image" />
    </div>
    <div class="column">
      <p class="subtitle has-text-white">CJ Westover - Treasurer</p>
      <p class="member-description">
        Cj is a senior studying Actuarial Science and Risk Management &
        Insurance from Muskego, Wisconsin. 
      </p>
    </div>
  </div>

  <div class="columns is-vcentered p-4">
    <div class="column is-one-quarter">
      <img src="bella headshot.jpg" alt="Bella" class="custom-image" />
    </div>
    <div class="column">
      <p class="subtitle has-text-white">Bella D'Amato - VP of DEI</p>
      <p class="member-description">
        Bella is a senior studying Risk Management & Insurance and Human
        Resources with a certificate in Business Consulting.
      </p>
    </div>
  </div>

  <div class="columns is-vcentered p-4">
    <div class="column is-one-quarter">
      <img src="gaurav headshot.jpg" alt="Gaurav" class="custom-image" />
    </div>
    <div class="column">
      <p class="subtitle has-text-white">
        Gaurav Capila - VP of Competition
      </p>
      <p class="member-description">
        Gaurav is a sophomore studying Data Science and Biology from
        Massachusetts. 
      </p>
    </div>
  </div>

  <div class="columns is-vcentered p-4">
    <div class="column is-one-quarter">
      <img src="shrey headshot.jpg" alt="Shrey" class="custom-image" />
    </div>
    <div class="column">
      <p class="subtitle has-text-white">Shrey Dhuria - VP of Media</p>
      <p class="member-description">
        Shrey is a second year student studying Computer Science and Math
        from California.
      </p>
    </div>
  </div>

  <div class="columns is-vcentered p-4">
    <div class="column is-one-quarter">
      <img src="ben headshot.png" alt="Ben" class="custom-image" />
    </div>
    <div class="column">
      <p class="subtitle has-text-white">Ben Isom - VP of Operations</p>
      <p class="member-description">
        Ben is a sophomore studying Computer Science from Appleton,
        Wisconsin.
      </p>
    </div>
  </div>
</div>`;
});

document.querySelector("#calendar").addEventListener("click", (event) => {
  backing.innerHTML = `<div class="column">
  <div class="container">
    <section class="section">
      <h2 class="title has-text-white has-text-centered">
        Upcoming Events
      </h2>
      <p class="has-text-centered has-text-white">
        Stay updated with our practice schedules, tournaments, and club
        events. Check out the calendar below for all upcoming activities!
      </p>
      <!-- Google Calendar Embed -->
      <iframe
        class="calendar-embed"
        src="https://calendar.google.com/calendar/embed?src=c_1ffc79a64e40945584d9a3ca4e3f3a0e16d4051df49c3a3be8664da1dc86e155%40group.calendar.google.com&ctz=America%2FChicago"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </section>
  </div>
</div>`;
});

document.querySelector("#about").addEventListener("click", (event) => {
  backing.innerHTML = `  
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
  </div>`;
});

document.querySelector("#form").addEventListener("click", (event) => {
  backing.innerHTML = ` 
<form>
      <h1>Interest Form</h1>
      <br>
      <table>
      <tr>
        <td><label>Name:</label></td>
        <td><input type="text" , id="name" , placeholder="Enter your name" required/></td>
      </tr>
      <tr>
        <td><label>Email:</label></td>
        <td><input type="email" , placeholder="Enter your email" required /></td>
      </tr>
      <tr>
        <td><label>Year:</label></td>
        <td>
        <select name="year" id="year">
          <option value="" disabled selected>Select</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
          <option value="Grad Student">Grad Student</option>
        </select>
      </td>
      </tr>
      <tr>
        <td><label>What are you interested in attending? </label> </td> 
      </tr>
      <tr>
        <td><sub-label>Practice:</sub-label></td>
        <td><input type="checkbox" id="practice" name="interest" value="practice"></td></tr>
      <tr>
        <td><sub-label>Tournaments:</sub-label></td>
          <td><input type="checkbox" id="tournaments" name="interest" value="tournaments"></td></tr>
      <tr>
            <td><sub-label>Not sure:</sub-label></td>
            <td><input type="checkbox" id="not sure" name="interest" value="not sure"></td></tr>
      <tr>
        <td><label>Which best describes your experience level? </label> </td> 
      </tr>
      <tr>
        <td><sub-label>Beginner:</sub-label></td>
        <td><input type="radio" id="beginner" name="experience" value="beginner"></td></tr>
      <tr>
        <td><sub-label>Intermediate:</sub-label></td>
          <td><input type="radio" id="intermediate" name="experience" value="intermediate"></td></tr>
      <tr>
            <td><sub-label>Advanced:</sub-label></td>
            <td><input type="radio" id="advanced" name="experience" value="advanced"></td></tr>
    </table>
    <br>
      <button type="submit">Submit</button>
    </form>`;
});

document.querySelector("#members").addEventListener("click", (event) => {
  backing.innerHTML = `<div>
</div>`;
});
