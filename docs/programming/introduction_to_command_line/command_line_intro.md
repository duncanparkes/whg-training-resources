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

# First Commands

When you first open a terminal, you might want to find out a bit about where you are.

You can find out what your username is with `whoami`

~~~~
$ whoami

duncan
~~~~

the hostname of the computer you're using with `hostname`

~~~~
$ hostname

duncans-laptop
~~~~

the directory you're currently in with `pwd` (print working directory)

~~~~
$ pwd

/home/duncan
~~~~

what files are there in the directory you're in

~~~~
$ ls
bash_intro1.md      bash_intro2.md         bash_intro.md
bash_intro_2012.md  bash_introduction.doc  bash_intro.md.old
~~~~

and what you've been up to recently with `history`

~~~~
$ history
 1 whoami
 2 hostname
 3 pwd
 4 history
~~~~

# Help me!
BASH has hundreds of commands, but don’t panic!
In most of the cases, you’ll only use a handful of them in your day-to-day work.

Most commands follow this simple general syntax:

If you’re unsure about a specific command’s
syntax, you can type `man` followed by the command. For example, 

`$ man ls`

produces the following output

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

Alternatively, you can try tying the command name followed by `--help`, for example

`$ ls --help`

or 

`$ ls -h`

for short.

# Moving between folders and checking their content: `ls`, `cd`

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

# Practical Session 1

Open a terminal

1) Create a new directory named folder_A/
2) Move into the folder you just created and create a new file named file_A.txt
3) Go back to your home folder, make a copy of folder_A/ and call it folder_B/
4) Rename the text file in folder_B/ as file_B.txt
5) Check the content of both folders

# Practical Session 1 – solutions

1) mkdir folder_A/
2) cd folder_A/ , followed by touch file_A.txt
3) cd ~ , followed by cp r folder_A/ folder_B/
4) mv folder_B/file_A.txt folder_B/file_A.txt
5) ls folder_*

# Viewing the content of a file: `cat`, `less`, `more`, `file`, `head`, `tail`, `wc`

There are several ways to see the content of a file without having to use a text editor:
* `cat` will print the whole file content on the screen
* `more` shows you the content of the file one page at a time. Press the space bar to see the next page
`your keyboard; to exit from this view` mode, just type “q”
* `file` can recognise most types of files without the need to open them, such as ASCII-text based files,
bash files, executable binaries, web pages, compressed archives, etc.
* `head` will show you the first 10 lines of a file (default, it can be customised)
* `tail` will show you the first 10 lines of a file (default, it can be customised)
* `wc` will tell you the number of lines, words and bites of a given file

# I/O redirection and piping

In computer programming, there are three standardised streams of
communication: standard input (stdin), standard output (stdout), and
standard error (stderr).
Standard Output:
Many commands (e.g. “ls”) write their output on the display. However, sometimes you might need instead to
have this output written to a file, or device instead. There are some special notations to do this:
* the “>” symbol writes the output of a command to a new file, so no results are shown on the screen. If
the file doesn’t exist, it will be created; otherwise, it will be overwritten!
* the “>>” symbol appends the output of a command to a new file; if the file does not exist, it will be
created; otherwise, the output will be added to the end of the file (the echo command used here displays
a line of text to the standard output):

Standard Input:
Several commands can accept their input from a file or another command:
A command can have both its input and output redirected:
Pipelines:
Probably the most useful option for I/O redirection. It allows you to connect multiple commands by feeding
the standard output of one command into the standard input of another command. Here's an example:

What if you want to send your output to standard out and keep a copy in a file as well? You need `tee`: this takes input on standard in, echoes it to standard out, but sends a copy to a file as well. You can imagine a letter T with standard input coming from the left, standard output going to the right, and a copy being dropped in a file at the bottom.

~~~~
$ echo hello | tee hello.txt
hello
$ cat hello.txt
hello
~~~~

# Some filters: sort, uniq, cut, grep, tr, awk, sed
Certain commands – often combined in pipelines – are used to take standard input, perform some
operation on it, and then send the result to the standard output:

* `sort` sorts (numerically, alphabetically, or randomly) standard input and outputs the sorted result to
the standard output; we already saw an example in the previous slide
* `uniq` removes duplicate lines from standard input (remember to sort it first!)
* `cut` lets you slice up lines based on particular criteria
* `grep` extracts lines containing a pattern from the standard input
* `awk` is a sophisticated programming language. One example thing you can do is filter lines based on the contents of a column. e.g. `awk '$3=="data"'`
* `tr` translates characters into others (e.g. uppercase in lowercase)
* `sed` can parse and transform text in a more sophisticated way than “tr”

# Practical Session 2 – Exercises

1. Create a new empty file named test.txt , check its default file permissions, and then change them
such that every user can read and modify the file
2. Using echo and redirection, write the following 5 strings, one per line into
the file test.txt :
5 oranges
3 bananas
2 apples
4 pears
1 pineapple
3. Display the content of your file on the stdout
4. Sort the file test.txt alphabetically (using the second column of fruit names) and, instead of having
the output printed on the stdout, write it in a new file test_sorted.txt (you’ll need `man sort`)
5. Use `tail` to get the last 3 lines of the file test.txt , append them to the file test_sorted.txt ,
and then check how many lines are now in the file test_sorted.txt (there should be exactly 8 lines)
6. Sort the file test_sorted.txt by reverse numerical order of its first column, then pipe the result to
uniq to get only unique lines, and finally use grep to extract only lines containing the word apple

# Practical Session 2 – Solutions
1. `touch test.txt`, followed by `ls -lh test.txt`, followed by `chmod a+rw test.txt`
2.
~~~~
echo "5 oranges" > test.txt
echo "3 bananas" >> test.txt
echo "2 apples" >> test.txt
echo "4 pear" >> test.txt
echo "1 pineapple" >> test.txt
~~~~

or in one line

`echo -e "5 oranges\n3 bananas\n2 apples\n4 pear\n1 pineapple" > test.txt`

3. `cat test.txt` or `more test.txt`
4. `sort -k 2 test.txt > test_sorted.txt`
5. `tail -3 test.txt >> test_sorted.txt` , followed by `wc -l test_sorted.txt`
6. `sort -k 1 -n -r test_sorted.txt | uniq | grep apple`
