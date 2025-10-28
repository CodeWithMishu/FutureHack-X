"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

type FormState = {
  collegeName: string;
  teamName: string;
  leaderEmail: string;
  leaderPhone: string;
  member2Email: string;
  member2Phone: string;
  member3Email: string;
  member3Phone: string;
  member4Email: string;
  member4Phone: string;
  primaryTrack: string;
  experienceLevel: string;
  resources: string;
};

export default function RegistrationForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>({
    collegeName: "",
    teamName: "",
    leaderEmail: "",
    leaderPhone: "",
    member2Email: "",
    member2Phone: "",
    member3Email: "",
    member3Phone: "",
    member4Email: "",
    member4Phone: "",
    primaryTrack: "",
    experienceLevel: "",
    resources: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof FormState, v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      console.log("Submitting form data:", form);

      const response = await fetch("/api/submit-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      console.log("Success response:", result);

      setSuccess(
        "Registration submitted successfully! We'll be in touch soon."
      );

      // Reset form after successful submission
      setTimeout(() => {
        setForm({
          collegeName: "",
          teamName: "",
          leaderEmail: "",
          leaderPhone: "",
          member2Email: "",
          member2Phone: "",
          member3Email: "",
          member3Phone: "",
          member4Email: "",
          member4Phone: "",
          primaryTrack: "",
          experienceLevel: "",
          resources: "",
        });
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to submit registration. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-5xl max-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl shadow-2xl border border-orange-500/30 overflow-hidden"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                FutureHack-X Registration
              </h2>
              <p className="text-orange-100 text-sm mt-1">
                Join the innovation revolution
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>
        </motion.div>

        {/* Form Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-8">
            {/* Team Information */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-orange-500/5 via-white/5 to-orange-500/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-orange-500/20 shadow-lg"
            >
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  1
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Team Information
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-orange-300 mb-2">
                    College Name *
                  </label>
                  <input
                    type="text"
                    value={form.collegeName}
                    onChange={(e) => update("collegeName", e.target.value)}
                    className="w-full px-4 py-4 h-14 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-400 focus:bg-white/15 focus:ring-2 focus:ring-orange-400/20 transition-all duration-200"
                    placeholder="Enter your college name"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-orange-300 mb-2">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    value={form.teamName}
                    onChange={(e) => update("teamName", e.target.value)}
                    className="w-full px-4 py-4 h-14 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-400 focus:bg-white/15 focus:ring-2 focus:ring-orange-400/20 transition-all duration-200"
                    placeholder="Enter your team name"
                    required
                  />
                </div>
              </div>
            </motion.div>
            {/* Team Leader */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-500/5 via-white/5 to-blue-500/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-blue-500/20 shadow-lg"
            >
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  2
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Team Leader Details
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-blue-300 mb-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    Leader Email *
                  </label>
                  <input
                    type="email"
                    value={form.leaderEmail}
                    onChange={(e) => update("leaderEmail", e.target.value)}
                    className="w-full px-4 py-4 h-14 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    placeholder="leader@example.com"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-blue-300 mb-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    Leader Phone *
                  </label>
                  <input
                    type="tel"
                    value={form.leaderPhone}
                    onChange={(e) => update("leaderPhone", e.target.value)}
                    className="w-full px-4 py-4 h-14 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    placeholder="+91 9XXXXXXXXX"
                    required
                  />
                </div>
              </div>
            </motion.div>
            {/* Team Members */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-green-500/5 via-white/5 to-green-500/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-green-500/20 shadow-lg"
            >
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  3
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Team Members (Optional)
                </h3>
              </div>

              {/* Member 2 */}
              <div className="mb-10">
                <h4 className="text-md font-medium text-green-200 mb-6">
                  Member 2
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <input
                    type="email"
                    value={form.member2Email}
                    onChange={(e) => update("member2Email", e.target.value)}
                    className="w-full px-4 py-3 h-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/15 transition-all"
                    placeholder="member2@example.com"
                  />
                  <input
                    type="tel"
                    value={form.member2Phone}
                    onChange={(e) => update("member2Phone", e.target.value)}
                    className="w-full px-4 py-3 h-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/15 transition-all"
                    placeholder="+91 9XXXXXXXXX"
                  />
                </div>
              </div>

              {/* Member 3 */}
              <div className="mb-10">
                <h4 className="text-md font-medium text-green-200 mb-6">
                  Member 3
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <input
                    type="email"
                    value={form.member3Email}
                    onChange={(e) => update("member3Email", e.target.value)}
                    className="w-full px-4 py-3 h-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/15 transition-all"
                    placeholder="member3@example.com"
                  />
                  <input
                    type="tel"
                    value={form.member3Phone}
                    onChange={(e) => update("member3Phone", e.target.value)}
                    className="w-full px-4 py-3 h-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/15 transition-all"
                    placeholder="+91 9XXXXXXXXX"
                  />
                </div>
              </div>

              {/* Member 4 */}
              <div className="mb-6">
                <h4 className="text-md font-medium text-green-200 mb-6">
                  Member 4
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <input
                    type="email"
                    value={form.member4Email}
                    onChange={(e) => update("member4Email", e.target.value)}
                    className="w-full px-4 py-3 h-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/15 transition-all"
                    placeholder="member4@example.com"
                  />
                  <input
                    type="tel"
                    value={form.member4Phone}
                    onChange={(e) => update("member4Phone", e.target.value)}
                    className="w-full px-4 py-3 h-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/15 transition-all"
                    placeholder="+91 9XXXXXXXXX"
                  />
                </div>
              </div>
            </motion.div>
            {/* Project Preferences */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-purple-500/5 via-white/5 to-purple-500/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-purple-500/20 shadow-lg"
            >
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  4
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Project Preferences
                </h3>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-purple-300 mb-2">
                  Primary Track/Theme Preference
                </label>
                <select
                  value={form.primaryTrack}
                  onChange={(e) => update("primaryTrack", e.target.value)}
                  className="w-full px-4 py-4 h-14 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/15 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                >
                  <option value="" className="bg-slate-800">
                    Choose your track
                  </option>
                  <option value="AI/Machine Learning" className="bg-slate-800">
                    🤖 AI/Machine Learning
                  </option>
                  <option value="Web Development" className="bg-slate-800">
                    🌐 Web Development
                  </option>
                  <option value="Mobile Development" className="bg-slate-800">
                    📱 Mobile Development
                  </option>
                  <option value="Blockchain/Fintech" className="bg-slate-800">
                    💰 Blockchain/Fintech
                  </option>
                  <option value="IoT/Hardware" className="bg-slate-800">
                    🔧 IoT/Hardware
                  </option>
                  <option
                    value="Sustainability/Social Good"
                    className="bg-slate-800"
                  >
                    🌱 Sustainability/Social Good
                  </option>
                  <option value="Other" className="bg-slate-800">
                    ⚡ Other
                  </option>
                </select>
              </div>
            </motion.div>
            {/* Experience Level */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-yellow-500/5 via-white/5 to-yellow-500/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-yellow-500/20 shadow-lg"
            >
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm mr-4">
                  5
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Experience Level
                </h3>
              </div>
              <p className="text-sm text-white/70 mb-8">
                Please indicate the collective experience level of your team
                members in hackathons:
              </p>
              <div className="space-y-4">
                <label className="flex items-start space-x-4 cursor-pointer p-6 rounded-xl border-2 border-transparent hover:border-yellow-400/30 hover:bg-white/5 transition-all duration-200 group">
                  <div className="relative mt-1">
                    <input
                      type="radio"
                      name="experienceLevel"
                      value="Beginner"
                      checked={form.experienceLevel === "Beginner"}
                      onChange={(e) =>
                        update("experienceLevel", e.target.value)
                      }
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                        form.experienceLevel === "Beginner"
                          ? "border-yellow-400 bg-yellow-400"
                          : "border-white/40 group-hover:border-yellow-400/60"
                      }`}
                    >
                      {form.experienceLevel === "Beginner" && (
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-2 flex items-center">
                      <span className="text-yellow-400 mr-2">🌱</span>
                      Beginner
                    </div>
                    <div className="text-sm text-white/60">
                      Participation in 0-1 hackathons
                    </div>
                  </div>
                </label>

                <label className="flex items-start space-x-4 cursor-pointer p-6 rounded-xl border-2 border-transparent hover:border-yellow-400/30 hover:bg-white/5 transition-all duration-200 group">
                  <div className="relative mt-1">
                    <input
                      type="radio"
                      name="experienceLevel"
                      value="Intermediate"
                      checked={form.experienceLevel === "Intermediate"}
                      onChange={(e) =>
                        update("experienceLevel", e.target.value)
                      }
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                        form.experienceLevel === "Intermediate"
                          ? "border-yellow-400 bg-yellow-400"
                          : "border-white/40 group-hover:border-yellow-400/60"
                      }`}
                    >
                      {form.experienceLevel === "Intermediate" && (
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-2 flex items-center">
                      <span className="text-yellow-400 mr-2">⚡</span>
                      Intermediate
                    </div>
                    <div className="text-sm text-white/60">
                      Participation in 2-3 hackathons
                    </div>
                  </div>
                </label>

                <label className="flex items-start space-x-4 cursor-pointer p-6 rounded-xl border-2 border-transparent hover:border-yellow-400/30 hover:bg-white/5 transition-all duration-200 group">
                  <div className="relative mt-1">
                    <input
                      type="radio"
                      name="experienceLevel"
                      value="Advanced"
                      checked={form.experienceLevel === "Advanced"}
                      onChange={(e) =>
                        update("experienceLevel", e.target.value)
                      }
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                        form.experienceLevel === "Advanced"
                          ? "border-yellow-400 bg-yellow-400"
                          : "border-white/40 group-hover:border-yellow-400/60"
                      }`}
                    >
                      {form.experienceLevel === "Advanced" && (
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-2 flex items-center">
                      <span className="text-yellow-400 mr-2">🚀</span>
                      Advanced
                    </div>
                    <div className="text-sm text-white/60">
                      Participation in 5+ hackathons
                    </div>
                  </div>
                </label>
              </div>
            </motion.div>
            {/* Additional Resources */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-cyan-500/5 via-white/5 to-cyan-500/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-cyan-500/20 shadow-lg"
            >
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  6
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Additional Resources
                </h3>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-cyan-300 mb-2">
                  Do you require any specific technical support or resources?
                  (e.g., specialized APIs, cloud credits)
                </label>
                <textarea
                  value={form.resources}
                  onChange={(e) => update("resources", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                  placeholder="Describe any specific APIs, cloud services, or technical resources you might need..."
                />
              </div>
            </motion.div>{" "}
            {/* Form Actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 pt-8 border-t border-white/20"
            >
              <div className="text-sm text-white/60 text-center">
                We'll use this information only for event coordination.
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="px-12 py-3 h-12 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:via-red-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                      <span>Submit Registration</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
