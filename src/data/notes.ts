export interface Note {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}

export const notes: Note[] = [
  {
    id: "1",
    title: "Building Scalable Web Applications",
    excerpt: "Key principles and patterns for creating maintainable and scalable web applications that can grow with your business needs.",
    content: `# Building Scalable Web Applications

When building web applications, scalability should be a primary concern from the start. Here are some key principles I've learned:

## Architecture Patterns

Using proper architecture patterns like MVC, MVVM, or Clean Architecture helps separate concerns and makes your codebase more maintainable. This separation allows different parts of your application to scale independently.

## Performance Optimization

- Implement lazy loading for routes and components
- Use code splitting to reduce initial bundle size
- Optimize images and assets
- Implement proper caching strategies

## Database Design

Proper database design is crucial. Use indexing wisely, normalize your data where appropriate, and consider denormalization for read-heavy operations.

## Conclusion

Building scalable applications requires planning and following best practices from the start. It's easier to build it right than to refactor later.`,
    date: "2024-03-15",
    tags: ["Web Development", "Architecture", "Best Practices"]
  },
  {
    id: "2",
    title: "The Power of TypeScript",
    excerpt: "Why TypeScript has become essential for modern JavaScript development and how it improves code quality and developer experience.",
    content: `# The Power of TypeScript

TypeScript has revolutionized how we write JavaScript. Here's why it matters:

## Type Safety

Type safety catches errors at compile time rather than runtime. This means fewer bugs in production and more confidence in your code.

## Better Developer Experience

- Excellent IDE support with autocomplete
- Inline documentation
- Refactoring tools that actually work

## Gradual Adoption

You don't have to convert everything at once. TypeScript works great with existing JavaScript code, allowing gradual migration.

## Conclusion

TypeScript is no longer optional for serious JavaScript development. The benefits far outweigh the learning curve.`,
    date: "2024-03-10",
    tags: ["TypeScript", "JavaScript", "Development"]
  },
  {
    id: "3",
    title: "Modern CSS Techniques",
    excerpt: "Exploring modern CSS features like Grid, Flexbox, and CSS Variables that make styling easier and more maintainable.",
    content: `# Modern CSS Techniques

CSS has evolved significantly. Let's explore modern techniques that make styling easier:

## CSS Grid

Grid layout is perfect for complex layouts. It provides two-dimensional control that Flexbox can't match.

## CSS Variables

Custom properties make theming and maintaining consistent designs much easier. They're especially powerful when combined with JavaScript.

## Container Queries

The future of responsive design. Container queries allow components to respond to their container's size, not just the viewport.

## Conclusion

Modern CSS is powerful and expressive. These techniques make our styling more maintainable and flexible.`,
    date: "2024-03-05",
    tags: ["CSS", "Web Design", "Frontend"]
  }
];
