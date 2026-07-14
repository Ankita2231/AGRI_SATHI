# AgriSathi AI

## Introduction
AgriSathi AI is an assistant for farmers that helps generate structured farming reports and recommendations using generative AI. The project includes a Node.js backend that calls Google AI (via the @google/genai SDK) and a React + Vite frontend with form-driven inputs and result visualization.

**Key goals:** fast report generation, simple UI for farmers, and extensible AI integration.

## Features
- **Generate Farming Reports:** User-provided inputs are sent to the backend which uses a typed schema and Google AI to generate detailed farming reports and recommendations.
- **Form-based Inputs:** Multi-option forms collect crop, soil, and environmental data to customize the generated report.
- **Live Preview & Results:** The frontend displays AI-generated results and allows exports or copying of report content.
- **Modular AI Services:** AI-related logic is isolated under `Services/AI` so different LLM providers or schemas can be swapped out.
- **Simple Dev Setup:** Separate `Backend` and `Frontend` projects to enable independent development and deployment.

## Tech Stack
- **Backend:** Node.js, Express, dotenv, @google/genai
- **Frontend:** React, Vite, Tailwind CSS
- **AI:** Google AI (Gemini) via the `@google/genai` SDK
- **Utilities:** Zod for schema validation, CORS for API, Nodemon for development

## Short Project Flow
1. User fills the report form in the frontend (`src/pages/GenerateReportPage.jsx`).
2. Frontend sends a POST to the backend API (e.g., `/api/generate-report`).
3. Backend controller (`controller/farming.controller.js`) validates input against `Services/AI/farming.report.schema.js`.
4. Backend calls the AI client implementation in `Services/AI/gemini.ai.js` using the `GENAI_API_KEY`.
5. The AI response is returned to the frontend and displayed in `components/ResultSection.jsx` for export or review.

## Sample .env
Create a `.env` file in the `Backend` folder (do NOT commit secrets to source control). Example:

```
PORT=5000
GENAI_API_KEY=
```

Get the `GENAI_API_KEY` from Google AI Studio (or the provider you configure for `@google/genai`).

## Installation (Development)
Prerequisites: Node.js (v18+ recommended), npm.

1. Backend

```bash
cd Backend
npm install
# Create a .env file (see sample above)
npm run dev    # starts nodemon server.js for development
# or for production:
npm start
```

2. Frontend

```bash
cd Frontend
npm install
npm run dev    # starts Vite dev server
```

Access the frontend on the port Vite reports (usually `http://localhost:5173`) and the backend on the `PORT` you set (default `5000`).

## Notes
- Keep your `GENAI_API_KEY` secret and do not commit it to Git.
- If you plan to deploy, configure environment variables in your hosting provider and set appropriate CORS and security settings.

## Where to look in the repo
- Backend entry: `Backend/server.js`
- Backend routes and controller: `Backend/Routes/farming.route.js`, `Backend/controller/farming.controller.js`
- AI services: `Backend/Services/AI/gemini.ai.js`, `Backend/Services/AI/farming.report.schema.js`
- Frontend pages: `Frontend/src/pages/GenerateReportPage.jsx`, `Frontend/src/pages/HomePage.jsx`

---

If you'd like, I can also add a `.env.example` file to the repo and commit it for convenience—shall I add that? 
