console.log(firebase);
let backing = document.querySelector("#backing");

let signupbtn = document.querySelector("#signupbtn");
let signup_modal = document.querySelector("#signup_modal");
let signup_modalbg = document.querySelector("#signup_modalbg");

let signinbtn = document.querySelector("#signinbtn");
let signin_modal = document.querySelector("#signin_modal");
let signin_modalbg = document.querySelector("#signin_modalbg");

// sign-up modal link
signupbtn.addEventListener("click", () => {
  signup_modal.classList.add("is-active");
});

signup_modalbg.addEventListener("click", () => {
  signup_modal.classList.remove("is-active");
});

// signin modal link
signinbtn.addEventListener("click", () => {
  signin_modal.classList.add("is-active");
});

signin_modalbg.addEventListener("click", () => {
  signin_modal.classList.remove("is-active");
});

function r_e(id) {
  return document.querySelector(`#${id}`);
}

function configure_message_bar(msg) {
  r_e("message_bar").innerHTML = msg;

  // show the message bar
  r_e("message_bar").classList.remove("is-hidden");

  // hide the message bar again in 3 seconds and clear its content
  setTimeout(() => {
    r_e("message_bar").classList.add("is-hidden");
    r_e("message_bar").innerHTML = "";
  }, 3000);
}
// user sign up

r_e("signup_form").addEventListener("submit", (e) => {
  // prevent page from auto refresh
  e.preventDefault();

  // capture the user email and password
  let email = r_e("email").value;
  let password = r_e("password").value;

  // finish user authentication

  auth.createUserWithEmailAndPassword(email, password).then((user) => {
    db.collection("users").doc(user.user.email).set({
      admin: 0,
    });
    // notify user that sign up was successfull

    configure_message_bar(`user ${auth.currentUser.email} has been created`);

    // hide the modal
    r_e("signup_modal").classList.remove("is-active");

    // clear the sign up form
    r_e("signup_form").reset();
  });

  // check
  // console.log(email, pass);

  // console.log("form submitted");
});

// onauthstatechanged

auth.onAuthStateChanged((user) => {
  if (user) {
    r_e("user_email").innerHTML = `logged in as ${auth.currentUser.email}`;
    // configure_navbar(auth.currentUser.email);
    // r_e("sub_block").classList.add("is-hidden");
    // r_e("sub_block").classList.remove("is-active");
  } else {
    // alert("no current user");
    r_e("user_email").innerHTML = "";
    // configure_navbar();
    // r_e("sub_block").classList.remove("is-hidden");
    // r_e("sub_block").classList.add("is-active");
  }
});

// sign in

r_e("signin_form").addEventListener("submit", (e) => {
  e.preventDefault();

  // find the email and pass from the form
  let email = r_e("email_").value;
  let password = r_e("password_").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // reset the log in form

      configure_message_bar("You are now signed in");

      // hide the modal
      r_e("signin_modal").classList.remove("is-active");
    })
    .catch((error) => {
      configure_message_bar("Incorrect email or password, please try again!");
      r_e("signin_modal").classList.remove("is-active");
    });
});

// sign out
r_e("signoutbtn").addEventListener("click", () => {
  auth.signOut().then(() => {
    // display a message on the message bar indicating user signed out
    configure_message_bar("You are now signed out!");
  });
});

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

// Render the form on the "#form" click
document.querySelector("#form").addEventListener("click", () => {
  backing.innerHTML = ` 
    <form>
        <h1>Interest Form</h1>
        <br />
        <table>
          <tr>
            <td><label for="name">Name:</label></td>
            <td>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </td>
          </tr>
          <tr>
            <td><label for="email">Email:</label></td>
            <td>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </td>
          </tr>
          <tr>
            <td><label for="year">Year:</label></td>
            <td>
              <select name="year" id="year" required>
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
            <td><label>What are you interested in attending? </label></td>
          </tr>
          <tr>
            <td><label for="practice">Practice:</label></td>
            <td>
              <input
                type="checkbox"
                id="practice"
                name="interest"
                value="practice"
              />
            </td>
          </tr>
          <tr>
            <td><label for="tournaments">Tournaments:</label></td>
            <td>
              <input
                type="checkbox"
                id="tournaments"
                name="interest"
                value="tournaments"
              />
            </td>
          </tr>
          <tr>
            <td><label for="not-sure">Not sure:</label></td>
            <td>
              <input
                type="checkbox"
                id="not-sure"
                name="interest"
                value="not sure"
              />
            </td>
          </tr>
          <tr>
            <td><label>Which best describes your experience level? </label></td>
          </tr>
          <tr>
            <td><label for="beginner">Beginner:</label></td>
            <td>
              <input
                type="radio"
                id="beginner"
                name="experience"
                value="beginner"
              />
            </td>
          </tr>
          <tr>
            <td><label for="intermediate">Intermediate:</label></td>
            <td>
              <input
                type="radio"
                id="intermediate"
                name="experience"
                value="intermediate"
              />
            </td>
          </tr>
          <tr>
            <td><label for="advanced">Advanced:</label></td>
            <td>
              <input
                type="radio"
                id="advanced"
                name="experience"
                value="advanced"
              />
            </td>
          </tr>
        </table>
        <br />
        <button id="submit" type="button">Submit</button>
      </form>`;

  // Add event listener for the submit button
  document.querySelector("#submit").addEventListener("click", async (event) => {
    // Collect form data
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let year = document.querySelector("#year").value;

    // Gather selected interests
    let interests = Array.from(
      document.querySelectorAll("input[name='interest']:checked")
    ).map((checkbox) => checkbox.value);

    // Get selected experience level
    let experience = document.querySelector(
      "input[name='experience']:checked"
    )?.value;

    // Basic validation
    if (!name || !email || !year || !experience) {
      alert("Please fill in all fields!");
      return;
    }

    // Prepare the data to be sent to Firebase
    const formData = {
      name,
      email,
      year,
      interests,
      experience,
    };

    try {
      // Send data to Firebase Firestore
      await db.collection("interest_forms").add(formData);

      // Success feedback
      alert("Your interest form has been submitted successfully!");

      // Optionally reset the form
      document.querySelector("form").reset();
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Something went wrong. Please try again.");
    }
  });
});

