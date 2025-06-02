# Development Standards for GreenPower Website

This document outlines the coding standards and best practices to follow when generating code for the GreenPower website project. Please include these instructions in your prompts when requesting code generation.

## Code Style Guidelines

```
When generating code for this project, please follow these guidelines:

1. INDENTATION:
   - Use 2 spaces for indentation in all files (TypeScript, CSS, HTML, JSON)
   - No tab characters, only spaces
   - Maintain consistent indentation throughout nested blocks

2. DOCUMENTATION:
   - Add JSDoc comments for all components, functions, and interfaces
   - Document props for React components using interface or type definitions
   - Include brief descriptions of what each component/function does
   - Add comments for complex logic that isn't immediately obvious

3. NAMING CONVENTIONS:
   - Use PascalCase for React components and their filenames
   - Use camelCase for variables, functions, and props
   - Use UPPER_SNAKE_CASE for constants
   - Use descriptive names that indicate purpose and avoid abbreviations

4. TYPESCRIPT:
   - Use explicit type annotations instead of 'any'
   - Define interfaces for component props and state
   - Use TypeScript's built-in types when appropriate
   - Export interfaces/types when they're used across multiple files

5. REACT COMPONENTS:
   - Prefer functional components with hooks over class components
   - Use the React.FC<Props> pattern for function components
   - Keep components relatively small and focused on a single responsibility
   - Extract reusable logic to custom hooks

6. FILE STRUCTURE:
   - Place components in the appropriate directory (/components for reusable UI, /pages for page components)
   - Group related files (component + styles + tests) together
   - Import order: React and libraries first, then project imports, then styles

7. ERROR HANDLING:
   - Include proper error handling for asynchronous operations
   - Provide meaningful error messages and fallbacks

8. TAILWIND CSS:
   - Follow the project's Tailwind configuration
   - Group related classes together
   - For complex styling, consider extracting to component classes in the Tailwind config
```

## Example Component

```tsx
/**
 * InfoCard Component
 * 
 * Displays information in a card format with a title, description and optional image.
 */
interface InfoCardProps {
  /** Title text to display at the top of the card */
  title: string;
  /** Main content/description for the card */
  description: string;
  /** Optional image URL to display in the card */
  imageUrl?: string;
  /** Optional click handler */
  onClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  imageUrl,
  onClick
}) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      {imageUrl && (
        <div className="mb-4">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-40 object-cover rounded-md" 
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard;
```

## Prompt Template

When requesting code generation, please include the following in your prompt:

```
Please follow the GreenPower project coding standards as defined in .github/instructions.md:
- Use 2 spaces for indentation
- Add JSDoc comments for all components and functions
- Use TypeScript interfaces for props
- Follow the naming conventions (PascalCase for components, camelCase for variables)
- Include proper error handling
- Use Tailwind CSS for styling as configured in the project

[Your specific requirements here]
```