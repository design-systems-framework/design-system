# Design Systems Framework: Raison d’être

## Mission Statement
To make building, maintaining and distributing your design-system simpler in React.

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
Render props are really useful in scenarios where the component author has opinions to enforce about functionality of the component that has little to do with how the primitive html elements are rendered.

Take the following form example:

```
<Form>
  ({ formProps, fieldProps }) => (
    <form {...formProps}>
      <input type="text" {...fieldProps}/>
    </form>
  )
</Form>
```

In this case the <Form> component really only wants to manage state and events around the captured data from the form specified by the consumer. What the form elements are, how they're rendered on the page and in what order is completely irrelevant. In this case renderProps are an excellent pattern, as we are afforded incredible flexibility around which elements get rendered and how, while still providing a clean and simple API for the functionality that we wish to take ownership of.

## Components API

There are use cases however, where we not only want to manage state and functionality around data flow, but also to enforce relationships between elements within our component. (rendering order for example)

Modeling this behaviour to a renderProps pattern soon becomes unwieldy.

```
import Select, { Container, Control, Value, Menu } from '@my-design-system/select';

<Select>
  {({ containerProps, controlProps, menuProps, valueProps, optionProps }) => (
    <Container {...containerProps}>
      <Control {...controlProps}>
        <Value {...valueProps}/>
      </Control>
      <Menu {...menuProps}>
        <Option {...optionProps} />
      </Menu>
    </Container>
  )}
</Select>
```

More importantly, often times users only really want to configure a very small portion of the supplied functionality in our component. For example adding a header element for the menu. The above implementation forces consumers to remember the complex relationship between components within the select every single time they want to make a small augmentation, this is brittle API and is both prone to user error and difficult to maintain/scale.


## Styles API
