# Playwright Test

1. Clone the PlaywrightTest repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Playwright tests, you will need to set your LambdaTest username and access key in the environment variables.

**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Run Playwright Test

>**Test file**: The sample Test-cases-for-2200-news.js file search the term 'playwrightTest' on Yle Areena.


1. Clone the PlaywrightTest GitHub repository and switch to the cloned directory.

```js
git clone https://github.com/Arbit3r/playwrightTest
cd playwrightTest tests
```

2. Ensure you have npm dependencies installed. 

3. Configure your LambdaTest authentication credentials.

Once you are done with the above-mentioned steps, you can initiate your first Playwright test on LambdaTest. 

4. Pass the below command to run the test.

```
node tests\Test-cases-for-2200-news.js
```

The LambdaTest Automation Dashboard is where you can see the results of your Playwright tests after running them on the LambdaTest platform. 