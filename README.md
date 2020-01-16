# LearnUX (temp name)

LearnUX is a web portal providing crash courses on basic design concepts, such as color theory and composition. It is targeted towards people who have engineering backgrounds, but are interested in UX/UI design.

# Getting Started

Before we begin, we highly recommend you to prepare a CLI (command line interface) enviorment on your computer. If you are using Linux or MacOS, simply use the built-in terminal. 

Windows users are encouraged to use WSL, which allows a Linux OS to run on Windows. Installation procedures can be found [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Several varieties of Linux are offered - we recommend Ubuntu 18.04. 

## Prerequisites

This website is built using the 11ty framework, which requires Node.js and npm. Links to installation guides are below

- [Linux/WSL](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)
- [MacOS](https://treehouse.github.io/installation-guides/mac/node-mac.html)

Also, since we are using Git to manage versions, you will need to have [Git installed as well](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Setup 11ty

In your terminal, go to the directory you want to create the project folder. 
Clone the GitHub repository by running:

```
git clone https://github.com/uclaacm/LearnUX.git
```

This should create a new directory called `LearnUX`
Move into the directory:

```
cd LearnUX
```

First and foremost we need to install 11ty. To do that, run:

```
npm install --save-dev @11ty/eleventy
```

This will tell npm to inspect the `package.json` file and install all neccesary modules, including 11ty. Once you have done that, you can build and run the website:

```
npx @11ty/eleventy --serve
```

Go to your web browser and access `http://localhost:8080/`, and you should see the website up and running. Press `Ctrl + C` to stop the website.

---

## Set up Zeit

This project will be using Zeit to host the website. Zeit is a static cloud hosting/function service, which allows you to host websites and functions with little to no configurations. 

### Deploying

The GitHub repo has already been configured to automatically deploy, or publish, the website when a push is made to the repo. More specifically, pushing to the repo will initiate a script that creates a *development* deployment, which contains all the chnages you committed in the push. As its name implies, this is not meant to be the final product, and is usually used to share the link with other developers and ask for feedback.

Meanhile, when we as a team collectively agree to merge a branch into the master branch, a script will be fired to create a *production* deployment. This is the final product that will be made public to the world, and thus should be deployed with care.

As of 01/20, the production deployment can be found here: [learnux.tfukaza.now.sh](https://learnux.tfukaza.now.sh/)

### Deploying Locally

:construction: Not yet done

## :no_entry: For admins / backend devs only

This section lists the protocol when handing over the ownership of the website to a new admin. 

- A new admin should first make a ZEIT account, as that is where the website will be hosted. 
- Since domain ownership is tied to the ZEIT account, transfer domains (if needed)
- Create a new token for the ZEIT account in ZEIT's online portal
- Go to the settings of this repo, and click on the "Secrets" tab 
- Update the ZEIT_TOKEN parameter with the new token 

