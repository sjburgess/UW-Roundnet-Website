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

document.querySelector("#board").addEventListener("click", async () => {
  // Clear existing content in #backing
  backing.innerHTML = `
    <div id="backing" class="container p-6">
      <p class="title has-text-white has-text-centered">
        Meet Our Board Members
      </p>
    </div>
  `;

  try {
    // Fetch all board members from Firebase
    const snapshot = await db.collection("board_members").get();

    if (!snapshot.empty) {
      let boardMembers = [];

      // Separate president from other members
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.Position.toLowerCase() === "president") {
          boardMembers.unshift(data); // Place president first
        } else {
          boardMembers.push(data); // Add other members
        }
      });

      // Iterate through sorted board members and display them
      boardMembers.forEach((data) => {
        // Create a vertical layout for each board member
        const memberDiv = document.createElement("div");
        memberDiv.className = "box mb-4"; // Box with margin for separation
        memberDiv.style.backgroundColor = "#721410"; // Correct red background color
        memberDiv.style.color = "white"; // White text for contrast
        memberDiv.style.padding = "20px"; // Padding for visual spacing
        memberDiv.style.borderRadius = "8px"; // Rounded corners for styling
        memberDiv.style.width = "100%"; // Full width of the parent container
        memberDiv.style.boxSizing = "border-box"; // Ensure padding is included in width
        memberDiv.style.display = "block"; // Ensure each member is on a new line

        // Build the HTML structure for the member
        memberDiv.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
            <div style="margin-bottom: 20px;">
              <img src="${data.Headshot}" alt="${data.Name}" class="custom-image" style="max-width: 150px; border-radius: 50%;" />
            </div>
            <div style="text-align: center;">
              <p class="subtitle has-text-white" style="margin-bottom: 10px;">${data.Name} - ${data.Position}</p>
              <p class="member-description has-text-white">${data.Description}</p>
            </div>
          </div>
        `;

        // Append the member div to the #backing container
        document.querySelector("#backing").appendChild(memberDiv);
      });
    } else {
      // Display a message if no members are found
      const noMembersMessage = document.createElement("p");
      noMembersMessage.className = "has-text-white has-text-centered";
      noMembersMessage.textContent = "No board members found.";
      document.querySelector("#backing").appendChild(noMembersMessage);
    }
  } catch (error) {
    console.error("Error fetching board members: ", error);
    alert("Something went wrong while loading board member data.");
  }
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

// Reset section when "#members" is clicked
document.querySelector("#members").addEventListener("click", async () => {
  const backing = document.querySelector("#backing"); // Target the specific div for content update

  // Clear the content inside the backing div
  backing.innerHTML = ""; // This clears the previous content inside #backing

  // Create a container div for the submissions
  const containerDiv = document.createElement("div");
  containerDiv.style.display = "flex";
  containerDiv.style.flexWrap = "wrap"; // Allow wrapping to new rows
  containerDiv.style.gap = "20px"; // Add space between boxes
  containerDiv.style.margin = "20px auto"; // Center the container and add margin
  containerDiv.style.padding = "20px"; // Padding around the content
  containerDiv.style.boxSizing = "border-box"; // Include padding in width calculations

  try {
    // Get all submissions from Firebase
    const snapshot = await db.collection("interest_forms").get();

    snapshot.forEach((doc) => {
      const data = doc.data();

      // Create a box for each submission
      const memberBox = document.createElement("div");
      memberBox.style.border = "1px solid white"; // Add border
      memberBox.style.borderRadius = "8px"; // Rounded corners
      memberBox.style.backgroundColor = "#333"; // Dark background
      memberBox.style.color = "white"; // White text
      memberBox.style.padding = "15px"; // Padding inside the box
      memberBox.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Subtle shadow
      memberBox.style.flex = "1 1 calc(33.333% - 20px)"; // Take 1/3 of the row minus the gap
      memberBox.style.boxSizing = "border-box"; // Include padding in the size

      // Add content to the box
      const createDataField = (label, value) => {
        const fieldDiv = document.createElement("div");
        fieldDiv.style.marginBottom = "10px";

        const labelElem = document.createElement("strong");
        labelElem.textContent = label + ": ";
        labelElem.style.color = "#fff"; // White color for labels

        const valueElem = document.createElement("span");
        valueElem.textContent = value;
        valueElem.style.color = "#ddd"; // Slightly lighter text for values

        fieldDiv.appendChild(labelElem);
        fieldDiv.appendChild(valueElem);

        return fieldDiv;
      };

      // Append the data fields to the member box
      memberBox.appendChild(createDataField("Name", data.name));
      memberBox.appendChild(createDataField("Email", data.email));
      memberBox.appendChild(createDataField("Year", data.year));
      memberBox.appendChild(createDataField("Experience", data.experience));
      memberBox.appendChild(
        createDataField("Interests", data.interests.join(", "))
      );

      // Add Update and Delete buttons
      const buttonContainer = document.createElement("div");
      buttonContainer.style.display = "flex";
      buttonContainer.style.justifyContent = "space-between"; // Space buttons apart
      buttonContainer.style.marginTop = "10px";

      const updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.style.padding = "8px 12px";
      updateButton.style.border = "none";
      updateButton.style.borderRadius = "4px";
      updateButton.style.backgroundColor = "#4caf50"; // Green for update
      updateButton.style.color = "white";
      updateButton.style.cursor = "pointer";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.padding = "8px 12px";
      deleteButton.style.border = "none";
      deleteButton.style.borderRadius = "4px";
      deleteButton.style.backgroundColor = "#f44336"; // Red for delete
      deleteButton.style.color = "white";
      deleteButton.style.cursor = "pointer";

      // Add button functionality for update
      updateButton.addEventListener("click", () => {
        // Open an editable form (you can create a modal or simply an inline form)
        const updatedName = prompt("Update Name:", data.name);
        const updatedEmail = prompt("Update Email:", data.email);
        const updatedYear = prompt("Update Year:", data.year);
        const updatedExperience = prompt("Update Experience:", data.experience);
        const updatedInterests = prompt(
          "Update Interests (comma separated):",
          data.interests.join(", ")
        );

        if (
          updatedName &&
          updatedEmail &&
          updatedYear &&
          updatedExperience &&
          updatedInterests
        ) {
          // Split interests into an array
          const interestsArray = updatedInterests
            .split(",")
            .map((interest) => interest.trim());

          // Update data in Firebase
          db.collection("interest_forms")
            .doc(doc.id)
            .update({
              name: updatedName,
              email: updatedEmail,
              year: updatedYear,
              experience: updatedExperience,
              interests: interestsArray,
            })
            .then(() => {
              alert("Member updated successfully!");
              // Optionally, update the UI without reloading
              memberBox.querySelector(
                "strong"
              ).nextSibling.textContent = `Name: ${updatedName}`;
              memberBox.querySelector(
                "strong"
              ).nextSibling.textContent = `Email: ${updatedEmail}`;
              memberBox.querySelector(
                "strong"
              ).nextSibling.textContent = `Year: ${updatedYear}`;
              memberBox.querySelector(
                "strong"
              ).nextSibling.textContent = `Experience: ${updatedExperience}`;
              memberBox.querySelector(
                "strong"
              ).nextSibling.textContent = `Interests: ${updatedInterests}`;
            })
            .catch((error) => {
              console.error("Error updating member:", error);
              alert("Error updating member. Please try again.");
            });
        }
      });

      // Add button functionality for delete
      deleteButton.addEventListener("click", async () => {
        if (confirm(`Are you sure you want to delete ${data.name}?`)) {
          try {
            await db.collection("interest_forms").doc(doc.id).delete();
            alert(`${data.name} has been deleted.`);
            memberBox.remove(); // Remove the box from the UI
          } catch (error) {
            console.error("Error deleting member: ", error);
          }
        }
      });

      buttonContainer.appendChild(updateButton);
      buttonContainer.appendChild(deleteButton);

      memberBox.appendChild(buttonContainer);

      // Append the box to the container
      containerDiv.appendChild(memberBox);
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
      configure_message_bar("Admin status updated!");
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

auth.onAuthStateChanged((user) => {
  let adminlinks = document.querySelectorAll(".signedinadmin");

  if (user) {
    // console.log(user);
    // r_e("info").innerHTML = `<p>You are signed in as ${user.email} </p>`;
    db.collection("users")
      .doc(user.email)
      .get()
      .then((d) => {
        // possible admin values are 0 or 1
        // admin value of 1 means admin user. a value of 0 means no admin
        let admin = d.data().admin;

        if (admin == 1) {
          adminlinks.forEach((link) => {
            link.classList.remove("is-hidden");
          });
        }
      });
  }
});

auth.onAuthStateChanged((user) => {
  if (user) {
    r_e("user_email").innerHTML = `logged in as ${auth.currentUser.email}`;
    configure_navbar(auth.currentUser.email);
    // r_e("sub_block").classList.add("is-hidden");
    // r_e("sub_block").classList.remove("is-active");
  } else {
    // alert("no current user");
    r_e("user_email").innerHTML = "";
    configure_navbar();
    // r_e("sub_block").classList.remove("is-hidden");
    // r_e("sub_block").classList.add("is-active");
  }
});

function configure_navbar(email) {
  let signedinlinks = document.querySelectorAll(".signedin");
  let signedoutlinks = document.querySelectorAll(".signedout");
  let signedinadminlinks = document.querySelectorAll(".signedinadmin");

  if (email) {
    // when user is signed in show all the elements with the class signedin and hide all elements with class signedout

    signedinlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    });

    signedoutlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });
  } else {
    signedinlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });

    signedinadminlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });

    signedoutlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    });
  }
}

// function configure_navbar(email) {
//   let signedinadminlinks = document.querySelectorAll(".signedinadmin");

//   if (email) {
//     // when user is signed in show all the elements with the class signedin and hide all elements with class signedout
//   } else {
//     signedinadminlinks.forEach((link) => {
//       link.classList.add("is-hidden");
//     });
//   }
// }
