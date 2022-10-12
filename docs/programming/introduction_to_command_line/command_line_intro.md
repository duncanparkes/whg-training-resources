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
 4 ls
 5 history
~~~~

# Help me!
BASH has hundreds of commands, but don’t panic!
In most of the cases, you’ll only use a handful of them in your day-to-day work.

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

# Standard command syntax

Most commands follow the same basic syntax as `ls`.

`ls -lahR my_folder`

This has three parts

* the command name (`ls`)
* some options (`-lahR`), which change how the command behaves
* and some positional arguments (`my_folder`), which are what the command operates on.

The options here are actually `-l`, `-a`, `-h`, and `-R`, but they can be combined together as `-lahR`. Some options have longer names starting with `--`, for example, `-h` is short for `--human-readable`. The longer names can't be combined in the same way.

The positional arguments, if there are more than one, are separated by spaces.

We could have written the command above as

`ls -la -R --human-readable my_folder`

# Directories (also known as folders)

Let's make a new folder and tidy away some of those files.

`$ mkdir archive`

(`mkdir` stands for "make directory")

~~~~
$ ls
archive         bash_intro_2012.md  bash_introduction.doc  bash_intro.md.old
bash_intro1.md  bash_intro2.md      bash_intro.md
~~~~

You'll notice that the new directory has been made in the current working directory. We can change our working directory with `cd` ("change directory").

~~~~
$ cd archive
$ pwd
/home/duncan/archive
~~~~

You can also change to a directory by giving `cd` the whole "path".

`$ cd /home/duncan/archive`

If you want to get back to the directory above the one you're currently in, `..` refers to the parent of the current directory.

~~~~
$ pwd
/home/duncan/archive
$ cd ..
$ pwd
/home/duncan
~~~~

Another useful shortcut is `~`, which refers to your home directory.

~~~~
$ cd ~
$ pwd
/home/duncan
~~~~

# Moving and Copying Files

It's time to hide away some of those old versions in the archive.

~~~~
$ mv bash_intro.md.old bash_introduction.doc archive/
~~~~

`mv` stands for "move", and allows you to move files from one place to another. In the form above it takes the files represented by all positional arguments except the last one and puts them in the directory which is its final argument.

It can also be used to rename a file.

`$ mv bash_intro_2012.md bash_intro_oldest.md`

It even works on directories

`$ mv archive old`

Copying files is similar to moving them, but uses the command `cp`.

`$ cp bash_intro.md bash_intro_final.md`

# Removing files or folders: `rm`, `rmdir`

To remove files you can use the `rm` command.

`$ rm bash_intro2.md`

If you want to remove a directory, you can use `rmdir`, but this only works if the directory is empty.

~~~~
$ rmdir old
rmdir: failed to remove 'old': Directory not empty
~~~~

If you want to remove a folder and its contents, you can pass the `-r` argument to `rm`,
which tells it to remove the directory "recursively".

`$ rm -r old`

To remove multiple files, for example all those ending with “.png”, you can use
the wildcard `*`, for example, `rm my_folder/*.png`.
But be careful: the command `rm *` will delete everything in your current folder.

IMPORTANT: when you delete
something with `rm`, it’s gone (it
doesn’t ask for confirmation)!

TRICK: first try the same command
but with `ls` instead of `rm` to check you have the right files.

# Some important facts about file names...
It is worth remembering that:
* File names in Linux are case sensitive. E.g., the names “File.txt” and “file.txt” refer to different files
* File names beginning with a period (“.”) character are hidden, so if you type `ls` you won’t see them
unless you also use the option `-a`. Some applications usually place their configuration/settings files in
your home directory as hidden files.
* In Linux there is no concept of a "file extension" as in Windows, for instance. This means you can
name files as you like (e.g. “mickeymouse”). However, some programs might require input files to
have specific extensions. Also, pay attention not to name a file like a command! (e.g. “man”)
* Although Linux supports file names containing white spaces and punctuation characters, please limit
the characters you use to period (“.”), dash (“-”), and underscore (“_”) and try to avoid using spaces.
You will thank yourself later for this!
* Please avoid using bash commands as filenames: although possible, this might mess up your
commands!

