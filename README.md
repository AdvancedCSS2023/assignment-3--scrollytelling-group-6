# Scrollytelling website: Goal 14 | Life below water

### What the project does
The project aims to deliver an animated scrollable website about [UN goal 14](https://www.globalgoals.org/goals/14-life-below-water/): Life below water. Goal 14 focuses on the conservation and sustainable use of the world's oceans, seas, and marine resources. It addresses the significant challenges faced by marine ecosystems due to pollution, climate change, overfishing, and habitat destruction. The project created primarily tackles the human aspect, and how our behavior tends affects the oceans negatively, but also shows how humans can change for the better.
### Why the project is useful
The project is useful since it helps to raise awereness about the importance of protecting marine life and achieving sustainable development. The goal with the webpage is to encourage viewers to become more enlightened on the subject and feel inspired to take action. The page is meant for the target audience: adults between 35-45 years old, so it should be mostly useful for this group, but also the general public. The design is meant to be illustrative as well as easy to read and understand.
### How users can get started with the project
This is how users and developers can get started with the project:
1. If you seek to do further development or simply look into the code, fork the project repository and clone it locally. This way, one is able to make any changes and experiment with the exisiting code. Open the repository in Visual Studio Code, and you are set to begin.
2. Optionally, you could clone the project directly, make desired changes in a new branch and create a pull request that can be reviewed upon.
3. If you want to just see and experience the webpage, the link is found down below.
### Where users can get help with your project
Users can reach out to the project maintainers and contributors thourgh the GitHub repository's issue tracker for any questions or help needed. If not, then users are open to contact the contributors directly.
### Which technology is used
The technology used in this project include: HTML, CSS/SASS, BEM, Figma, Javascript and GSAP (GreenStock Animation Platform). Using SASS allows us to organize the code in a clearer and more efficient manner than with regular CSS. This also allows us to use SASS variables and BEM intertwined with SASS which comes in handy. We used Live Sass Compiler extention for compiling the files. In the Javascript, Intersection Observer API was utilized alongside GSAP library. Since the page is intended to be a scrollytelling experience, we used primarily GSAP "Scrolltrigger" plugin to to coordinate how elements move with scroll, and this allows us to give an immersive experience. While the intersection observer controls how text and other elements animates in. 
#### Other notes
- It was attempted to get this webpage more responsive, and most of it runs alright to an extent when switching to landscape orientation. The struggle was mostly getting story responsive with GSAP, so there are a few bugs in that translation.
- "@import animations" had to be included in the beginning of the "layout.scss" in order for the files to run without facing problems. There was an attempt to fix this in the "index.scss" file, but even when "@import layout" was stated after "animations", the files did not communicate as they should have. 
### Who maintains and contributes to the project
This project was made during the course [Advanced CSS](https://www.ntnu.edu/studies/courses/IDG1293/#tab=omEmnet) as part of a portfolio project.
The contents of the page is created and maintained by Maja Brunsvik and Sabrina Altahrawi, web development students at NTNU.

## Visit our webpage
[Scrollytelling website - Life below water](https://advancedcss2023.github.io/assignment-3--scrollytelling-group-6/)


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1TYCvbT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11008367&assignment_repo_type=AssignmentRepo)
