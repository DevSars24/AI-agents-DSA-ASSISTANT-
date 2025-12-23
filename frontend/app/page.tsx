"use client";

import { useState, useEffect, useRef } from "react";
import Vapi from "@vapi-ai/web";

// Fetching from env variables
const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "";
const assistantId = process.env.NEXT_PUBLIC_VAPI_AGENT_ID || "";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "connecting" | "listening" | "stopped">("idle");
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    // 1. Initialize Vapi instance
    if (!vapiRef.current && publicKey) {
      vapiRef.current = new Vapi(publicKey);

      // 2. Set up Event Listeners
      vapiRef.current.on("call-start", () => {
        console.log("Call started");
        setStatus("listening");
      });

      vapiRef.current.on("call-end", () => {
        console.log("Call ended");
        setStatus("stopped");
      });

      vapiRef.current.on("error", (error) => {
        console.error("Vapi Error Event:", error);
        setStatus("idle");
      });
    }

    // Cleanup on unmount
    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  const startConversation = async () => {
    if (!publicKey || !assistantId) {
      console.error("Missing Keys! Check your .env.local");
      alert("API Key or Assistant ID is missing. Check your .env.local and restart the server.");
      return;
    }

    try {
      setStatus("connecting");
      // Use the object syntax for the latest SDK version
      await vapiRef.current?.start(assistantId);
    } catch (err) {
      console.error("Failed to start Vapi call:", err);
      setStatus("idle");
    }
  };

  const stopConversation = () => {
    vapiRef.current?.stop();
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full text-center border border-zinc-800 rounded-3xl p-10 bg-zinc-900/40 backdrop-blur-xl shadow-2xl">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">
            🎙️ DSA Assistant
          </h1>
          <p className="text-zinc-500 text-sm">
            Voice-activated AI Interviewer
          </p>
        </div>

        {/* Visualizer Area */}
        <div className="flex flex-col items-center justify-center h-32 mb-8">
          {status === "listening" && (
            <div className="flex gap-1 items-end h-10">
              <div className="w-1 bg-green-500 animate-[bounce_1s_infinite_0.1s] h-8"></div>
              <div className="w-1 bg-green-500 animate-[bounce_1s_infinite_0.2s] h-12"></div>
              <div className="w-1 bg-green-500 animate-[bounce_1s_infinite_0.3s] h-6"></div>
              <div className="w-1 bg-green-500 animate-[bounce_1s_infinite_0.4s] h-10"></div>
            </div>
          )}
          
          <div className="mt-4">
            <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest ${
              status === 'listening' ? 'bg-green-500/10 text-green-400' :
              status === 'connecting' ? 'bg-yellow-500/10 text-yellow-400' :
              'bg-zinc-800 text-zinc-500'
            }`}>
              {status}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={startConversation}
            disabled={status === "listening" || status === "connecting"}
            className="w-full py-4 rounded-2xl bg-white text-black font-bold text-lg hover:bg-zinc-200 disabled:opacity-30 transition-all transform active:scale-95"
          >
            {status === "connecting" ? "Initializing..." : "Start Interview"}
          </button>

          <button
            onClick={stopConversation}
            disabled={status !== "listening"}
            className="w-full py-4 rounded-2xl bg-zinc-800 text-zinc-400 font-semibold hover:bg-red-950/30 hover:text-red-500 border border-transparent hover:border-red-900/50 transition-all disabled:opacity-0"
          >
            End Session
          </button>
        </div>

        {/* Meta Info */}
        <div className="mt-10 pt-6 border-t border-zinc-800/50">
          <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-tighter">
            Agent Status: {assistantId ? "Configured" : "Not Found"}
          </p>
        </div>
      </div>
    </main>
  );
}
