# LearnUX (temp name)
A web portal where everyone can learn about UX

## About 
LearnUX is a web portal providing crash courses on basic design concepts, such as color theory and composition. It is targeted towards people who have engineering backgrounds, but are interested in UX/UI design.

## Getting Started

Before we begin, we highly recommend you to prepare a CLI (command line interface) enviorment on your computer. If you are using Linux or MacOS, simply use the built-in terminal. 

Windows users are encouraged to use WSL, which allows a Linux OS to run on Windows. Installation procedures can be found [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Several varieties of Linux are offered - we recommend Ubuntu 18.04. 

### Prerequisites

This website is built using the 11ty framework, which requires Node.js and npm. Links to installation guides are below

- [Linux/WSL](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)
- [MacOS](https://treehouse.github.io/installation-guides/mac/node-mac.html)

Also, since we are using Git to manage versions, you will need to have [Git installed as well](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Setup 11ty

In your terminal, go to the directory you want to create the project folder. 
Clone the GitHub repository by running:

`git clone https://github.com/uclaacm/LearnUX.git`

This should create a new directory called `LearnUX`
Move into the directory:

`cd LearnUX`

In order to keep the project directory simple, the repository does not include all the modules you need to run 11ty. To install them, run:

`npm install --save-dev @11ty/eleventy`

This will tell 11ty to inspect the `package.json` file and install all neccesary modules. Once you have done that, you can build and run the website:

`npx @11ty/eleventy --serve`
