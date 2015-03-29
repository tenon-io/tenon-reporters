# Reporters for Tenon.io

[![Build Status](https://secure.travis-ci.org/poorgeek/tenon-reporters.png?branch=master)](http://travis-ci.org/poorgeek/tenon-reporters)

## Getting Started

Install the module with: `npm install tenon-reporters --save`

## Documentation

Use this library to report results from your [Tenon.io] tests. Currently the following reporters are supported:

* HTML - A simple HTML export similar to the report you get when running a tests on Tenon.io.
* xUnit - Return your results in the xUnit format which can be useful if you need to display your results in Jenkins/Hudson.
 * **Note**: The xUnit schema doesn't quite match up to what Tenon reports so some liberty was taken with how to display the results.

Want to see other reporters? Submit an issue or a pull-request.

## Example

See `example/` for an example of how to use the reporters.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).


## License

Copyright (c) 2015 Justin Stockton
Licensed under the MIT license.
