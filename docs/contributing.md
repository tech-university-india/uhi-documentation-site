# Contributing

This document outlines the general guidelines that should be followed when contributing to the open source assets.
Please note that you can contribute by identifying issues and creating issues for them on GitHub, by contributing code and/or tests or by contributing to the documentation.

## Conventions

### Branching strategy

We follow a trunk-based development strategy. This means that branches are short-lived (for small chunks of work and ideally lasting for no more than a few hours to a day or two), and are merged to the main branch as soon as the changes are approved and are ready to be merged.

Any new branches are branched from the main branch which is continuously kept updated.

### Commit conventions

Commits should be of complete, preferably working code (if not, they should be squashed to reflect a clean commit history with working code).

Commit messages follow the following convention:

```
feat/chore/fix: <descriptive message in present imperative, should start with lowercase characters if possible>
```

For example, these are valid/acceptable commit messages that follow the convention:

```
fix: align patient login button to the center
feat: add close button in accept cookies popup on homepage
```

In contrast, these commit messages **do not** follow the convention, and do not have descriptive messages:

```
Aligned the patient login button
Added close button
```

#### Description of commit prefixes

1. **feat**: This indicates a commit that contributes to development of a new feature. It indicates that there's some new capability (or a new UI feature, new backend feature etc.) that is being added to the project.

2. **fix**: This indicates a commit that intends to fix a part, appearance or functionality of an existing feature or capability of the asset.

3. **chore**: Any commit that does not fall under the **fix** and **feat** categories falls under this category. This includes writing tests, infrastructure scripts/setups, refactoring, etc.

### Linting

We use [_eslint_](https://eslint.org/) as our linter. Linting configurations already exist in the _.eslintrc.json_ files in the repositories.

The configurations use the [standard](https://standardjs.com/) JS style for linting, both on the frontend and the backend. The frontend has JSX code, so there is an extra eslint rule (`jsx-quotes`) that enforces uniform quotes on the frontend inside JSX.

Please ensure you run the linter before committing and opening pull requests.

## Development Cycle

### Frontend

For UI features/pages, the process is to first create a design (preferably in Figma), and then start with its implementation.

### Backend

For APIs and API endpoints, the process is to first create an API specification using the OpenAPI specification (and a swagger page also whenever possible). After the API specification is approved, we proceed to the implementation. 
Please add tests whenever any changes are made to the backend implementations and ensure that existing tests run properly before opening a PR.

## Raising Issues

Raising issues that report bugs, or suggest additional features/functionality is a great way to contribute as well. Please format your issue content to include the parts mentioned below in a clear manner, along with a descriptive title.

#### To request a new feature

Please include the following:

1. **Purpose**: Do mention why you think this new feature/functionality is important/is required, or how it will contribute to a better experience.

2. **Description of the new feature**: Please include a comprehensive decription of the new feature including what exactly is the expected output/outcome and the behaviour that is expected from the feature implementation.

3. **Importance**: Rate on a scale of 1 to 5 on the importance of the feature existing, 5 being that this feature is a "must-have" and 0 being "just a shower thought".

#### To raise an issue about a bug/enhancement

Please include the following when raising an issue about a bug:

1. **Bug Description**: Please include a description of the bug, how you encountered the bug (screenshots are appreciated), which steps led to that bug happening, and the browser/environment under which you were using the software. Being as specific as possible about the events that led to the bug happening and providing any other possible diagnostic information will make it easier to reproduce, debug and fix the bug.

2. **Output received (current output)**: What is the result/output that you are currently receiving (as a result of the bug)?

3. **Expected output**: What is the expected output (the output that one should receive if the bug is fixed)?

## Raising Pull Requests (PRs)

After working on a feature, chore, or fix, please open a pull request with your changes from your branch to the main branch of the repository you are contributing to.

The PR requires approval by two maintainers, after which it can be merged. The merge will be made by the maintainers with the squash and merge strategy.

If there are any issues with the PR, the maintainers will leave comments while reviewing. Please feel free to tag the maintainers for any help/clarification required, or if your PR is getting stale (open for too many days without a review).

**Note:** Before opening a PR, please ensure that you have run the linter and fixed any linting issues, and that all tests are working.

### Title and description of PRs

The title convention for the PRs is same as that for commit messages (see above). Please also include a brief description of what the PR does and include a link to the issue(s) if there is/are any corresponding or relevant GitHub issue(s) for the changes made by the PR.

Your contributions are welcome!