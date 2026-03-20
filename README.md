# 🎙️ AI Agents – DSA Voice Assistant

Welcome to the **AI Agents – DSA Voice Assistant**! This is a frontend-only **AI Voice Agent** application built with **Next.js** and the **Vapi Web SDK**, designed to provide an interactive, voice-driven AI experience.

The core goal of this project is to create an intelligent AI assistant (such as a DSA tutor, interviewer, or mentor) without needing any custom backend server. All the heavy lifting, including voice processing, AI reasoning, and future enhancements like Retrieval-Augmented Generation (RAG), happens directly through **Vapi**.

---

## 🌟 What is this project?

This project proves that you can build a powerful, voice-enabled AI application entirely on the frontend. 

### Key Capabilities
- **🎤 Real-Time Voice Interaction:** Uses the Vapi Web SDK to allow users to talk to the AI and receive voice responses.
- **⚡ Fast & Modern:** Built on Next.js 14, React, TypeScript, and Tailwind CSS.
- **🌐 Zero Backend Infrastructure:** All AI processing is offloaded to Vapi. No databases or custom APIs to manage locally.
- **🧠 Future-Proof Design:** Prepared to adopt Vapi's built-in advanced features like Custom System Prompts and RAG (document uploads) seamlessly.

---

## 🔑 REQUIRED API KEYS

To make this project work, you **MUST** provide credentials from Vapi. Since this runs in the browser, these keys must be securely provided in your environment variables.

You will need **TWO** keys:

1. **`NEXT_PUBLIC_VAPI_PUBLIC_KEY`**
   - **What it is:** The public identifier to connect to your Vapi account.
   - **Where to find it:** Log in to the [Vapi Dashboard](https://dashboard.vapi.ai) -> Navigate to **API Keys** -> Look for your "Public Key".

2. **`NEXT_PUBLIC_VAPI_AGENT_ID`**
   - **What it is:** The unique ID for the specific AI Agent you created.
   - **Where to find it:** Navigate to **Agents** in the Vapi Dashboard -> Click on your desired Agent -> Copy its **Agent ID** from the top.

> ⚠️ **Important:** Never use your Vapi *Private API Key* on the frontend. Only the Public Key and Agent ID are necessary.

---

## 🛠️ Installation & Setup Guide

### 1️⃣ Clone and Install
First, make sure you are in the `frontend` directory and install the necessary dependencies:

```bash
cd frontend
npm install
```

### 2️⃣ Configure Environment Variables
Inside the `frontend` directory, create a hidden file named `.env.local`:

```bash
# In the frontend/ directory
touch .env.local
```

Add your Vapi keys to this `.env.local` file exactly like this:

```env
NEXT_PUBLIC_VAPI_PUBLIC_KEY=pk_your_actual_public_key_here
NEXT_PUBLIC_VAPI_AGENT_ID=ag_your_actual_agent_id_here
```

### 3️⃣ Start the Development Server
Once your keys are securely set up, launch the application:

```bash
npm run dev
```

Open your browser and navigate to 👉 `http://localhost:3000`

---

## 🎙️ How to Use the App

1. Ensure your browser microphone permissions are granted when prompted.
2. Click the **Start Talking** button on the interface.
3. Begin speaking to the AI assistant. It will process your voice via Vapi and respond naturally.
4. Click **Stop Conversation** when you are finished.

---

## 🚀 Future Enhancements (Handled via Vapi)

The beauty of this architecture is that all complex AI upgrades happen in the **Vapi Dashboard**, completely untouched by backend code:

- 🔹 **System Prompts:** Customize the personality of the agent (e.g., configuring it specifically as a tough DSA interviewer or a patient tutor).
- 🔹 **RAG (Retrieval-Augmented Generation):** Upload your PDFs, specific DSA notes, or interview prep materials directly into Vapi. The agent will read these resources and answer using your custom knowledge base.
- 🔹 **UI Improvements (Frontend):** Potential additions to the frontend include audio waveform visualization, better agent state indicators (thinking/speaking), and integrated file upload views.

---

## 🛡️ Security & Deployment

- **No Secrets Leaking:** The `.env.local` file is automatically ignored by Git (already configured in `.gitignore`). 
- **Easy Deployment:** You can effortlessly deploy this project to platforms like [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/). Just make sure to add `NEXT_PUBLIC_VAPI_PUBLIC_KEY` and `NEXT_PUBLIC_VAPI_AGENT_ID` into the Environment Variables section of your deployment dashboard!


---


