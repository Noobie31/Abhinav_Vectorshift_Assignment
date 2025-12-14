# VectorShift Pipeline Builder

A visual pipeline builder for creating and managing data processing workflows with drag-and-drop nodes.

## 🌟 Features

- **Visual Pipeline Builder** - Intuitive drag-and-drop interface for creating workflows
- **9 Node Types** - Input, Output, LLM, Text, Filter, Merge, Conditional, Transform, and Delay nodes
- **Dynamic Text Nodes** - Auto-resizing text nodes with variable detection (`{{variable}}` syntax)
- **DAG Validation** - Automatic detection of cycles in pipelines
- **Real-time Visualization** - Interactive canvas with minimap and controls
- **Modern UI** - Clean, aesthetic design with earth-toned color palette

## 🎨 Design

Built with a sophisticated, minimalist aesthetic featuring:
- Sage green, terracotta, cream, and slate color palette
- Inter font family for clean typography
- Smooth animations and hover effects
- Responsive design principles

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **ReactFlow** - Node-based interface
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Axios** - API calls

### Backend
- **FastAPI** - Python web framework
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation

## 📦 Installation

### Prerequisites
- Node.js 18+
- Python 3.7+
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs on `http://localhost:8000`

## 🚀 Deployment

Deployed on Render with:
- Backend: FastAPI Web Service
- Frontend: Static Site

See [deployment guide](https://render.com/docs) for details.

## 📚 Node Types

### Core Nodes
- **Input** - Data input sources
- **Output** - Data output destinations
- **LLM** - Language model processing
- **Text** - Text content with variable support

### Processing Nodes
- **Filter** - Data filtering with conditions
- **Merge** - Combine multiple data sources
- **Conditional** - Branch logic (if/else)
- **Transform** - Data transformation operations
- **Delay** - Add timing delays

## 🎯 Usage

1. **Drag nodes** from the toolbar onto the canvas
2. **Connect nodes** by dragging from output handles to input handles
3. **Configure nodes** by filling in their input fields
4. **Submit pipeline** to validate and analyze the workflow

### Text Node Variables

Use double curly braces to define variables:
```
Hello {{name}}, welcome to {{location}}!
```

This creates two input handles: `name` and `location`

## 🏗️ Architecture

### Node Abstraction
Built with a reusable `BaseNode` component that reduces code duplication:
- Configurable handles
- Flexible styling
- Shared logic via `useNodeConfig` hook

### State Management
Uses Zustand for lightweight state management:
- Node positions and data
- Edge connections
- Pipeline updates

### API Integration
- POST `/pipelines/parse` - Validates pipeline structure
- Returns: `num_nodes`, `num_edges`, `is_dag`

## 🧪 Features Implemented

### Part 1: Node Abstraction ✅
- Reusable `BaseNode` component
- `useNodeConfig` hook for shared logic
- 5 new custom nodes created

### Part 2: Styling ✅
- Tailwind CSS integration
- Aesthetic color palette
- Professional design system

### Part 3: Text Node Logic ✅
- Dynamic resizing based on content
- Variable detection with regex
- Dynamic handle generation

### Part 4: Backend Integration ✅
- FastAPI endpoint
- DAG cycle detection
- Result modal display

## 📝 Technical Assessment

This project was built as a technical assessment for VectorShift, demonstrating:
- React component architecture
- State management patterns
- UI/UX design skills
- Full-stack integration
- Code organization and reusability

## 🤝 Contributing

This is an assessment project, but feedback is welcome!

## 📄 License

MIT License

## 👤 Author

Abhinav - [GitHub](https://github.com/Noobie31)

## 🔗 Links

- **Live Demo**: [Frontend URL]
- **API Docs**: [Backend URL]/docs
- **Repository**: https://github.com/Noobie31/Abhinav_Vectorshift_Assignment
