![Tests](https://github.com/RoXuS/compare-versions/workflows/Deno/badge.svg)

# compare-versions

## Deno fork of https://github.com/omichelsen/compare-versions

Compare [semver](https://semver.org/) version strings to find greater, equal or lesser. Runs in the browser as well as Node.js/React Native etc. Has no dependencies and is tiny (~630 bytes gzipped).

This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`. Additionally supports the following variations:

- Supports wildcards for minor and patch version like `1.0.x` or `1.0.*`.
- Supports [Chromium version numbers](https://www.chromium.org/developers/version-numbers) with 4 parts, e.g. version `25.0.1364.126`.
- Any leading `v` is ignored, e.g. `v1.0` is interpreted as `1.0`.
- Leading zero is ignored, e.g. `1.01.1` is interpreted as `1.1.1`.

## Usage

### Import

```javascript
import { compareVersions } from "https://deno.land/x/compare_versions/mod.ts";

```

### Compare

```javascript
compareVersions('10.1.8', '10.0.4'); //  1
compareVersions('10.0.1', '10.0.1'); //  0
compareVersions('10.1.1', '10.2.2'); // -1
```

Can also be used for sorting:

```javascript
var versions = [
  '1.5.19',
  '1.2.3',
  '1.5.5'
]
var sorted = versions.sort(compareVersions);
/*
[
  '1.2.3',
  '1.5.5',
  '1.5.19'
]
*/
var sortDescending = versions.sort(compareVersions).reverse();
/*
[
  '1.5.19'
  '1.5.5',
  '1.2.3',
]
*/
```

### "Human Readable" Compare

The normal compare function doesn't return a self-explanatory value (using `1`, `0` and `-1`).
This version returns the boolean which fulfills the specified operator.

```js
compareVersions.compare('10.1.8', '10.0.4', '>'); // return true
compareVersions.compare('10.0.1', '10.0.1', '='); // return true
compareVersions.compare('10.1.1', '10.2.2', '<'); // return true
compareVersions.compare('10.1.1', '10.2.2', '<='); // return true
compareVersions.compare('10.1.1', '10.2.2', '>='); // return false
```

### Validate version numbers

Applies the same ruleset as used before comparing version numbers and returns a boolean:

```javascript
compareVersions.validate('1.0.0-rc.1'); // return true
compareVersions.validate('1.0-rc.1'); // return false
compareVersions.validate('foo'); // return false
```