# Contributing

We love every form of contribution. By participating to this project, you
agree to abide to the `Airy` [code of conduct](/code_of_conduct.md).

## Open an issue

We track our development on Github using
[issues](https://github.com/airyhq/componenets/issues), so every pull request
must refer to an issue.

## Label the issue

We use labels to help track the development. If possible, label your issue as
soon as it is created.

## Branches

Feature branches must start with `feature/*`, have the issue number and a
description. If for example the issue is named "Introduce meaning of life"
and its issue number 42, a good name would be:

`feature/42-introduce-meaning-of-life`

Hotfix branches must start with `hotfix/*`, have the issue number and a
description as well. If for example the issue is named "Fix missing
life meaning" and its number is 4242, the branch name will be

`hotfix/4242-fix-missing-life-meaning`

## Commits

You can push as many commits we need to finish a feature.

## Lint your changes

We use [prettier](https://prettier.io/) to lint the code.

You can check the code with the following commands:

```
$ cd components
$ yarn lint # and if there are problems
$ yarn format
```

## Squashing your commits

To keep a clean track of what is being released, every feature must contain
only one commit when merged.  The commit message of the squashed commit is
very important, since it will be used to keep track of the features in a
release.

The convention is [#issue] - description, for the example issue "Introduce
meaning of life" with number 42, the squashed commit message would be

`[#42] Introduce meaning of life`

## Submitting

When opening a Pull Request, make sure that:

- Tests are passing
- Code is linted
- Description references the issue
- Branch name follows the convention previously described
- Commits are squashed
