# AI Prompt Template for GreenPower Project

When requesting code generation from AI assistants, use this template to ensure consistent, well-documented, and properly formatted code that follows our project standards.

## Standard Prompt Structure

```
I'm working on the GreenPower energy website project. Please help me with the following task:

[TASK DESCRIPTION - Describe what you need in detail]

Please follow these project coding standards:
1. Use 2 spaces for indentation in all files
2. Add JSDoc comments for all components and functions
3. Use TypeScript interfaces for component props
4. Follow naming conventions: PascalCase for components, camelCase for variables, UPPER_SNAKE_CASE for constants
5. Use functional React components with hooks
6. Provide proper error handling for async operations
7. Use Tailwind CSS for styling according to our project configuration

Technical details:
- React version: 18.2.0
- TypeScript version: 4.9.5
- Using React Router v6 for navigation
- Using Tailwind CSS for styling
- Project follows component/pages architecture 

[ADDITIONAL CONTEXT - Add any relevant code snippets, requirements, or constraints]
```

## Example Prompts

### Creating a new component

```
I'm working on the GreenPower energy website project. Please create a new EnergySavingTip component that displays energy-saving tips with an icon, title, and description.

Please follow these project coding standards:
1. Use 2 spaces for indentation in all files
2. Add JSDoc comments for all components and functions
3. Use TypeScript interfaces for component props
4. Follow naming conventions: PascalCase for components, camelCase for variables
5. Use functional React components with hooks
6. Provide proper error handling for async operations
7. Use Tailwind CSS for styling according to our project configuration

The component should:
- Accept props for the tip title, description, icon (from Heroicons), and an optional link to more information
- Display the information in a card-like format with consistent spacing
- Have hover and focus states for interactive elements
- Be fully accessible with proper ARIA attributes

Technical details:
- React version: 18.2.0
- TypeScript version: 4.9.5
- Using Tailwind CSS for styling
```

### Modifying existing code

```
I'm working on the GreenPower energy website project. Please help me modify the existing EnergyTypesPage component to add filtering functionality.

Please follow these project coding standards:
1. Use 2 spaces for indentation in all files
2. Add JSDoc comments for new functions
3. Use TypeScript interfaces for any new types
4. Follow naming conventions: PascalCase for components, camelCase for variables
5. Use functional React components with hooks
6. Provide proper error handling for async operations
7. Use Tailwind CSS for styling according to our project configuration

Current implementation:
[PASTE RELEVANT CODE HERE]

I need to:
- Add a filter section at the top of the page allowing users to filter by energy type (fossil, nuclear)
- Implement the filtering functionality using React state
- Ensure the UI updates dynamically when filters change
- Maintain accessibility and responsive design

Technical details:
- React version: 18.2.0
- TypeScript version: 4.9.5
- Using React Router v6 for navigation
- Using Tailwind CSS for styling
```