// Reset section when "#members" is clicked
document.querySelector("#members").addEventListener("click", async () => {
  const backing = document.querySelector("#backing"); // Target the specific div for content update

  // Clear the content inside the backing div
  backing.innerHTML = ""; // This clears the previous content inside #backing

  // Create a container div for the submissions
  const containerDiv = document.createElement("div");
  containerDiv.style.maxWidth = "100%"; // Set to take up the full width of the screen
  containerDiv.style.margin = "0 auto"; // Center the container
  containerDiv.style.padding = "20px"; // Padding around the content
  containerDiv.style.fontSize = "14px"; // Slightly smaller font for readability
  containerDiv.style.boxSizing = "border-box"; // Ensure padding is included in the width
  containerDiv.style.paddingBottom = "30px"; // Add space at the bottom to avoid sticking

  try {
    // Get all submissions from Firebase
    const snapshot = await db.collection("interest_forms").get();

    snapshot.forEach((doc) => {
      const data = doc.data();

      // Create a div for each submission entry
      const memberDiv = document.createElement("div");
      memberDiv.style.marginBottom = "20px"; // Add space between submissions
      memberDiv.style.display = "flex"; // Use flexbox for row layout
      memberDiv.style.flexWrap = "nowrap"; // Prevent wrapping of items
      memberDiv.style.justifyContent = "space-between"; // Space the data out across the page
      memberDiv.style.width = "100%"; // Ensure the member div takes full width of the screen

      // Create each field and display them horizontally
      const createDataField = (label, value) => {
        const fieldDiv = document.createElement("div");
        fieldDiv.style.display = "flex";
        fieldDiv.style.flexDirection = "row";
        fieldDiv.style.alignItems = "center";
        fieldDiv.style.marginBottom = "10px"; // Space between fields
        fieldDiv.style.flex = "1 1 20%"; // Set each field to take 20% of the row

        const labelElem = document.createElement("strong");
        labelElem.textContent = label + ": ";
        labelElem.style.marginRight = "10px"; // Space between label and value
        labelElem.style.color = "white"; // Ensure label is white

        const valueElem = document.createElement("span");
        valueElem.textContent = value;
        valueElem.style.flex = "1"; // Make value take the remaining space
        valueElem.style.color = "white"; // Ensure value is white
        valueElem.style.marginRight = "20px"; // Add two spaces between text instances

        fieldDiv.appendChild(labelElem);
        fieldDiv.appendChild(valueElem);

        return fieldDiv;
      };

      // Append the data fields to the member div in one row
      memberDiv.appendChild(createDataField("Name", data.name));
      memberDiv.appendChild(createDataField("Email", data.email));
      memberDiv.appendChild(createDataField("Year", data.year));
      memberDiv.appendChild(createDataField("Experience", data.experience));
      memberDiv.appendChild(
        createDataField("Interests", data.interests.join(", "))
      );

      // Append the new div to the container
      containerDiv.appendChild(memberDiv);
    });

    // Append the container div (with all submissions) to the #backing div
    backing.appendChild(containerDiv);
  } catch (error) {
    console.error("Error fetching members: ", error);
    alert("Something went wrong while loading member data.");
  }
});

function make_admin(id) {
  db.collection("users")
    .doc(id)
    .set({
      admin: 1,
    })
    .then(() => {
      // Call configure_message_bar to update the message bar after changing the status

      // Optionally reload the page after configuring the message bar
      configure_message_bar("admin status updated");
    })
    .catch((error) => {
      console.error("Error updating user to admin: ", error);
    });
}

function make_regular_user(id) {
  db.collection("users")
    .doc(id)
    .set({
      admin: 0,
    })
    .then(() => {
      // Reload the page after updating the status
      configure_message_bar("Admin status updated!");
    });
}

document.querySelector("#userstatus").addEventListener("click", () => {
  db.collection("users")
    .where("admin", "==", 0)
    .get()
    .then((data) => {
      mydocs = data.docs;
      let html = ``;
      mydocs.forEach((d) => {
        html += `<p class="pl-5 has-text-white">${d.id}`;
        html += `<button class="blackbutton ml-6 has-text-white " id="${d.id}" onclick="make_admin('${d.id}')">Make Admin</button></p>`;
      });
      r_e("registered_users").innerHTML = html;
    });

  // Admin users
  db.collection("users")
    .where("admin", "==", 1)
    .get()
    .then((data) => {
      mydocs = data.docs;
      let html = ``;
      mydocs.forEach((d) => {
        html += `<p class="has-text-white">${d.id}`;
        html += `<button id="${d.id}" class="blackbutton ml-6 has-text-white" onclick="make_regular_user('${d.id}')">Make Regular User</button></p>`;
      });
      r_e("admin_users").innerHTML = html;
    });

  backing.innerHTML = `
  <div class="column is-2"></div>
  <!-- Non-admin users -->
  <div class="column is-4 ">
    <h1 class="p-6 title has-text-white">Non-Admin Users</h1>
    <div id="registered_users"></div>
  </div>

  <!-- admin users -->
  <div class="column is-4">
    <h1 class="p-6 title has-text-white">Admin Users</h1>
    <div id="admin_users"></div>
  </div>
  <div class="column is-2"></div>`;
});
