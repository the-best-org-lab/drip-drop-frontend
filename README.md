# DripDrop File System
DripDrop is a dropbox-like file storing application for ad agencies and marketing departments who need to review creative content before giving the OK to put it out into the world. Users can upload files, download files, and tag them to show whether they are new, being reviewed, or complete.

*IMPORTANT LINKS*
Deployed Front-End App:
https://the-best-org-lab.github.io/drip-drop-frontend/
Front-End Repo:
https://github.com/the-best-org-lab/drip-drop-frontend
Backend Repo:
https://github.com/the-best-org-lab/drip-drop-backend
Wireframes: https://drive.google.com/drive/folders/0BxtpRPyddhwRQzlkNHVSSFBLZ00?usp=sharing
ERD:
https://drive.google.com/file/d/0BxtpRPyddhwReFphTEtCZDk4NjA/view?usp=sharing
Trello (includes column for user stories--far left):
https://trello.com/b/bRyHNpqY/wdi-3-git-rich-or-die-pryin


## Technologies Used:
This is a single page application built with an Express API and Mongoose/MongoDB. All files are stored on Amazon Web Services (AWS) S3. The front end was built using javascript, bootstrap, handlebars, and ajax.

Express, Mongoose/MongoDB, Node.js, AWS S3, Javascript, JQuery, Bootstrap, HTML5/CSS3, Handlebars, Ajax, fs, AWS, mime, path, dotenv, crypto

# Approach
Our team approached this project, first, by planning thoroughly. On our first day of the 4-day project work-time, we read the requirements thoroughly, whiteboarded a concept for the UI. We also created an ERD and abstracted the attibutes and and methods.

Once we felt we understood the project requirements, we created our basic user stories together and added them to a kanban-style Trello board. The Trello board was helpful to keep us on the same page and track our progress. We agreed on system for the board in which we were all empowered to add cards to the backlog and pick them off as we had time. Our "In-Progress" column showed anything we were currently working on and Trello allowed us to tag the cards with an owner.

Then, we talked through and diagrammed a group process for Git/Github. In brief, each member of the team would create a feature branch for the specific card he/she was working on. When that card was ready to be merged, the team member would first rebase from the Github dev branch to ensure they had the latest shared code. Then, push the feature branch up to Github and create a pull request. That pull request was then reviewed by another team member and, if accepted, merged into the dev branch. When we reached a significant milestone in the project, we would merge dev into master and go through the deploy steps to update the production environment.

Git/Github Process:
1. Create a feature branch tied to a Trello card
2. Complete work on that specific card
3. Rebase local dev from remote dev branch
4. Rebase feature branch from dev
5. Push feature branch to Github
6. Create pull request on Github
7. Another team member review pull request
8. If approved, feature branch is merged into dev
9. When a milestone is reached, dev is merged into master
10. Master is then deployed

We also instituted daily standups where we each updated the group on our progress and any blockers we found. During these standups we updated the Trello board and talk through any new cards that had been added.

For more complex cards we would discuss the implementation as group before diving into the code. We often pair programmed, particularly in places where one member of the team had written the initial code that was being altered.

## Future Iterations/Major Hurdles
There were several major hurdles we overcame while builing this app, including storing files on AWS, and correctly setting permissions for the Add/Edit/Delete actions. The function that stores files on AWS includes a promise and has multiple steps all of which require data based by the preceeding function. It took a while for us to troubleshoot each step to ensure that that proper data was passed through the entire feature. For permissions, we figured out how to set the owner for the edit/delete actions so that only that user could complete them and installing error message when anyone else tried.

While our app is completely functional, there are several updates we would like to make to improve it, such as:
- Enhanced UI and branding
- Ability to set permissions for users
- Enhanced mobile responsiveness
- Additional styling and branding

## Dependencies/Installation
Mongoose
npm install --save mongoose
const mongoose = require('mongoose')

fs
npm install --save fs
const fs = require('fs')

AWS
npm install --save aws-sdk
const AWS = require('aws-sdk')

mime
npm install --save mime
const mime = require('mime')

path
npm install --save path
const path = require('path')

crypto
npm install --save crypto
const crypto = require('crypto')

dotenv
npm install --save dotenv
require('dotenv').load()

## USER STORIES:

### Login
As a user, I would like to login, so that I can use the app.

### Create Account
As a user, I would like to create an account so that I can login

### Log out
As a user, I would like to sign out so that other people can't edit files

### Change Password
As a user I would like to change my password in case it is compromised

### List Folders
As a user, I would like to see a list of available folders, so that I can open one.

*Acceptance Criteria:*
- This is the homepage of the app
- All users can see all folders
- User cannot create a folder unless they're logged in
- Folders only have a name

### Create Folder
As a logged in user, I would like to create a folder, so that I can upload files.

*Acceptance Criteria:*
- Only logged in user can create a folder

### List Files
As a user, I would like to see a list of files in a folder, so that I can open download them.

*Acceptance Criteria:*
- All users can view, open, and download ALL files
- Logged in users may edit or delete ONLY the files that they own
- Files list should show: name, tags, date created, date modified
- Each file should have open and download buttons

### Upload File
As a logged in user, I would like to be able to upload a file, so that I can store my stuff in the dropbox.

*Acceptance Criteria:*
- Upload file UI should show the folder name
- Must be logged in to upload a file
- File must have a name
- File must have a file
- Tags are optional

### Edit File
As a user, I would like to be able to edit files so that I can change things I've previously uploaded.

*Acceptance Criteria:*
- Only logged in users my edit files
- Users my only edit files that they own

### Delete File
As a user, I would like to be able to delete a file that I uploaded, so that I can get rid of files that I don't need anymore.

*Acceptance Criteria:*
- Only the file owner can delete the file
- Must be logged in to delete a file
- Should be given asked to confirm the delete
- Should be given confirmation that the delete succeeded

### Show File
As a user, I would like to be able to open files, so that I know what they contain.

*Acceptance Criteria:*
- ALL users can open files
- Method and display for opening files is TBD

### Download a File
As a user, I would like to be able to download files so that I can have them stored locally.

*Acceptance Criteria:*
- ALL users should be able to download ALL files
- Downloaded file should be stored in user's machine default download folder
