# ActionLogger

**A simple action logger middleware for Redux, in about 20 lines of code**

---

This is repository also serves as simple example project to show and find out how to publish and use npm packages through github.

**Install:** `npm i -D dossier-action-logger`

**Import:** `import {createActionLogger} from "dossier-action-logger";`

**Use:** `createActionLogger({ignoredActions: []})`

### Alternatives

If you need a more feature complete console-based action logger, have a look at [evgenyrodionov/redux-logger](https://github.com/evgenyrodionov/redux-logger).

### Contributing

We try to follow [semantic versioning](http://semver.org/) when we release new versions.

**Steps for releasing a new version:**

Ask me (jbe) to give you push access to npm.

- Update the version `npm version [patch|minor|major]`
- Commit the changed version number and enter the version number in the commit message, eg `git commit -m "v1.0.13"`

This commit should not include any other files than package.json, and all other changes must have been committed previously.

- Publish to npm: `npm publish`

For most projects, it is preferrable if the changes are committed to a branch, and merged into master when finished, eg. after passing review.

### ISC License

    Copyright (c) 2017, Dossier Solutions AS

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
    OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
