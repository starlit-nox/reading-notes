## Things I want to know more about

# **Introduction to Git**

**Version Control: system that allows you to revisit various versions of files by recording changes

**Local version control:** one database on your hard drive that stores changes in files


	-short hand is VCS

**Centralized version control:** this system allowed collaboration via a single serve storing all changes & file versions so it can be accessed by multiple people

	-short hand is CVCS

**Distributed version control:** addressed major vulnerability of cvs; the server as a single point of failure. This allows clients to create mirrored repositories


	-bc DVCs allows for multiple mirrored repsorties, multiple people can work on a joint project with various workflows at the same time


	-short hand for this is DVCs

# **What is Git?**


	-its a DVC
	-it stores data in the form of snapshots

**Commit:** changing the version of your project


**Files in git can reside in three main states:**


	-committed
	-modified
	-staged

**Committed:** data is securely stored in a local database


**Modified:** file has been changed but not committed to database


**Staged:** flagged a file’s changed verison to be committed in the next snapshot

**Windows download link for Git:**

[**Git Website**]( http://git-scm.com/download/win)

[**Github:**]( http://windows.github.com)


# **Initial Customization**

## **Identity Setting**
After installing Git, users should immediately set the user name and email address, which will be used for every Git commit.
**Type the following into Terminal or Command Line:***

```
git config --global user.name "Jane Smith"

git config --global user.email "example@email.com"
To confirm that you have the correct settings, enter the following command:
git config --global user.name (should return Jane Smith)

git config --global user.email (should return example@email.com)
Check Settings

To check settings, use the git config --list command.
Example:
$ git config --list

user.name=Jane Smith

user.email=example@email.com

color.status=auto

color.branch=auto

color.interactive=auto

…
```


**Git Help Commands**


```
git help command

git command --help

man git-command
```