# Creating files

A simple way to create an empty file is to use `touch`

`$ touch new_file.txt`

If you want to write a text file, there are lots of possible editors you can use. A good one to start off with is `nano`.

`$ nano notes.txt`

# Practical Session 1

Open a terminal

1. Create a new directory named `folder_A`
2. Go into the folder you just created and create a new file named `file_A.txt`
3. Go back to your home folder, make a copy of `folder_A` and call it `folder_B`
4. Rename the text file in `folder_B` to `file_B.txt`
5. Check the content of both folders

# Practical Session 1 – solutions

1. `mkdir folder_A/`
2. `cd folder_A/`, followed by `touch file_A.txt`
3. `cd ~`, followed by `cp -r folder_A/ folder_B/`
4. `mv folder_B/file_A.txt folder_B/file_B.txt`
5. `ls folder_*`

# Viewing the content of a file: `cat`, `less`, `head`, `tail`

Obviously you can view the content of a file with an editor like `nano`, but then you're losing
some of the advantages of being on the command line.

The simplest way to see the contents of a file is with `cat`, which just prints the contents of the
file to the screen and then returns you to the command prompt.

`$ cat notes.txt`

If the file you looked at was long, the start of it has probably disappeared off the top of the screen.
If you just want to see the start of the file, you can use `head`

`$ head notes.txt`

Similarly, you can see the last few lines of the file with `tail`.

`$ tail notes.txt`

If the file you're interested in is still getting new stuff added to its end, you can use `tail -f`
to follow new content at the end of the file.

`$ tail -f log.txt`

You'll neet to type CTRL-c to stop tailing the file.

If you want to be able to move around inside a file you're looking at, a good choice would be to use `less`.

`$ less notes.txt`

You can then move around with the cursor keys and PageUp and PageDown. Press `q` to return to the command line.

Why is it called `less`? It's an improved version of an earlier command called `more`, and less is more.

# Getting information about a file

If you want a word or line count of a file, `wc` will tell you the number of lines, words and characters

`$ wc notes.txt`

Often we want to know just the number of lines

`$ wc -l notes.txt`

# I/O redirection and piping

In programming there are three standard streams of communication

* standard input (stdin)
* standard output (stdout)
* standard error (stderr)

Stdin is what goes into a command, stdout is what comes out of it, and stderr is somewhere for the command to write messages about how things are going (such as error messages).

## Standard Output

By default, stdout from a command is sent to the terminal, and that's what you're seeing when you type `ls`, etc.

However, sometimes you might need instead to
have this output written to a file.

If you follow a command with `>` and the name of a file, then stdout will go there instead, so

`$ ls > myfiles.txt`

will send no output to the terminal, but instead creates a file `myfiles.txt`. Be careful, this will always
make a new file. If there was already a file with the name name it will be overwritten and the previous contents
will be lost.

We say that the output has been "redirected" to the file.

If you use `>>` instead, then the output will be appended to the file rather than overwriting it. This is useful for things like log files.

## Standard Input

Many commands can accept input from stdin. A good example is `wc`: if it's not given a filename, `wc` will work on stdin instead. So for example, we can redirect a file to `wc`.

~~~~
$ wc -l < myfiles.txt
6
~~~~

A command can have both its input and output redirected

~~~~
$ wc -l < myfiles.txt > filecount.txt
$ cat filecount.txt
6
~~~~

## Pipelines

Using standard input and standard output is not just another way to read from files and write to files:
you can also connect commands together in chains, sending stout from one command to stdin of another.
We use the pipe symbol for this `|`.

~~~~
$ ls | wc -l
6
~~~~

Here we list the files in the current directory, and pipe the output of this to `wc` to count the number of lines. (Notice that ls has realised it's in a pipeline and written the filenames one per line).

This technique of piping one command to another is probably one of the most powerfull things in bash.

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
