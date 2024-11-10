# UW Roundnet Website Project - Sprint 3

## Overview
This project is for the creation of a website for UW Roundnet, a university sports club. The project is developed in an agile framework using Scrum for sprint-based development.

-----------------------------------------------


## GitHub Repository
[Link to our project repo](README.md)


------------------------------------------------

## User Stories
1. **Interest Form:**  
   “As a user, I want to submit my information to be included in any future notifications.”
   
2. **Club Information:**  
   “As a user, I want to learn what UW Roundnet is about, so I can understand the purpose of the club.”
   
3. **Upcoming Tournaments:**  
   “As a user, I want to know about upcoming tournaments, so I can plan to participate.”
   
4. **Board Members:**  
   “As a user, I want to know who the club board members are, so I can reach out if needed.”

---------------------------------------------
DELETE SECTION AFTER TAKING INFO

## Core Functional Requirements

1. **Club About Us Page**: Provide information about UW Roundnet's purpose and activities.
2. **Calendar Page**: Display upcoming tournament dates and details.
3. **Board Members Page**: List current board members and provide their contact information.
4. **Interest for Page**: Collect information from interested users 
5. **Data Display Page**: Provide information to logged in users 
---
DELETE SECTION AFTER TAKING INFO
## Prototype & Functions

The prototype for the website will include the following components:

- **Homepage**: Includes an overview of the club.
- **Dedicated Pages** for:
  - About Us
  - Calendar integration
  - Board members' information
  - Interest Form
  - Members display
---
DELETE SECTION AFTER TAKING INFO

## Diagrams

### Use Case and Sequence Diagrams

- **Use Case Diagrams**: Outline the main interactions between the user and the website features.
- **Sequence Diagrams**: Show the flow of actions for key interactions, including:
  - Viewing events/practices on calendar
  - Accessing board members' information
  - Accessing other members information
  - Submitting interest forms 

### Entity-Relationship (E-R) Diagram

- Displays relationships between entities such as **Users**, **Events**, and **Board Members**.

### Additional Diagrams

- **Context Diagram**: Provides an overview of interactions between the website and external systems, such as the Google Calendar API.
- **Data Flow Diagram (Level 0)**: Visualizes data flow for the entire system.
- **Data Flow Diagram (Level 1)**: Detailed breakdown of the primary processes.
- **Use Case Diagram**: Shows user interactions with key website features.
- **Activity Diagrams** for scenarios, including:
  - Accessing Celndar event times
  - Filling out Interest form 

---
DELETE SECTION AFTER TAKING INFO

## Collections and Fields

The following collections and their fields will be included in the database design:

- **Users**:
  - `user_id`
  - `name`
  - `email`
  - `role`

- **Events**:
  - `event_id`
  - `name`
  - `date`
  - `location`

- **Board Members**:
  - `member_id`
  - `name`
  - `position`
  - `contact_info`
 
    DELETE SECTION AFTER TAKING INFO
----------------------------------------------

