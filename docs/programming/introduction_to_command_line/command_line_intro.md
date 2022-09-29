# What is the command-line interface?

The **command-line** interface (sometimes also called “**command prompt**” or “**terminal**”) is a way of
interacting with the computer using only the keyboard.
Many of the programs and tools used in bioinformatics are designed to work only from command-line, so
it’s very important to get familiar with how the terminal works.

Although there are different types of terminals, all of them have an interface (called “**shell**”) translating
the text you type into meaningful commands that the computer can understand.

Today we’ll focus on the most commonly used shell, [BASH](https://www.gnu.org/software/bash/)
(developed in 1989!), which is the default one for most Linux and
MacOS systems. It can also work on Windows, but you have to
manually install it.

# Why should we learn how to use the command line?

Here’s some reasons:
* It’s faster than using a GUI (Graphic User Interface)
* You can combine the usage of multiple programs in a
single line of code
* Most bioinformatics tools are made for command-line users
* It can handle big files (i.e. several MB or GB), like a
FASTA or FASTQ file (Word or Notepad would crash if
you try opening a big file)
* Command line has lots of powerful commands for
parsing (even very large) text files
* High-performance computing: the cluster doesn’t
have a GUI!
* Some binary files (e.g. BAM or CRAM) can only be
handled with dedicated command-line software (i.e.
samtools)
* Some comma- or tab-separated files can be
misinterpreted by tools like Excel (i.e. genes that look
like dates are automatically converted to dates by
Excel, or comma/dot usage for decimal positions)

# BASH commands – introduction
BASH has hundreds of commands, but don’t panic!
In most of the cases, you’ll only use a handful of them in your day-to-day work.

Most commands follow this simple general syntax:

If you’re unsure about a specific command’s
syntax, you can type `man` or `help` followed
by the command. For example, 

`$ man ls`

produces the following output.

~~~~
LS(1)                            User Commands                           LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List  information  about  the FILEs (the current directory by default).
       Sort entries alphabetically if none of -cftuvSUX nor --sort  is  speci‐
       fied.

       Mandatory  arguments  to  long  options are mandatory for short options
       too.

       -a, --all
              do not ignore entries starting with .

       -A, --almost-all
              do not list implied . and ..

       --author
 Manual page ls(1) line 1 (press h for help or q to quit)
~~~~

(use the arrows on your keyboard to scroll up and down the
manual; then press q to exit when you’re done)
Alternatively, you run one of the following:

`$ command --help`

`$ command -h`

# Moving between folders and checking their content: `pwd`, `ls`, `cd`
Let’s start by opening a terminal: where am I? Use the `pwd` (=print working directory) command:
(If you run a command, this is where it will be executed)

~~~~
$ pwd
/home/duncan
~~~~

What’s inside the working directory I’m currently in? Use the `ls` command (`ls *` to check the content of
all subfolders):
The command `ls -l` can be used to check the difference between files and folders:
(the “d” at the
beginning of the
left-most column tells
you that’s a directory,
whereas files don’t
have that flag)

The `ls` command can be used to check the content of other folders without changing your current directory:
How can I change directory (for example “Desktop”)? Use the `cd` command:
And if I want to return to my home folder? Use the `cd ~` command (or `cd ..` if it’s the parent directory):
Messy screen? Use the clear command to `clear` the screen:
(the commands you’ve done so far are not gone, you’ll find them by
just scrolling up, but the terminal is nicely cleaner now).

# Creating and copying files and folders: `mkdir`, `touch`, `cp`
How to create a new folder? Use the `mkdir` command
How to create a new file? In several ways; one of them is the `touch` command
What if I want to make a copy of a file? Use the `cp` command:
However, if you want to copy a folder, using `cp` alone will return an error. You need to add the `-r` option,
which will copy the content of that folder recursively (if unsure, have a look at `man cp`):

# Some important facts about file names...
It is worth remembering that:
* File names in Linux are case sensitive. E.g., the names “File.txt” and “file.txt” refer to different files
* File names beginning with a period (“.”) character are hidden, so if you type “ls” you won’t see them
unless you also use the option “-a”. Some applications usually place their configuration/settings files in
your home directory as hidden files.
* In Linux there is no concept of a "file extension" as in Windows, for instance. This means you can
name files as you like (e.g. “mickeymouse”). However, some programs might require input files to
have specific extensions. Also, pay attention not to name a file like a command! (e.g. “man”)
* Although Linux supports file names containing white spaces and punctuation characters, please limit
the characters you use to period (“.”), dash (“-”), and underscore (“_”) and try to avoid using spaces.
You will thank yourself later for this!
* Please avoid using bash commands as filenames: although possible, this might mess up your
commands!

# Moving and removing files or folders: mv, rm
The mv command can be used both to move and to rename files or folders:
To remove files, instead, you should use the rm command. If you need to remove a folder and, therefore,
its content, you should add the -r option (=”recursive”).
IMPORTANT: when you delete
something with “rm” it’s gone (it
doesn’t ask for confirmation)!
TRICK: try first the same command
but with “ls” instead of “rm”.
To remove multiple files, for example all those ending with “.png”, you can use
the wildcard “*” (e.g. “rm my_folder/*.png”). However, be careful with that: for
example, the command “rm *” will delete everything in your current folder!

