# Todo App

figma url:
https://www.figma.com/design/c59oIkRVmnKkaLkFt3hNBG/To-do-list-dashboard--Freebie---Community-?node-id=0-1&p=f&t=JxAQkOyHzfeHHBJb-0
https://www.figma.com/design/rXGMLWkjKnwm6DfC4HA1Ae/To-do-List-Web-App-Design--Community-?node-id=398-468&t=9zvLNBeSGcuRIOSS-0

src/
├── app/ # App-level setup (Providers, Routes, Global Store)
├── assets/ # Global static files (Images, Fonts, Icons)
├── components/ # Shared UI components (Button, Input, Card)
├── config/ # Environment variables and global configurations
├── features/ # Self-contained business domains
│ ├── authentication/
│ │ ├── api/ # Feature-specific API calls
│ │ ├── components/
│ │ ├── hooks/
│ │ └── types/ # Domain-specific TypeScript types
│ └── dashboard/
├── hooks/ # Global reusable hooks (e.g., useLocalStorage)
├── layouts/ # Page structure components (Header, Footer, Sidebar)
├── pages/ # View components tied to specific routes
├── services/ # Global API clients (Axios/Fetch instances)
└── utils/ # Global helper functions and constants
