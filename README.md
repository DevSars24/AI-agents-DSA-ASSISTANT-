
# 🎙️ AI Agents – DSA Voice Assistant (Frontend)

A frontend-only **AI Voice Agent** built using **Next.js** and **Vapi**, designed to help users interact with an AI assistant via voice.
The project is structured to support **future enhancements like System Prompts and RAG (Retrieval-Augmented Generation)** directly inside Vapi — **no custom backend required**.

---

## 🚀 Features

* 🎤 Voice-based AI interaction using **Vapi Web SDK**
* ⚡ Built with **Next.js (App Router)**
* 🔐 Secure environment variable handling
* 🧠 Future-ready for:

  * Custom **System Prompts**
  * **RAG** via file uploads in Vapi dashboard
* ❌ No backend / server required

---

## 🛠️ Tech Stack

* **Next.js 14**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vapi Web SDK**

---

## 📁 Project Structure

```txt
frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
└── .env.local   (not committed)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Install dependencies

```bash
cd frontend
npm install
```

---

### 2️⃣ Environment Variables

Create a file named **`.env.local`** inside `frontend/`

```env
NEXT_PUBLIC_VAPI_PUBLIC_KEY=pk_your_public_key_here
NEXT_PUBLIC_VAPI_AGENT_ID=ag_your_agent_id_here
```

🔑 **Where to get these?**

* **Public Key** → Vapi Dashboard → API Keys
* **Agent ID** → Vapi Dashboard → Agents → Select Agent

> ⚠️ Only variables prefixed with `NEXT_PUBLIC_` are accessible in the browser.

---

### 3️⃣ Run the app

```bash
npm run dev
```

Open 👉 `http://localhost:3000`

---

## 🎙️ How It Works

* The frontend initializes the **Vapi client** using the public key
* Clicking **Start Talking** begins a voice session
* Clicking **Stop Conversation** ends the call
* All AI logic runs via **Vapi’s hosted agent**

---

## 🧠 Future Enhancements (Planned)

These will be handled **directly inside Vapi**, not via backend code:

### 🔹 System Prompt

* Define agent behavior (DSA tutor, interviewer, mentor, etc.)
* Control tone, depth, and response style

### 🔹 RAG (Retrieval-Augmented Generation)

* Upload PDFs / docs / notes in Vapi
* Agent answers using your custom knowledge base
* Ideal for:

  * DSA notes
  * Interview prep material
  * Company-specific questions

### 🔹 UI Improvements

* Audio waveform visualization
* Agent status (thinking / responding)
* File upload UI (optional)

---

## 🚫 What This Project Does NOT Use

* ❌ No custom backend
* ❌ No database
* ❌ No server-side APIs

All intelligence is handled by **Vapi agents**.

---

## 🔒 Security Notes

* `.env.local` is ignored by Git
* Only public keys are used on frontend
* Sensitive logic stays inside Vapi

---

## 📌 Deployment

This project can be deployed easily on:

* **Vercel**
* **Netlify**

Just remember to add the same environment variables in the deployment dashboard.

---


