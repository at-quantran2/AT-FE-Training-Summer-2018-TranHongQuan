# HTML + Javascript Exercise

## Knowledge round-up

- **Javascript**

  - What are the differences between a variable that is: `null`, `undefined`?
    - When the variable is declared but hasn't assigned, it is undefined.
    - Null is using for assigns a null value to a variable.
    ```bash
    typeof null = object
    typeof undefined = undefined
    null == undefined //true
    null === undefined //false
    ```
  - What is `use strict`? what are the advantages and
  disadvantages to using it?
    Strict mode is using for:
    - Make code clear and easy to maintenance.
    - Prevent usage, and throw errors when programmers execute unsafe handlers, which may be unwanted.
    - Disabling features may be confusing, or should not be used.
    - Prevent the use of some words that may be used as keyworks in the future.

    ```
    Advantages:
      - Catch common coding errors, which will throw exceptions.
      - When vulnerable actions are performed, it throws errors.
      - Show and let us know and disable the features that poorly coded.
    Disadvantages:
      - The code must be handled more strict.
    ```


  - What are the differences between `==` and `===`? Write an example for each case (if any)?

    - == Compare value not type of value.
    - === Comare both value and type of value.
    - Ex:
    ```bash
    1 == '1' //true
    1 === '1' //false
    ```

  - What is different between declaration: `var`, `const` and `let`?
    - `var` is using for declares a variable. It can be used in both ES5 and ES6.
    - `let` is using for declares a variable in block scope. It can be used in ES6.
    - `cost` are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.

## Playground

1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

```
Input: a = 5, b = 10
Output: 15

Input: a = 5, b = 5
Output: 30
```

2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

```
Input: a = 12
Output: 7

Input: a = 19
Output: 0

Input: a = 22
Output: 9
```

3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

```
Input: a = '1*9'
Output: ['129', '159', '189']
```

```
Input: a = '1234567890*'
Output: ['12345678900',
 '12345678903',
 '12345678906',
 '12345678909']
```

4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

```
Input: a = '1*9'
Output: []
```

```
Input: a = '1234567890*'
Output: ['12345678900',
 '12345678906']
```
