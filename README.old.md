# ReactJS Saturday Project

1. Setup an single page application that utilizes hooks and unit testing as learned this week. Do not proceed beyond a step until you have 100% code coverage for it.

2. Create a calculator UI that has buttons for numbers, period, +, -, *, /, and =

3. Use hook state to store the number or period pressed and display it on the screen

4. Change the hook state to store an object with the following structure to accept other items being pressed:

```
{
  value: 34.5
  operator: '*'
  next: {
    value: 6,
    operator: '*'
    next: {
      value: 1,
      operator: '=',
      next: null
    }
  }
}
```
c
5. Generate the object based upon the click of the +, -, *, and /

6. Have the calculator display the answer when the user presses the =

7. Display a ticker tape of previous calculations by changing the hook state again to be an array of the objects created in step 4 above.

For those looking at expanding the features, try the following:

8. Add the ability to clear one item or all of the items from the ticker tape.

9. Add support for ( and ) which will affect the calculations.

10. Add any other methods that a calculator may be used for.