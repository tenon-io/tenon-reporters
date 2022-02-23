### Active maintenance of tenon-reporters has moved to [tenon-io/tenon-reporters](https://github.com/tenon-io/tenon-reporters).

# Reporters for Tenon.io

[![NPM](https://nodei.co/npm/@tenon-io/tenon-reporters.png)](https://nodei.co/npm/@tenon-io/tenon-reporters/)

[![Build Status](https://secure.travis-ci.org/tenon-io/tenon-reporters.png?branch=main)](http://travis-ci.org/tenon-io/tenon-reporters) 

## Getting Started

Install the module with: `npm install tenon-reporters --save`

## Documentation

Use this library to report results from your [Tenon.io] tests. Currently the following reporters are supported:

* HTML - A simple HTML export similar to the report you get when running a tests on Tenon.io.
* xUnit - Return your results in the xUnit format which can be useful if you need to display your results in Jenkins/Hudson.
 * **Note**: The xUnit schema doesn't quite match up to what Tenon reports so some liberty was taken with how to display the results.
* CSV - Displays key elements from the Tenon.io result set. Includes, resultTitle, errorTitle, errorDescription, certainty, priority, and signature.

Want to see other reporters? Submit an issue or a pull-request.

## Example

See `example/` for an example of how to use the reporters.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

## License

Copyright (c) 2015 Justin Stockton
Licensed under the MIT license.
