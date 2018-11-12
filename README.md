# Testing_With_CircleCI

This repo is an example how to link with continious integration tests using [CircleCI](https://circleci.com/). 
View these videos a background knowledge:
- [CircleCI Part 1: Introduction to Unit Testing and Continuous Integration](https://www.youtube.com/watch?v=CB7vnoXI0pE&list=RDQM1Id46_tWjcU&index=2)
- [CircleCI Part 2: Unit Testing with Jest](https://www.youtube.com/watch?v=S3QwafQEvSs&list=RDQM1Id46_tWjcU&index=3)
- [CircleCI Part 3: Continuous Integration with GitHub](https://www.youtube.com/watch?v=0OjEx2UzLUI&index=1&list=RDQM1Id46_tWjcU)

## Step 1 - Setup Github repo
- Create a new repo on github
- Clone repo locally 
- Write your code 
- Create .gitignore file
- Run ```npm init``` to make the package.json file
- Push code to master (for the first time)

## Step 2 - Setup Jest
- Go to [Jest website](https://jestjs.io/docs/en/getting-started.html)
- Run ```npm install --save-dev jest``` -dev will ensure that this package is only used for the deve environment and not production.
- Create new file *fileName*.test.js. FileName is the name of your main js file to be executed.
- Write tests in this js file.
- Verify you are exporting the test functions ```module.export = *funcitonName*```
- Run ```npm test``` in the console to verify tests are written correctly

## Step 3 - Set up Circle CI
- Log into [Circle CI](https://circleci.com/)
- Click *Add Project* and select the repo you would like to connect to Circle CI.
- Set up the Circle CI project
- Select language
- Follow instructios: create folder named *.circleci* and add file *config.yml*
- Copy *config.yml* from website to local file.
- Edit *config.yml* to contain the steps to execute the test: -checkout -run: npm install - run: npm test
- Commit code to master
- Click *start building* on the Circle CI website project.

## Step 4 - Protect Github master branch
- Go to repo on github
- Go to *settings* -> *branches* -> select *master* branch
- Check *protect this branch*
- Check *require status checks*
- Check *circleci* status checks
- Check *include administrators*
- Save changes

## Step 5 - Edit the code
- Edit the code and commit it to a different branch on github
- Create a pull request on Github
- Test should run automatically.
- If tests are successful, the new code can be merged into master.
