USER STORIES:
Login
As a user, I would like to login, so that I can use the app.

Create Account
As a user, I would like to create an account so that I can login

Log out
As a user, I would like to sign out so that other people can't edit files

Change Password
As a user I would like to change my password in case it is compromised

List Folders
As a user, I would like to see a list of available folders, so that I can open one.

Acceptance Criteria:
- This is the homepage of the app
- All users can see all folders
- User cannot create a folder unless they're logged in
- Folders only have a name

Create Folder
As a logged in user, I would like to create a folder, so that I can upload files.

- Only logged in user can create a folder

List Files
As a user, I would like to see a list of files in a folder, so that I can open download them.

Acceptance criteria:
- All users can view, open, and download ALL files
- Logged in users may edit or delete ONLY the files that they own
- Files list should show: name, tags, date created, date modified
- Each file should have open and download buttons

Upload File
As a logged in user, I would like to be able to upload a file, so that I can store my stuff in the dropbox.

Acceptance criteria:
- Upload file UI should show the folder name
- Must be logged in to upload a file
- File must have a name
- File must have a file
- Tags are optional

Edit File
As a user, I would like to be able to edit files so that I can change things I've previously uploaded.

Acceptance Critera:
- Only logged in users my edit files
- Users my only edit files that they own

Delete File
As a user, I would like to be able to delete a file that I uploaded, so that I can get rid of files that I don't need anymore.

Acceptance Criteria:
- Only the file owner can delete the file
- Must be logged in to delete a file
- Should be given asked to confirm the delete
- Should be given confirmation that the delete succeeded


Show File
As a user, I would like to be able to open files, so that I know what they contain.

Acceptance criteria:
- ALL users can open files
- Method and display for opening files is TBD

Download a File
As a user, I would like to be able to download files so that I can have them stored locally.

Acceptance Criteria:
- ALL users should be able to download ALL files
- Downloaded file should be stored in user's machine default download folder