## Trello Board
[Click here to view our Trello board](https://trello.com/invite/b/66ec8fb0dbc77584d08a14ce/ATTIa2f99009276f461812cc7593b1f89644F76460DD/is-424-spikeball-project).  
(The board contains our task breakdown and progress tracking using a To Do, In Progress, and Done structure.)


-----------------------------------------------
## Burndown Chart

Day 2:

<img width="698" alt="Screenshot 2024-10-08 at 5 37 25 PM" src="https://github.com/user-attachments/assets/4453013a-b30a-4d3b-9a42-d02ebf26c15a">


Day 5:

<img width="686" alt="Screenshot 2024-10-11 at 12 37 52 PM" src="https://github.com/user-attachments/assets/2c6402cb-4afd-41ca-9f3f-314f49950084">


Day 7:

<img width="693" alt="Screenshot 2024-10-13 at 2 59 46 PM" src="https://github.com/user-attachments/assets/f47ff3a9-e753-433f-b030-7a58676c0dd3">


### Task Breakdown
| Task                                    | Story Number | Duration (hrs) | Priority (1-10)  | Complexity      | Lead Person  |
|-----------------------------------------|--------------|----------------|------------------|-----------------|--------------|
| Fix colors in css                       | 1            |   2            |  10              |   Low           |  Mitchell    |
| refactor site into single app platform  | 1            |   1            |  10              |   Med           |  Basil       |
| Set up Trello board                     | 1            |   .5           |  10              |   Low           |  Ian         |
| Fix logo background color               | 4            |   2            |  6               |   Low           |  Mitchell    |
| Add additional nav page for data        | 4            |   3            |  6               |   High          |  Mitchell    |
| Edit logo colors                        | 1            |   2            |  6               |   High          |  Lucas       |
| Edit Interst Form Static Page           | 1            |   2            |  5               |   Med           |  Sarah       |
| Describe Prototype & Functions          | 3            |   1            |  5               |   Low           |  Savanna     |
| Describe core functional requirements   | 2            |   2            |  7               |   Low           |  Savanna     |
| Create Contact Us Page                  | 5            |   1            |  6               |   Med           |  Savanna     |
| Connect firestore                       | 2            |   1            |  6               |   Med           |  Sarah       |
| Connect Interest form to firestore      | 1            |   1            |  8               |   Low           |  Sarah       |
| Update user stories based on feedback   | 2            |   .5           |  8               |   Low           |  Lucas       |
| Document team progress for README       | 2            |   3            |  10              |   Low           |  Savanna     |
| Create burndown chart                   | 2            |   2            |  10              |   Med           |  Ian         |
| burndown chart ss (Days 2, 5, 7)        | 2            |   1            |  10              |   Low           |  Ian         |




------------------------------------------------


## Daily Scrum

### Day 2: Daily Scrum Meeting
- **Savanna:**
  - *What did you do yesterday?*  Yesterday I Compiled information between the milestone and Sprint and started drafting initial tasks to complete
  - *What are you planning to do today?*  Today I plan to draft a re-structure of the READ ME, to accurately reflect sprint 3 progress 
  - *Any problems?* No issues so far! 

- **Sarah:**
  - *What did you do yesterday?*   Yesterday I did some research on what is best to include on interest forms
  - *What are you planning to do today?*  Today I am going to do some research on html and css for forms
  - *Any problems? No problems

- **Basil:**
  - *What did you do yesterday? I added a footer to match formatting of the title and inform users of intellectual property rights* 
  - *What are you planning to do today? I plan to re-learn how to link pages* 
  - *Any problems? No problems today.* 

- **Ian:**
  - *What did you do yesterday? I created the Trello board tasks that will be completed over the sprint* 
  - *What are you planning to do today? Today I am planning on taking a screenshot of the burndown chart* 
  - *Any problems? No questions or issues yet.*

- **Mitchell:**
  - *What did you do yesterday? I created the member submissions page and created a backing for it.
  - *What are you planning to do today? I am planning on starting on gettign the member submissions page functional.
  - *Any problems? I have had no issues so far.

- **Lucas:**
  - *What did you do yesterday?* Confirmed with client which users would have access to edit calendar events.  
  - *What are you planning to do today?* Create a new google calendar and add appropriate users. 
  - *Any problems?* No issues.

---


### Day 7: Daily Scrum Meeting
- **Savanna:**
  - *What did you do yesterday?*  Yesterday I Finished descriptions needed for the sprint 3 functionality and requirements
  - *What are you planning to do today?*  Today I plan to finaalize the Read Me structure for work showing our Sprint 3 progress
  - *Any problems?* no issues! 

- **Sarah:**
    - *What did you do yesterday?*  Yesterday, I started building the interest form page with html and css
     - *What are you planning to do today?*    Today I am planning to finish building the form and ensure it looks right
     - *Any problems?* No problems

- **Basil:**
  - *What did you do yesterday? I finished linking each separate HTML page to the navbar buttons.* 
  - *What are you planning to do today? I plan to make edits to each HTML page to ensure formatting is consistent between pages.* 
  - *Any problems? No problems.* 

- **Ian:**
  - *What did you do yesterday? Today I finished screenshotting the burndown chart
  - *What are you planning to do today? Today I will help update the readme file for submission*
  - *Any problems? No issues.*

- **Mitchell:**
  - *What did you do yesterday? I debugged the interest form page and linked it with firebase.
  - *What are you planning to do today? I am planning on finishing up my work on the member submissions page.
  - *Any problems? No issues so far.

- **Lucas:**
  - *What did you do yesterday?* I pulled the embed link from google calendar and inserted it on the calendar tab. 
  - *What are you planning to do today?* Finalizing formatting for the calendar tab. 
  - *Any problems?* No problems. 

-------------------------------------------------------------
## Sprint Review

**What did you learn from this sprint?** We learned time management and collaboration skills the most. Now that we all have seperate things to be working on, the use of branches and further collaboration between each person to avoid conflict was neccessary. 

**What did go well? Why?** We accomplished many tasks overall. Working on smaller ones first then tackling the larger ones was a successful strategy. Updating other members of the group if help is needed and rearrange work duties was also helpful. 

**What didn’t go well? Why not?** Nothing deliberatly went bed, however, a few things within firestore and setting up for our data collections within firestore was initially confusing, integrating all of our pages into a single page was a slightly long process as well. 

**How can you make things better next time?** Integrating feedback from out last sprint quicker or immidiately after could make work towards future progress go faster. 

**Are you satisfied with what you already completed?** Yes, this Sprint allowed us to fix some smaller things within making it into a single page app. We also updated our page to be where it needs to with firestore integration thorugh the interest form. 
