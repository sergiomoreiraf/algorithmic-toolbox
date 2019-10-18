# Algorithmic Toolbox

Boilerplate code for [Algorithmic Toolbox](https://www.coursera.org/learn/algorithmic-toolbox) on [Coursera](https://www.coursera.org). First step on [Data Structures and Algorithms Specialization](https://www.coursera.org/specializations/data-structures-algorithms).

This is a boilerplate only that provide the student with the starter files needed to code with Javascript. An exception was made for the very first exercice as it's used to learn how to use the **upload code** feature.

A starter file, as stated on the course rules, should only read the input data and write the output data.

As a bonus, it's included the possibility to test code using [Jest](https://jestjs.io/) with only the input and output of the very first example described on the manual for each exercice.

## How to setup and run

For coding and running, I recomend [VS Code](https://code.visualstudio.com/). Take a look, it's really awesome.

First you should have **Node** installed.

To install node, I recomend to use [NVM - Node Version Manager](https://github.com/nvm-sh/nvm). Please see the website for instructions.

Next step is to install the npm dependencies.

```sh
npm install
```

From this, just run the **_.js_** file you would like to run. For example, the command below runs the first exercice.

```sh
node ./week1_programming_challenges/1_sum_of_two_digits/aplusb.js
```

Then input the numbers as expected by the program

```sh
2 3
```

Then see the output if your code works. In this example, the number 5.

## How to debug

I decided to use the [Jest](https://jestjs.io/) javascript testing framework because of it's simplicity.

There are two ways to run the test: **test watching** or **debug once**.

Test watching setups Jest to keep listening for code changes and redo the tests so you can follow the tests failing or passing. It keeps going until you hit **ctrl-c**.

This is the defaut test option on npm. To run test watch, type:

```sh
npm test
```

Debug once runs all the test once and with the debug enabled, so you can set a breakpoint on the code. When the execution hit that breakpoint it will stop and you can debug your code.

To run debug once, type:

```sh
npm run debug
```

As a bonus, if you're using VS Code, it will start the debugger process on Node automaticaly for you.

## How to write test

All test case files ends with **_.spec.js_**

As stated before, only the very first example on the manual for each exercice will be provided.

I cannot emphasize enought how important a good test is!

First try to add the missing examples on manual.

A good pratice is to add more and more test cases. Go beyoud what's provided on the manual. See the test failing and try to make it pass.

For speed prupose, all test case are marked as skipped. This can be seen on the code: **_describe.skip_**. To not skip, just remove the **_.skip_**.

Though you can output and expect numbers, it's recomender all output to be send as string.

### Note about console.log and process.stdout

Node has a limitation when outputing large string to console.log.

To outcome this, simply use **_process.stdout.write_** instead of **_console.log_**. If you do this, also update the expectation on the test case (change **_mockLog_** to **_mockStdout_**).

An example is provided on the first excercice. It's commented out.

## Some notes

- I made this repo to help so other can have a good starting point to code with javascipt.

- Please no discussions (issues, wiki, etc) about the exercices, unless it's related to the boilerplate provided here. These must be done on the [Discussion Forums](https://www.coursera.org/learn/algorithmic-toolbox/discussions).

- Please no submits or discuss about the solutions, even if it's a partial or wrong solution.

- Do not copy or provide excercice instructions.

- Please, star this repo if you liked it.
