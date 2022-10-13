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

# Why should we learn to use the command line?

Here’s some reasons:
* It’s usually faster than using a GUI (Graphic User Interface)
* You can combine multiple programs, making the output of one the input of the next
* Most bioinformatics tools are made for command-line users
* It can efficiently handle big files that gui based tools might struggle to open
* The command line has lots of powerful commands for parsing text files
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
But be *CAREFUL*: the command `rm *` will delete everything in your current folder.

IMPORTANT: when you delete
something with `rm`, it’s gone (it
doesn’t ask for confirmation)!

TRICK: first try the same command
but with `ls` instead of `rm` to check you have the right files.

# Some important facts about file names...
It is worth remembering that:
* File names in Linux are case sensitive: the names “File.txt” and “file.txt” refer to different files
* File names beginning with a period (“.”) character are hidden, so if you type `ls` you won’t see them
unless you also use the option `-a`. Some applications usually place their configuration/settings files in
your home directory as hidden files.
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

will send no output to the terminal, but instead creates a file `myfiles.txt`. Be *CAREFUL*, this will always
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

# Some filters: sort, uniq, cut, tr
Bash contains lots of commands which can take standard input, transform it, and then send the result to standard output.

Let's imagine we have the following file

~~~~
$ cat beatles.tsv 
John	vocals,guitars,keyboards,harmonica,bass
Paul	vocals,bass,guitars,keyboards,drums
George	guitars,vocals,sitar,keyboards,bass
Ringo	drums,percussion,vocals
~~~~

You can get a copy for yourself and play along:

`wget https://www.well.ox.ac.uk/~duncan/beatles.tsv`

* `sort` sorts its input alphabetically, numerically, or even randomly

Let's sort the Beatles based on their first names (from column 1)

~~~~
$ sort -k 1 < beatles.tsv 
George	guitars,vocals,sitar,keyboards,bass
John	vocals,guitars,keyboards,harmonica,bass
Paul	vocals,bass,guitars,keyboards,drums
Ringo	drums,percussion,vocals
~~~~

* `cut` lets you pick particular columns of the input to keep

If we only want the names above, then we could use cut to pick out just the first column.

~~~~
$ cut -f 1 < beatles.tsv
John
Paul
George
Ringo
~~~~

By default, cut bases its columns on tabs, but it can use anything you like. Let's get just the first instrument from that list by using cut again
with the "delimiter" set to a comma.

~~~~
$ cat beatles.tsv | cut -f 2 | cut -d ',' -f 1
vocals
vocals
guitars
drums
~~~~

* `uniq` removes duplicate lines from standard input (remember to sort it first!)

~~~~
$ cat beatles.tsv | cut -f 2 | cut -d ',' -f 1 | uniq
vocals
guitars
drums
~~~~

* `tr` translates characters into others

If you give it two equal length strings, it will swap characters in the first string in standard input for the corresponding characters from the second string.

~~~~
$ echo veryinsecurepassword | tr osi 05!
very!n5ecurepa55w0rd
~~~~

It can also be used to change the case of a string

~~~~
$ echo HELLO | tr [:upper:] [:lower:]
hello
~~~~

As you can see, you can do a lot by combining simple tools together with pipes.

# Grep, Awk and Sed

Grep, Awk, and sed are all sophisticated tools in their own right, which would be well worth looking into in detail. However there are a few recipies that you can use with each of them without needing to understand them deeply.

* `grep` extracts lines containing a pattern

You could use it to see who in the Beatles plays  keyboards

~~~~
$ cat beatles.tsv | grep keyboards
John	vocals,guitars,keyboards,harmonica,bass
Paul	vocals,bass,guitars,keyboards,drums
George	guitars,vocals,sitar,keyboards,bass
~~~~

* `awk` filter lines based on the contents of a column

Let's pick out just Paul using his name in column one

~~~~
$ cat beatles.tsv | awk '$1=="Paul"'
Paul	vocals,bass,guitars,keyboards,drums
~~~~

* `sed` can parse and transform text in a more sophisticated way than `tr`

For example, it can be used to substitute some text with other text

~~~~
$ cat beatles.tsv | sed 's/keyboards/piano/'
John	vocals,guitars,piano,harmonica,bass
Paul	vocals,bass,guitars,piano,drums
George	guitars,vocals,sitar,piano,bass
Ringo	drums,percussion,vocals
~~~~

# Exercises

1) Get the file https://www.well.ox.ac.uk/~duncan/dna.txt of simulated DNA strings (you can use `wget` or `curl`)
2) How many lines contain the sequence CGAT (we call a string we're looking for in DNA a motif).
3) What line numbers contain this sequence?
4) Can you reverse complement the sequences line by line? (have a look at `man rev`)
5) How many lines in the complement contain the motif CGAT?
