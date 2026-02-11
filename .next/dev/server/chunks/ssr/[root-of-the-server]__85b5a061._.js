module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/component/BlogCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogCard",
    ()=>BlogCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function BlogCard({ post }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/blog/${post.slug}`,
            className: "block h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: `/${post.coverImage}`,
                                alt: post.title,
                                width: 500,
                                height: 400,
                                className: "transition-transform duration-700 group-hover:scale-110"
                            }, void 0, false, {
                                fileName: "[project]/app/component/BlogCard.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            }, void 0, false, {
                                fileName: "[project]/app/component/BlogCard.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1.5 text-xs font-semibold bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full shadow-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white",
                                    children: post.category
                                }, void 0, false, {
                                    fileName: "[project]/app/component/BlogCard.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/component/BlogCard.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            post.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full shadow-md flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3 h-3",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/component/BlogCard.tsx",
                                                lineNumber: 25,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/component/BlogCard.tsx",
                                            lineNumber: 24,
                                            columnNumber: 19
                                        }, this),
                                        "Featured"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/component/BlogCard.tsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/component/BlogCard.tsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/component/BlogCard.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300",
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/app/component/BlogCard.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-600 mb-4 line-clamp-2 leading-relaxed",
                                children: post.excerpt
                            }, void 0, false, {
                                fileName: "[project]/app/component/BlogCard.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-4 border-t border-neutral-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: `/${post.author.avatar}`,
                                                    alt: post.author.name,
                                                    fill: true,
                                                    className: "object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/component/BlogCard.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/component/BlogCard.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-neutral-900",
                                                        children: post.author.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/component/BlogCard.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-neutral-500",
                                                        children: post.author.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/component/BlogCard.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/component/BlogCard.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/component/BlogCard.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                        className: "text-xs text-neutral-500",
                                        dateTime: post.publishedAt,
                                        children: new Date(post.publishedAt).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/component/BlogCard.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/component/BlogCard.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/component/BlogCard.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-500/30 transition-all duration-500 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/component/BlogCard.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    }, void 0, false, {
                        fileName: "[project]/app/component/BlogCard.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/component/BlogCard.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/component/BlogCard.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/component/BlogCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/blog-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogCategories",
    ()=>blogCategories,
    "blogPosts",
    ()=>blogPosts,
    "getBlogBySlug",
    ()=>getBlogBySlug,
    "getPostCategories",
    ()=>getPostCategories,
    "getPrevNextPosts",
    ()=>getPrevNextPosts,
    "getRecentPosts",
    ()=>getRecentPosts,
    "getRelatedPosts",
    ()=>getRelatedPosts
]);
const blogPosts = [
    {
        id: "1",
        slug: "smart-way-to-schedule-appointments-with-clients",
        title: "A Smart Way to Schedule Appointments with Clients",
        excerpt: "When AI-powered technology smartly schedules appointments, yet professionals like doctors, wellness consultants, and therapists feel stressed managing Manual calendars due to double-bookings, missed calls, and frustrated schedules.",
        content: `
      <p>When AI-powered technology smartly schedules appointments, yet professionals like doctors, wellness consultants, and therapists feel stressed managing Manual calendars due to double-bookings, missed calls, and frustrated schedules. Because most are unaware of how to use this technology, or some pull out due to the high prices of scheduling apps. But the appointment booking tool, like GetSetTime, is not only budget-friendly but also powered by modern features, including automated bookings, calendar syncs, custom confirmations, and simple communication via WhatsApp, SMS, email, etc. These apps allow professionals to manage clients with seamless, self-scheduling on their own terms.</p>
      
      <h2>Why Professionals Need Smart Scheduling Now</h2>
      <p><b>Busy schedules</b> overwhelm even the best organizers. Doctors juggle patient visits. Wellness consultants lead group sessions and one-on-one sessions. Traditional methods fail in this digital age.</p>
      <p><b>Appointment software</b> fixes these pain points. It streamlines operations and allows clients to book instantly 24/7.</p>
      
      <h2>Overcome Common Scheduling Hurdles</h2>
      <p>Manual booking wastes time. Clients wait on hold. Errors creep in.</p>
      <ul>
        <li>Double-bookings frustrate everyone.</li>
        <li>Forgotten appointments lead to revenue loss.</li>
        <li>Last-minute changes disrupt your day.</li>
      </ul>
      <p>Innovative tools eliminate these issues. They integrate with your calendar. Clients see real-time availability.</p>
      
      <h2>Embrace the Digital Advantage</h2>
      <p>This digital tool meets clients' expectations of online options with efficiency.</p>
      <p>A <b>scheduling app</b> meets these needs.</p>
      
      <h2>Professionals report 30% more bookings. Automation frees you for client care. Positivity flows—happy clients return.</h2>
      <h2>Key Features of Top Scheduling Apps</h2>
      <p>Choose software that fits your workflow and has a user-friendly design. Also, allow booking with a minimum of clicks.</p>
      
      <h2>Automated Booking and Reminders</h2>
      <p>Clients click to book. The system checks slots. Confirmations arrive via email or SMS.</p>
      <p><b>Smart reminders</b> can cut no-shows up to one-third. Send alerts at the time you set. Allow customization of messages for branding with your business name, tagline, and other elements.</p>
      
      <h2>Calendar Sync and Customization</h2>
      <p>Link Google, Apple, or Outlook calendars simultaneously while avoiding overlaps. Set a buffer time between appointments.</p>
      <ul>
      <li>Custom forms capture client details.</li>
      <li>Payment integration secures deposits.</li>
      <li>Group scheduling handles classes easily.</li>
      </ul>
      <p>Wellness consultants love recurring bookings.</p>

      <h2></h2>Mobile Access for On-the-Go Management</h2>
      <p>Access your dashboard anywhere. Approve requests from your phone, tablet, or laptop. Clients can reschedule appointments as needed, while this flexibility also allows professionals to manage their schedules independently of an office.</p>
      
      <h2>How to Schedule Appointments Smartly: Step-by-Step</h2>
      <p>Implement these steps for quick wins. Start small—scale as needed.</p>
      
      <h2>Step 1: Adopt the Right Tool</h2>
      <p>Choose an app that is easy to use for you and your team, and get a demo to ensure it fits in your workspace.</p>
      <p>Look for:</p>
      <ul>
        <li>Simple and easy-to-use interface.</li>
        <li>Scalable pricing.</li>
        <li>24/7 technical support.</li>
      </ul>
      
      <h2>Step 2: Create Profile with Branding</h2>
      <p>Allow you to set up your profile for a strong branding presence, including a logo, business name, and color combination. Create a shareable booking link with service and availability so that Clients can book in seconds.</p>
      
      <h2>Step 3: Staffing Training</h2>
      <p>Onboard your team, and test reminders and reports. Optimize slots based on demand and availability while tracking performance.</p>
      
      <h2>Step 4: Promote to Clients</h2>
      <p>Email your list. <b>"Book smartly now!"</b> Watch sign-ups soar. Request client feedback and refine your system based on positive feedback.</p>
      
      <h2>Conclusion:</h2>
      <p>To pull away from traditional practices, choose a reliable <b>app to manage appointments more effectively.</b> AI-powered tools like GetSetTime help professionals save time, and clients love the convenience.</p>
    `,
        coverImage: "online-calendar.jpg",
        author: {
            name: "GetSetTime",
            avatar: "man.png",
            role: "CEO"
        },
        category: "General",
        publishedAt: "2026-01-29",
        featured: true,
        keywords: "",
        faq: [
            {
                question: "Does GetSetTime offer online appointment booking for doctors",
                answer: "Yes, GetSetTime offers online appointment booking for doctors, wellness instructors, gym trainers, and other healthcare professionals."
            },
            {
                question: "What is the cost of GetSetTime?",
                answer: "GetSetTime offers a free trial for 14 days. After that, you can choose from different plans based on your needs. The cost starts from ₹500/month."
            }
        ]
    },
    {
        id: "2",
        slug: "concept-of-an-online-doctors-appointment-booking-system-for-beginners",
        title: "Concept of an Online Doctor's Appointment Booking System for Beginners",
        excerpt: "Suppose you are managing a clinic and planning to adopt digital solutions for online appointment booking. It may appear complex at first, don't worry—it's simpler than it seems. In reality, this system is efficient for managing daily schedules effortlessly.",
        content: `
     <p>Suppose you are managing a clinic and planning to adopt digital solutions for online appointment booking. It may appear complex at first, don't worry—it's simpler than it seems. In reality, this system is efficient for managing daily schedules effortlessly.</p>
     <p>This guide shows how the technology works for you. You will learn how automated scheduling saves your time and helps you manage your daily practice more effectively.</p>
     <p>By the end, you'll feel confident exploring options. Let's dive in!</p>
     
     <h2>What Is an Online Doctor's Appointment Booking System?</h2>
     <p>A booking system is a digital tool for doctors that, on one hand, schedules appointments automatically, and on the other, allows patients to book their visits at available times online. As a result, neither phone calls nor long queues.</p>
     <p>Patients visit the booking link via the Facebook page, GBP (Google Business Page), or the website. Then pick a doctor, see available slots, and confirm instantly. Otherwise, the doctors or receptionists juggled attending calls and managing queues during peak hours. The system updates its calendar, whether Google, Apple, or Microsoft, automatically, as GetSetTime allows. It works like an always-on receptionist.</p>
     <p>These systems come as web apps, mobile apps, or embedded pages. Popular ones integrated with online payments, via Card, online banking, or UPI(Only in India), and also support the regional languages apart from English.</p>
     <p>Beginners start with free trials—no tech skills needed.</p>
     <p>Key parts include:</p>
     <ul>
      <li>Patient portal: Easy slot picker.</li>
      <li>Doctor dashboard: View and manage bookings.</li>
      <li>Notifications: SMS or email alerts.</li>
     </ul>
     <p>Short paragraphs keep it simple. You get the idea—it's a bridge between patients and doctors online.</p>

      <h2>Why Does It Matters in Today's Populated City or Nation?</h2>
      <p>e.g., India's fast-moving healthcare scene. With 1.4 billion people, clinics face massive demand. Urban doctors in cities like Chandigarh, Delhi, Pune, or Chennai see 100+ patients daily. Rural areas struggle with travel.</p>
      <p><b>Time Sevvy for everyone.</b> Patients skip long waiting calls. Doctors cut no-shows by 40% with reminders—by this schedule, they could manage their schedule and utilise time efficiently.</p> 
      <p><b>Easy accessibility</b> - Patients can book from home to visit the clinic in person or for online wellness consultations (e.g., yoga therapy sessions, diet plans). Online booking shines for job-oriented people, making it easy to book a slot that fits their schedule.</p>
      <p><b>Analyse and handle growth:</b> Small clinics scale up. They can manage the schedule effectively by analysing previous booking records to better utilise available free slots.</p>
      <p><b>Reassures beginners:</b> No upfront costs, even free for the first few months to set up and adapt to the existing working environment. Many plans may start at ₹500/month. Then, you pay only for the requirements of you and your team's needs, based on the number of clients and the features you choose (integration with apps, online payments, cloud storage, branding, etc.).</p>

      <h2>How It Works: Simple Step-by-Step</h2>
      <p>No worries, simple process. Here's how it will fit into your daily routine.</p>

      <h3>Step 1: Doctor Sets It Up</h3>
      <p>You pick a tool or app( GetSetTime). To create the workspace, you need to sign up via email id(official or general), with other details: personal name, clinic name, address, speciality like "general check-up", "ortho", or "diabetes consult." Link your phone and calendar. It all takes almost 15 minutes.</p>

      <h3>Step 2: Patient Books Online</h3>
      <p>A patient searches the clinic on Google via the name "Dr. Singh clinic Mohali" or "(speciality service) near me". They find and click on the booking link (shared on GBP, website, and social media). They see available slots for the visiting day, then pick a suitable one, enter details, and pay online if needed. Done:</p>

      <h3>Step 3: System Manages Automatically</h3>
      <p>The app blocks that slot and notifies the doctor or receptionist with a chosen template, such as "Mr. booked 10 A.M." Also, it auto-syncs with your phone calendar and sends reminders to the patient as set, e.g., 4 Hours before the visit time.</p>

      <h3>Step 4: During and After Visit</h3>
      <p>Check in via the clinic's QR code, find records of previous visits and payments. Post-visit, patients rate you. You reschedule if needed—one click.</p>
      <p>Also, records and reports help to customise your schedule and utilise the resource efficiently during peak times.</p>

      <h2>Who Should Use It?</h2>
      <p>This system fits various professionals. Start if you match these.</p>

      <h3>Busy Urban Doctors</h3>
      <p>Managing a high =-number of patients manually or with offline software is not only costly but also overwhelming. One Online appointment booking system minimizes the load with automation, bringing convenience and efficiency.</p>

      <h3>Small Clinic Owners</h3>
      <p>Low staff? No problem—the system acts as your assistant. Handles 100 bookings/week easily.</p>

      <h3>Wellness and Specialty Pros</h3>
      <p>Nutritionists in Bangalore or physiotherapists in Chennai. Group sessions or follow-ups shine here. Recurring slots auto-fill.</p>

      <h3>Multi-Location Practices</h3>
      <p>Doctors who practice in multiple locations at different times on the same day or on an alternative day. They can customise their schedule and allow bookings.</p>
      
      <h2>Extra Tips for Beginners in India</h2>
      <ul>
        <li>Choose local-friendly apps, like GetSetTime, that offer UPI payments, support for regional languages for SMS & communications, and invoicing.</li>
        <li>Integrate: link with Meta and WhatsApp Business for sharing.</li>
        <li>Secure data: Look for compliance with Indian standards (e.g., NDHM).</li>
        <li>Start small: one service at a time, then add.</li>      
      </ul>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Manual Booking</th>
            <th>Online System</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Time per booking</td>
            <td>5-10 mins</td>
            <td>30 seconds</td>
          </tr>
          <tr>
            <td>No-show rate</td>
            <td>High</td>
            <td>Cuts by 40%</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>Free but lost revenue</td>
            <td>₹500-2000/month</td>
          </tr>
          <tr>
            <td>Patient reach</td>
            <td>Local calls</td>
            <td>Nationwide</td>
          </tr>
        </tbody>
      </table>

      <h2>Wrapping Up: You should try!</h2>
      <p>You've got the basics! How an online appointment booking system simplifies a doctor's daily routine and scales up. When patients can book appointments easily, you can focus on care. It's too friendly—on both the doctor's side and the clients'.</p>

      
      

    `,
        coverImage: "online-calendar.jpg",
        author: {
            name: "GetSetTime",
            avatar: "man.png",
            role: "CEO"
        },
        category: "health",
        publishedAt: "2026-01-29",
        featured: false,
        keywords: "",
        faq: [
            {
                question: "Does GetSetTime offer online appointment booking for doctors",
                answer: "Yes, GetSetTime offers online appointment booking for doctors, wellness instructors, gym trainers, and other healthcare professionals."
            }
        ]
    }
];
function getPostCategories(post) {
    return post.category.split(",").map((c)=>c.trim()).filter(Boolean);
}
const blogCategories = [
    "All",
    ...Array.from(new Set(blogPosts.flatMap((post)=>getPostCategories(post))))
];
function getBlogBySlug(slug) {
    return blogPosts.find((post)=>post.slug === slug);
}
function getRelatedPosts(currentSlug, limit = 3) {
    const currentPost = getBlogBySlug(currentSlug);
    if (!currentPost) return blogPosts.slice(0, limit);
    const currentCategories = getPostCategories(currentPost);
    return blogPosts.filter((post)=>post.slug !== currentSlug).filter((post)=>getPostCategories(post).some((category)=>currentCategories.includes(category))).slice(0, limit);
}
function getRecentPosts(limit = 5) {
    return [
        ...blogPosts
    ].sort((a, b)=>new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit);
}
function getPrevNextPosts(currentSlug) {
    const currentIndex = blogPosts.findIndex((post)=>post.slug === currentSlug);
    if (currentIndex === -1) {
        return {
            prev: null,
            next: null
        };
    }
    const prev = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const next = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
    return {
        prev,
        next
    };
}
}),
"[project]/app/component/BlogList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogList",
    ()=>BlogList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$BlogCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/component/BlogCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/blog-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function BlogList({ posts, postsPerPage = 6 }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Get category from URL params, default to "All"
    const categoryFromUrl = searchParams.get("category") || "All";
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(postsPerPage);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(categoryFromUrl);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync category state with URL when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelectedCategory(categoryFromUrl);
        setVisibleCount(postsPerPage); // Reset visible count when URL changes
    }, [
        categoryFromUrl,
        postsPerPage
    ]);
    // Filter posts by category or tag (excluding featured if shown separately)
    const filteredPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let filtered = posts;
        // Apply category filter
        if (selectedCategory !== "All") {
            filtered = filtered.filter((post)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPostCategories"])(post).includes(selectedCategory));
        }
        return filtered;
    }, [
        posts,
        selectedCategory
    ]);
    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const hasMorePosts = visibleCount < filteredPosts.length;
    const remainingPosts = filteredPosts.length - visibleCount;
    const handleLoadMore = ()=>{
        setIsLoading(true);
        // Simulate loading delay for better UX
        setTimeout(()=>{
            setVisibleCount((prev)=>prev + postsPerPage);
            setIsLoading(false);
        }, 500);
    };
    const handleCategoryChange = (category)=>{
        setSelectedCategory(category);
        setVisibleCount(postsPerPage); // Reset visible count when changing category
        // Update URL with the selected category
        if (category === "All") {
            router.push("/blog", {
                scroll: false
            });
        } else {
            router.push(`/blog?category=${encodeURIComponent(category)}`, {
                scroll: false
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-start w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCategory,
                                onChange: (e)=>handleCategoryChange(e.target.value),
                                className: "w-full sm:max-w-xs px-4 py-3 rounded-xl text-sm font-medium bg-white text-neutral-700 border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 appearance-none cursor-pointer",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blogCategories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: category,
                                        children: category
                                    }, category, false, {
                                        fileName: "[project]/app/component/BlogList.tsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/component/BlogList.tsx",
                                lineNumber: 76,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/component/BlogList.tsx",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-600",
                            children: [
                                "Showing ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-neutral-900",
                                    children: visiblePosts.length
                                }, void 0, false, {
                                    fileName: "[project]/app/component/BlogList.tsx",
                                    lineNumber: 87,
                                    columnNumber: 23
                                }, this),
                                " of",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-neutral-900",
                                    children: filteredPosts.length
                                }, void 0, false, {
                                    fileName: "[project]/app/component/BlogList.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                " articles",
                                selectedCategory !== "All" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        " in ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-indigo-600 font-medium",
                                            children: selectedCategory
                                        }, void 0, false, {
                                            fileName: "[project]/app/component/BlogList.tsx",
                                            lineNumber: 90,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/component/BlogList.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/component/BlogList.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/component/BlogList.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/component/BlogList.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            filteredPosts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: visiblePosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-slide-in-up",
                        style: {
                            animationDelay: `${index % postsPerPage * 100}ms`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$BlogCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlogCard"], {
                            post: post
                        }, void 0, false, {
                            fileName: "[project]/app/component/BlogList.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this)
                    }, post.id, false, {
                        fileName: "[project]/app/component/BlogList.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/component/BlogList.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-16 bg-white rounded-2xl shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 text-neutral-400",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            }, void 0, false, {
                                fileName: "[project]/app/component/BlogList.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/component/BlogList.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/component/BlogList.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-neutral-900 mb-2",
                        children: "No articles found"
                    }, void 0, false, {
                        fileName: "[project]/app/component/BlogList.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-neutral-600",
                        children: "Try selecting a different category"
                    }, void 0, false, {
                        fileName: "[project]/app/component/BlogList.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/component/BlogList.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            hasMorePosts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center pt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLoadMore,
                    disabled: isLoading,
                    className: "group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                    children: [
                        isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 animate-spin",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/component/BlogList.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/component/BlogList.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/component/BlogList.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/app/component/BlogList.tsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Load More"
                                }, void 0, false, {
                                    fileName: "[project]/app/component/BlogList.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2.5 py-1 text-xs bg-white/20 rounded-full",
                                    children: [
                                        remainingPosts,
                                        " remaining"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/component/BlogList.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 transition-transform duration-300 group-hover:translate-y-1",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/component/BlogList.tsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/component/BlogList.tsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"
                        }, void 0, false, {
                            fileName: "[project]/app/component/BlogList.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/component/BlogList.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/component/BlogList.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this),
            !hasMorePosts && filteredPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center pt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm text-neutral-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 text-green-500",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/app/component/BlogList.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/component/BlogList.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "You've reached the end of the list"
                        }, void 0, false, {
                            fileName: "[project]/app/component/BlogList.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/component/BlogList.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/component/BlogList.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/component/BlogList.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/component/FaqSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqSection",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const FaqSection = ({ title, content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    className: "group rounded-2xl shadow-md p-5 bg-white transition-all duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            className: "text-gray-900 cursor-pointer font-semibold list-none flex items-center justify-between",
                            children: [
                                title,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-900 text-lg text-md font-bold group-open:rotate-45 transition-transform",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/app/component/FaqSection.tsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/component/FaqSection.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-gray-600 text-md prose",
                            children: content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600",
                                dangerouslySetInnerHTML: {
                                    __html: content
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/component/FaqSection.tsx",
                                lineNumber: 22,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/component/FaqSection.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/component/FaqSection.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/component/FaqSection.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/component/FaqSection.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/component/FaqSection.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__85b5a061._.js.map