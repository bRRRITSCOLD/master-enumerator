# Master Enumerator

A JavaScript library for psuedo-enums (enumerators)

## The Basics

Install:

```text
npm install master-enumerator
```

Use:

This constructor takes in an array which houses the string enum values, it can also optionally be constructed with a custom properties object (as of right now caseSensitive is the only configurable property) - `caseSensitive === true` will preserve the value of the string in the array - by default the key AND value will always be uppercase - `caseSensitive === false` then the value is not manipulated in any way (i.e. with toUpperCase() like in the default scenario).

```js
new Enumerator(array[], options?{ caseSensitive: boolean });
```

Examples:

No custom options are specified - defaulting `caseSensitive = false`

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'two', 'three' ]);

Enumerator {
  getter: ONE() => { return 'ONE' }
  getter: TWO() =>  return 'TWO' }
  getter: THREE() =>  { return 'THREE' }

  enumerations: [
    {
      key: 'ONE',
      value: 'ONE'
    },
    {
      key: 'TWO',
      value: 'TWO'
    },
    {
      key: 'THREE',
      value: 'THREE'
    }
  ]
}

enumerator.ONE // output: 'ONE'
enumerator.TWO // output: 'TWO'
enumerator.THREE // output: 'THREE'
```

The one custom option is specified - making `caseSensitive = true`

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'tWo', 'THREE' ], { caseSensitive: true });

Enumerator {
  getter: ONE() => { return 'one' }
  getter: TWO() =>  return 'tWo' }
  getter: THREE() =>  { return 'THREE' }

  enumerations: [
    {
      key: 'ONE',
      value: 'one'
    },
    {
      key: 'TWO',
      value: 'tWo'
    },
    {
      key: 'THREE',
      value: 'THREE'
    }
  ]
}

enumerator.ONE // output: 'one'
enumerator.TWO // output: 'tWo'
enumerator.THREE // output: 'THREE'
```

## Methods of Enumerator

### validValue:

This method allows you to check a string value against your psude-enumerator data type, returning `true` if the string value is a correlating type of this enumerator and `false` if it is not.

```js
const enumerator = new Enumerator(array[], options?{ caseSensitive: boolean });

enumerator.validValue('string/value');
```

Example:

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'two', 'three' ]);

enumerator.validValue('one'); // output: true
enumerator.validValue('One'); // output: true
enumerator.validValue('ONE'); // output: true
```

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'tWo', 'THREE' ], { caseSensitive: true });

enumerator.validValue('tWo'); // output: true
enumerator.validValue('TWO'); // output: false
enumerator.validValue('two'); // output: false
```

### validValues:

This method allows you to check an array of values against your psude-enumerator data type, returning an array with booleans - `true` if the value in the same exact index location in the passed in array is a correlating type/value of this enumerator and `false` if it is not.

```js
const enumerator = new Enumerator(array[], options?{ caseSensitive: boolean });

enumerator.validValues(array[]);
```

Example:

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'two', 'three' ]);

enumerator.validValues(['one', 'One', 'ONE']); // output: [true, true, true]
```

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'two', 'three' ], { caseSensitive: true });

enumerator.validValues(['one', 'One', 'ONE']); // output: [true, false, false]
```

### enumerationKeys():

This method returns the Enumerator's getter keys/properties that are used to get the values behind its enums.

```js
const enumerator = new Enumerator(array[], options?{ caseSensitive: boolean });

enumerator.enumerationKeys();
```

Example:

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'two', 'three' ]);

enumerator.enumerationKeys(); // output: [ 'ONE', 'TWO', THREE' ]
```

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'tWo', 'TRHEE' ], { caseSensitive: true });

enumerator.enumerationValues(); // output: [ 'ONE', 'TWO', THREE' ]
```

### enumerationValues():

This method returns an array of the Enumerator's values behind its enums/getter keys/properties.

```js
const enumerator = new Enumerator(array[], options?{ caseSensitive: boolean });

enumerator.enumerationValues();
```

Example:

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'two', 'three' ]);

enumerator.enumerationValues(); // output: [ 'ONE', 'TWO', THREE' ]
```

```js
const { Enumerator } = require('master-enumerator');

const enumerator = new Enumerator([ 'one', 'tWo', 'TRHEE' ], { caseSensitive: true });

enumerator.enumerationValues(); // output: [ 'one', 'tWo', THREE' ]
```

## More information

* The directory `test/` contains very thorough TDD and BDD examples/tests.