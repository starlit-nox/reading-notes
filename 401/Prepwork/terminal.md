# Practice in the Terminal 

## Sumarry


The command line interface, commonly known as the terminal, is an essential tool for performing advanced operations on a computer. It serves as a text-based alternative to the user interface, allowing users to navigate the file system and execute powerful commands. By using commands like cd to change directories and ls to list files, users can efficiently explore and manage their files and folders. Below is a list of important information fronm the text as well, out-lining must-know commands to remember. 

## The Command Line!

<https://ryanstutorials.net/linuxtutorial/commandline.php>

- The command line (or terminal) is a text-based interface to the system.

- It complements the graphical user interface (GUI) and provides additional functionality.

- Opening a terminal: Windows - Use an - SSH client like PuTTY for remote logins.

- The shell is the part of the operating system that defines terminal behavior.

- Bash (Bourne Again Shell) is the most common shell used in Linux.

- Basic navigation: Enter commands after the prompt, followed by command line arguments.

- Command line arguments can include options to modify command behavior.

- Prompt reappears after a command finishes executing.

- Use up and down arrow keys to traverse command history, and left and right arrow keys for editing commands.

- Echo $SHELL command displays the current shell.

## Basic Navigation!

<https://ryanstutorials.net/linuxtutorial/navigation.php>

- The pwd command displays the current working directory.

- The ls command lists the contents of a directory.

- ls can be used with options to modify its behavior, such as -l for a long listing.

- Paths in Linux can be absolute (starting from the root directory) or relative (in relation to the current directory).

- The tilde (~) represents the home directory.

- The dot (.) represents the current directory.

- The dotdot (..) represents the parent directory.

- The cd command is used to change directories.

- Tab completion is a helpful feature that allows for auto-completion of paths by pressing the Tab key.

- Understanding and using absolute and relative paths is crucial for navigating and referencing files and directories effectively.

## More About Files!

<https://ryanstutorials.net/linuxtutorial/aboutfiles.php>

- In Linux, everything is considered a file, including directories, keyboards, and monitors.

- Linux is an extensionless system, meaning the system looks inside files to determine their type instead of relying on file extensions.

- Linux is case sensitive, so filenames and command line options are recognized based on their case.

- When dealing with spaces in file or directory names, use quotes or escape characters (backslash) to ensure they are treated as a single argument.

- Hidden files and directories in Linux are denoted by a dot (.) at the beginning of their names. Use the -a option with the ls command to display hidden files and directories.

## Manual Pages!

<https://ryanstutorials.net/linuxtutorial/manual.php>

- Manual pages provide detailed information about every command available on your Linux system, including their functionality, usage, and command line options.

- To access the manual page for a specific command, use the command man followed by the command you want to look up (e.g., man ls).

- The manual page includes a synopsis that gives a quick overview of how the command should be run, followed by a detailed description and a list of available command line options.

- You can search for keywords in the manual pages using the command man -k <search term>. This is helpful when you're not sure which command to use but know what you want to achieve.

- Within a manual page, you can perform a search by pressing forward slash ("/") followed by the term you want to search for. Pressing "n" allows you to cycle through multiple occurrences of the term.

## File Manipulation!

<https://ryanstutorials.net/linuxtutorial/filemanipulation.php>

- **Creating a directory:** Use the command mkdir followed by the directory name to create a new directory. For example, mkdir linuxtutorialwork.

- **Removing a directory:** Use the command rmdir followed by the directory name to remove an empty directory. For example, rmdir backups.

- **Creating a blank file:** Use the command touch followed by the file name to create a new empty file. For example, touch example1.

- **Copying a file or directory:** Use the command cp followed by the source and destination to make a copy of a file or directory. 

```
For example, cp example1 barney.
```

- **Moving a file or directory:** Use the command mv followed by the source and destination to move or rename a file or directory. 

```
For example, mv foo foo3.
```

- **Removing a file:** Use the command rm followed by the file name to remove or delete a file. 

```
For example, rm example1.
```

- **Removing non-empty directories:** Use the command rm with the -r option to remove directories and all files and directories within. 

```
For example, rm -r backups.
```

- Pay attention to the use of absolute and relative paths when specifying files and directories.

- Use the -p option with mkdir to create parent directories as needed.

- Use the -v option with mkdir, cp, and mv to display the command's actions.

- Use the -r option with cp to recursively copy directories and their contents.

- **IMPORTANT!!!!!** There is no undo feature in the command line, so be VERY CAREFUL with file and directory manipulations.

## Cheat Sheat

<https://ryanstutorials.net/linuxtutorial/cheatsheet.php>

## Basic Navigation

- `pwd`: Show current directory

- `ls [path]`: List files and directories
  - Common options: `-l`, `-h`, `-a`

- `cd [path]`: Change directory

- Path:
  - Absolute path: Begins from the root of the file system (e.g., `/etc/sysconfig`)
  - Relative path: Relative to the current location (e.g., `Documents/music`)
  
- `~` (tilde): Represents the home directory

- `.` (dot): Represents the current directory

- `..` (dot dot): Represents the parent directory

- TAB completion: Auto-complete paths by pressing TAB

## More About Files

- `file [path]`: Determine file type

- Spaces in names: Use quotes (`"`) or backslashes (`\`) to handle spaces

- Hidden files and directories: Names starting with a dot (e.g., `.config`)

- Permissions: `r` (read), `w` (write), `x` (execute)
  - Owner/User, Group, Others

- `ls -l [path]`: View permissions of files and directories

- `chmod <permissions> <path>`: Change permissions (shorthand or longhand)

## Process Management

- `CTRL + C`: Cancel the current process

- `kill <process_id>`: Cancel the specified process
  - Use `-9` option for stubborn processes

- `ps`: List processes and their IDs
  - Use `aux` option to show all processes

- `CTRL + Z`: Pause current process and put it in the background

- `jobs`: List current background processes

- `fg <job_number>`: Move a process from the background to the foreground

## Manual Pages

- `man <command>`: View manual page for a command

- `man -k <search_term>`: Search for manual pages containing the search term

- Press `q` to exit manual pages