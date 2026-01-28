/**
 * Pre-defined templates for Lovable app generation
 * Each template includes a prompt and optional reference images
 */

export interface AppTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  prompt: string;
  images?: string[];
  icon?: string;
}

export const TEMPLATES: AppTemplate[] = [
  {
    id: 'todo-app',
    name: 'To-Do App',
    category: 'Productivity',
    description: 'A simple task management application with add, edit, and delete functionality.',
    prompt: `Create a modern to-do application with the following features:
- Add new tasks with a text input and submit button
- Display tasks in a clean list format
- Mark tasks as complete with a checkbox
- Delete tasks with a trash icon
- Show task count (total and completed)
- Store tasks in local storage
- Use a modern, minimalist design with a light background
- Include smooth transitions and hover effects`,
  },
  {
    id: 'weather-app',
    name: 'Weather Dashboard',
    category: 'Utilities',
    description: 'A weather application that displays current conditions and forecasts.',
    prompt: `Build a weather dashboard application with these features:
- Search for cities by name
- Display current weather (temperature, condition, humidity, wind speed)
- Show a 5-day forecast
- Use weather icons to represent conditions
- Display temperature in both Celsius and Fahrenheit
- Include a clean, modern card-based layout
- Add a gradient background that changes based on weather conditions
- Implement smooth animations for data loading`,
  },
  {
    id: 'expense-tracker',
    name: 'Expense Tracker',
    category: 'Finance',
    description: 'Track personal expenses with categories and visualizations.',
    prompt: `Create an expense tracking application with:
- Add expenses with amount, category, date, and description
- Display expenses in a sortable table
- Show total expenses and breakdown by category
- Include a pie chart showing expense distribution
- Filter expenses by category and date range
- Delete individual expenses
- Export data as CSV
- Use a professional color scheme with clear typography
- Implement responsive design for mobile and desktop`,
  },
  {
    id: 'portfolio-site',
    name: 'Portfolio Website',
    category: 'Portfolio',
    description: 'A professional portfolio website to showcase projects and skills.',
    prompt: `Build a personal portfolio website with:
- Hero section with name, title, and call-to-action
- About section with professional bio
- Projects showcase with cards (image, title, description, link)
- Skills section with skill tags or progress bars
- Contact section with email form
- Navigation menu with smooth scrolling
- Responsive design for all devices
- Dark/light theme toggle
- Smooth animations and transitions
- Professional typography and spacing`,
  },
  {
    id: 'note-app',
    name: 'Note-Taking App',
    category: 'Productivity',
    description: 'A simple note-taking application with rich text editing.',
    prompt: `Create a note-taking application with:
- Create, read, update, and delete notes
- Rich text editor with formatting options (bold, italic, underline)
- Search notes by title or content
- Organize notes with tags or categories
- Pin important notes to the top
- Dark mode support
- Auto-save functionality
- Local storage persistence
- Clean, distraction-free interface
- Keyboard shortcuts for power users`,
  },
  {
    id: 'calculator',
    name: 'Advanced Calculator',
    category: 'Utilities',
    description: 'A scientific calculator with advanced mathematical functions.',
    prompt: `Build a scientific calculator with:
- Basic operations (add, subtract, multiply, divide)
- Advanced functions (square root, power, trigonometric)
- Calculation history display
- Clear and delete buttons
- Keyboard support for input
- Large, readable display
- Button grid layout with clear organization
- Error handling for invalid operations
- Modern design with good contrast
- Responsive for different screen sizes`,
  },
  {
    id: 'kanban-board',
    name: 'Kanban Board',
    category: 'Productivity',
    description: 'A drag-and-drop kanban board for task management.',
    prompt: `Create a kanban board application with:
- Three columns: To Do, In Progress, Done
- Add cards with task title and description
- Drag and drop cards between columns
- Delete cards with a delete button
- Edit card content inline
- Show card count in each column
- Persistent storage using local storage
- Smooth drag animations
- Clean, professional design
- Add new column functionality`,
  },
  {
    id: 'color-palette',
    name: 'Color Palette Generator',
    category: 'Design Tools',
    description: 'Generate and manage color palettes for design projects.',
    prompt: `Build a color palette generator with:
- Generate random color palettes
- Display colors in hex, RGB, and HSL formats
- Lock individual colors to keep them while regenerating
- Copy color values to clipboard
- Export palette as JSON or CSS
- Save favorite palettes
- Search for color names
- Color harmony suggestions (complementary, analogous, triadic)
- Adjust palette saturation and brightness
- Clean, visually appealing interface`,
  },
  {
    id: 'timer-app',
    name: 'Pomodoro Timer',
    category: 'Productivity',
    description: 'A Pomodoro timer for focused work sessions.',
    prompt: `Create a Pomodoro timer application with:
- Work session timer (default 25 minutes)
- Break timer (default 5 minutes)
- Long break option (15 minutes)
- Start, pause, and reset controls
- Sound notification when timer ends
- Display current session type
- Session counter (track completed sessions)
- Customizable timer durations
- Circular progress indicator
- Keyboard shortcuts for controls`,
  },
  {
    id: 'qr-code-gen',
    name: 'QR Code Generator',
    category: 'Utilities',
    description: 'Generate QR codes from text or URLs.',
    prompt: `Build a QR code generator with:
- Input field for text or URL
- Real-time QR code generation
- Download QR code as PNG or SVG
- Adjust QR code size
- Change QR code color (foreground and background)
- Add logo/image to center of QR code
- Error correction level selection
- Preview of generated QR code
- Copy QR code data to clipboard
- History of recently generated codes`,
  },
];

export function getTemplateById(id: string): AppTemplate | undefined {
  return TEMPLATES.find((template) => template.id === id);
}

export function getTemplatesByCategory(category: string): AppTemplate[] {
  return TEMPLATES.filter((template) => template.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(TEMPLATES.map((template) => template.category)));
}

export function searchTemplates(query: string): AppTemplate[] {
  const lowerQuery = query.toLowerCase();
  return TEMPLATES.filter(
    (template) =>
      template.name.toLowerCase().includes(lowerQuery) ||
      template.description.toLowerCase().includes(lowerQuery) ||
      template.category.toLowerCase().includes(lowerQuery)
  );
}
