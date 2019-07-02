# Design Systems Framework: Raison d’être

## Mission Statement

To make building, maintaining and distributing your design-system simpler.

## The Problem

Design systems, help us efficiently apply and distribute our design opinions throughout our products. This efficiency helps us create user experiences that are more consistent across products, which lends to opportunities for cohesive interoperability. (Bitbucket and Jira for example or MacOS and iOS)

A substantial amount of effort in setting up design-systems is spent implementing and (usually) repeating functionality around:

    - Accessibility standards
    - Interaction and state management
    - Platform dependent best practices
    - Compositional API

These are often times the same or very similar across most design-systems.

## Design Systems as a composition

The conventional way of looking at a design-system is a library of Components, associated documentation and patterns. However we can also think of them as a composition of design / thematic options over encapsulated functionality.

```
ds = f(t)
```

Our hypothesis is that by providing building blocks that represent `f` , we empower design-system authors to focus more of their energy on the bespoke aspects of their design-system, and not on the boiler-plate.

## Shared tooling and not just components

Best practices around building and maintaining design systems don’t just extend to the creation of components, but also to things like:

- Build processes
- Versioning and Publishing workflows
- Documentation artifacts - website - technical documentation (prop-types, tokens etc) - conceptual documentation - usage documentation (upgrade guides, how-too) - live examples - code snippets
- Documentation best practices
- Development environments

The aim of DSF is not just to make _*building*_ your components easier, but also building and maintaining your _*design-system*_. This means providing:

- Build tooling and guidelines
- Documentation tooling and guidelines
- Components
- Utilities for _*building*_ components
- Versioning and Publishing tools.

Not every design system should be built in the same way, but where possible we want to empower design-system authors by sharing tools that make building design-systems simpler and faster.

# Design Systems Framework Patterns

## RenderProps

## Components API

## Styles API

## Working on Design Systems Framework inside another project

To iterate on DSF while working on another project without having to publish DSF after every change, you can use [`link-monorepos-badly`](https://github.com/mitchellhamilton/link-monorepos-badly).

Make sure you've done an install in DSF and your project.

```bash
# From your clone of the DSF repo
yarn
cd ../another-project
# If you're using Yarn Workspaces in your project
yarn
# If you're using Bolt in your project
bolt
```

Install `link-monorepos-badly` globally

```bash
yarn global add link-monorepos-badly
```

Now you can use `link-monorepos-badly` to link packages into your project

```bash
link-monorepos-badly link ../design-system
```

When you're done linking, you can unlink and reinstall the packages

```bash
link-monorepos-badly unlink ../design-system
# If you're using Yarn Workspaces in your project
yarn
# If you're using Bolt in your project
bolt
```

Once a new release of DSF has happened, you can upgrade all the DSF packages with the `upgrade` command

```bash
link-monorepos-badly upgrade ../design-system
# If you're using Yarn Workspaces in your project
yarn
# If you're using Bolt in your project
bolt
```
