# Lesson Plan

## Simple Form Demo

Motivation: the students see quickly how a fully functioning form is built.

(Do not spend more than 30 minutes on this or you risk running out of time)

* Inside `index.js` find the `SimpleForm` component.
* Flesh out a fully functioning form using controlled inputs.
* Mention the limitations of this "quick and dirty" form:

  * No placeholders, labels nor good accessibility
  * Nothing prevents submitting an empty form
  * Lack of validation errors, bad UX

## Realistic Form Demo

* Inside the `design-files` folder find the designs.
* There are several steps in different files to complete this guided project.
* Use the global search with the search term `🔥 STEP` to find the steps throughout the codebase.
* Starting at `🔥 STEP 1` follow the instructions in the comments.
* The form is split into two components (allow students time to study each new component):

  * `App` keeps track of state and has the state-altering callbacks.
  * `FriendForm` gets values and callbacks through props and renders the form.

## Following Along and Catching Up

* The instructor should make sure students clone the starter repo without forking it.
* The instructor must make commits to a `lecture` branch and push them regularly (or use a script to do it).
* If the students work on their own named branch, `main` is kept clean so they can re-do the demo later.
* In order to catch up, the students can reset their branch to the instructor's last pushed commit:

  ```bash
    git fetch && git reset --hard origin/lecture
  ```
