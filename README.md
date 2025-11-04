# Spring AI + React Multifeature Application

A full-stack application demonstrating the integration of Spring AI with a React frontend, featuring multiple AI-powered capabilities including chat, image generation, and recipe creation.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features

This application provides three main AI-powered features:

1. **AI Chat Interface** - Ask questions and get responses from an AI model
2. **Image Generation** - Create images from text prompts using DALL-E
3. **Recipe Creator** - Generate recipes based on ingredients, cuisine preferences, and dietary restrictions

## Technology Stack

### Backend
- Java 21
- Spring Boot 3.5.7
- Spring AI 1.0.3
- OpenAI Integration
- Maven

### Frontend
- React 19.1.1
- Vite
- JavaScript (ES6+)

## Prerequisites

- Java 21 or higher
- Node.js 16 or higher
- OpenAI API Key
- Maven 3.6 or higher

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd spring-ai-react-multifeature-app
   ```

2. Build the project using Maven:
   ```bash
   ./mvnw clean install
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### OpenAI API Key

To use the AI features, you need to configure your OpenAI API key:

1. Open `resources/application.properties`
2. Replace `<OPEN_AI_API>` with your actual OpenAI API key:
   ```
   spring.ai.openai.api-key=sk-your-api-key-here
   ```

## Running the Application

### Backend

From the root directory, run:
```bash
./mvnw spring-boot:run
```

The backend will start on port 8080.

### Frontend

From the frontend directory, run:
```bash
npm run dev
```

The frontend will start on port 5173.

Navigate to `http://localhost:5173` in your browser to access the application.

## API Endpoints

The backend exposes the following REST endpoints:

### AI Chat
```
GET /ask-ai?prompt={prompt}
```
Get a response from the AI model for the given prompt.

### Image Generation
```
GET /generate-image?prompt={prompt}&quality={quality}&n={count}&width={width}&height={height}
```
Generate images from a text prompt. Parameters:
- `prompt`: Text description of the desired image
- `quality`: Image quality (`hd` or `standard`) - default: `hd`
- `n`: Number of images to generate - default: `1`
- `width`: Image width in pixels - default: `1024`
- `height`: Image height in pixels - default: `1024`

### Recipe Creation
```
GET /recipe-creator?ingredients={ingredients}&cuisine={cuisine}&dietaryRestrictions={restrictions}
```
Create a recipe based on ingredients, cuisine type, and dietary restrictions. Parameters:
- `ingredients`: Comma-separated list of ingredients
- `cuisine`: Preferred cuisine type - default: `any`
- `dietaryRestrictions`: Dietary restrictions (e.g., vegetarian, gluten-free)

## Project Structure

```
spring-ai-react-multifeature-app/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.jsx           # Main application component
│   │   └── main.jsx          # Entry point
│   └── package.json          # Frontend dependencies
├── resources/                # Application configuration
│   └── application.properties
├── src/                      # Backend source code
│   ├── main/java/com/project/ai/
│   │   ├── ChatService.java         # Chat functionality service
│   │   ├── GenAiController.java     # REST API controller
│   │   ├── ImageService.java        # Image generation service
│   │   ├── RecipeService.java       # Recipe creation service
│   │   ├── SpringAiReactMultifeatureAppApplication.java # Main application class
│   │   └── WebConfig.java           # CORS configuration
│   └── test/java/com/project/ai/    # Unit tests
├── mvnw/mvnw.cmd             # Maven wrapper
└── pom.xml                   # Maven configuration
```

## Components

### Frontend Components

1. **App.jsx** - Main application component with tab navigation
2. **ChatComponent.jsx** - UI for interacting with the AI chat feature
3. **ImageGenerator.jsx** - UI for generating images from text prompts
4. **RecipeGenerator.jsx** - UI for creating recipes based on user inputs

### Backend Services

1. **ChatService.java** - Handles communication with the OpenAI chat model
2. **ImageService.java** - Manages image generation using DALL-E
3. **RecipeService.java** - Creates recipes using AI based on user inputs
4. **GenAiController.java** - Exposes REST endpoints for all AI features
5. **WebConfig.java** - Configures CORS to allow frontend-backend communication


