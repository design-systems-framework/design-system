# Design Systems Framework: Raison d’être
## The Problem
Design systems, help us efficiently apply and distribute our design opinions throughout our products. This efficiency helps us create user experiences that are more consistent across products, which lends to opportunities  for cohesive interoperability.  (Bitbucket and Jira for example or MacOS and iOS)

A substantial amount of effort in setting up design-systems is spent implementing and  (usually) repeating functionality around:

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

Our hypothesis is that by providing building blocks that represent  `f` ,  we empower design-system authors to focus more of their energy on the  bespoke aspects of their design-system, and not on the boiler-plate.

## Shared tooling and not just components
Best practices around building and maintaining design systems don’t just extend to the creation of components, but also to things like:

- Build processes
- Versioning and Publishing workflows
- Documentation artifacts
	- website
	- technical documentation (prop-types, tokens etc)
	- conceptual documentation
	- usage documentation (upgrade guides, how-too)
	- live examples
	- code snippets
- Documentation best practices
- Development environments

The aim of DSF is not just to make *_building_* your components easier, but also building and maintaining your *_design-system_*. This means providing:

- Build tooling and guidelines
- Documentation tooling and guidelines
- Components
- Utilities for *_building_* components
- Versioning and Publishing tools.

Not every design system should be built in the same way, but where possible we want to empower design-system authors by sharing  tools that make building design-systems simpler and faster.

# Design Systems Framework Patterns
## RenderProps
## Components API
## Styles API 
