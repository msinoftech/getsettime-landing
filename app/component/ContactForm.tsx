"use client";
import { useState, useEffect } from "react";

async function fetchDepartments(): Promise<{ list: string[]; error?: string }> {
  try {
    const res = await fetch("/api/departments");
    const data = await res.json();
    if (!res.ok) return { list: [], error: data.error || "Failed to load departments" };
    const list = Array.isArray(data.departments) ? data.departments : [];
    return { list };
  } catch (e) {
    return { list: [], error: "Network error loading departments" };
  }
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
};

const ContactForm = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [departments, setDepartments] = useState<string[]>([]);
  const [departmentsLoading, setDepartmentsLoading] = useState(true);
  const [departmentsError, setDepartmentsError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchDepartments()
      .then(({ list, error }) => {
        if (!cancelled) {
          setDepartments(list);
          setDepartmentsError(error ?? null);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDepartments([]);
          setDepartmentsError("Failed to load departments");
        }
      })
      .finally(() => {
        if (!cancelled) setDepartmentsLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.department || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill all required fields.");
      return;
    }
    console.log(formData);
    try {
      setStatus("sending");
      setErrorMessage("");

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Clone the response before consuming it
      const resClone = res.clone();

      if (!res.ok) {
        let errorMsg = `Error ${res.status}`;

        try {
          const errData = await res.json();
          errorMsg = errData.error || errorMsg;
        } catch {
          // Use clone safely for text fallback
          const text = await resClone.text();
          errorMsg = text || errorMsg;
        }

        throw new Error(errorMsg);
      }

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setErrorMessage("");
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send email.");
      }

    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Network error. Please try again.");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      <input id="name" name="name" type="text" required placeholder="Full Name" value={formData.name} onChange={handleChange} className="block w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <input id="phone" name="phone" type="tel" required inputMode="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} className="block w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
        <input id="email" name="email" type="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="block w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
        <select id="department" aria-label="Select Department" name="department" required value={formData.department} onChange={handleChange} disabled={departmentsLoading} className="block w-full text-gray-600 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-70">
          <option value="">{departmentsLoading ? "Loading departments…" : "Select Department"}</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>
      <textarea id="message" name="message" rows={4} required placeholder="How can we help?" value={formData.message} onChange={handleChange} className="block w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
      <div className="block sm:flex items-center justify-between items-center justify-between gap-3">
        <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3 rounded-md font-medium shadow-lg hover:bg-indigo-800 transition-transform transform" aria-disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>
      {status === "success" && (
        <div className="mt-2 p-3 rounded-md bg-green-50 border border-green-200 text-sm text-green-700">
          ✓ Email sent successfully! We&apos;ll get back to you shortly.
        </div>
      )}
      {status === "error" && (
        <div className="mt-2 p-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
          ✗ {errorMessage || "Oops — something went wrong. Please try again or contact us directly."}
        </div>
      )}
    </form>
    </>
  );
};

export default ContactForm;