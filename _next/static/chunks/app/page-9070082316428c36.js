(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1078:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var i=r(5155),s=r(2115),n=r(1290),a=r(1027),o=r(3463),d=r(9795);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,d.QP)((0,o.$)(t))}let c=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function u(e){let{className:t,variant:r,size:s,asChild:a=!1,...o}=e,d=a?n.DX:"button";return(0,i.jsx)(d,{"data-slot":"button",className:l(c({variant:r,size:s,className:t})),...o})}function x(e){let{className:t,...r}=e;return(0,i.jsx)("div",{"data-slot":"card",className:l("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t),...r})}function g(e){let{className:t,type:r,...s}=e;return(0,i.jsx)("input",{type:r,"data-slot":"input",className:l("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...s})}var f=r(6764),h=r(5686);let m=(0,s.createContext)(void 0);function v(){let[e,t]=(0,s.useState)([]),[r,n]=(0,s.useState)(null),[a,o]=(0,s.useState)("");return(0,i.jsx)(m.Provider,{value:{todos:e,addTodo:()=>{a.trim()&&(null!==r?(t(e=>e.map(e=>e.id===r?{...e,text:a}:e)),n(null)):t(e=>[...e,{id:Date.now(),text:a,completed:!1}]),o(""))},toggleComplete:e=>{t(t=>t.map(t=>t.id===e?{...t,completed:!t.completed}:t))},editTodo:t=>{let r=e.find(e=>e.id===t);r&&(o(r.text),n(t))},deleteTodo:e=>{t(t=>t.filter(t=>t.id!==e))},text:a,setText:o},children:(0,i.jsx)("div",{className:"flex justify-center items-center min-h-screen bg-gray-100 p-4",children:(0,i.jsxs)(x,{className:"w-full max-w-md sm:max-w-lg bg-white p-5 rounded-lg shadow-lg",children:[(0,i.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold mb-3 text-center",children:"\uD83D\uDCDD To-Do List"}),(0,i.jsx)(b,{}),(0,i.jsx)(w,{})]})})})}function p(){let e=(0,s.useContext)(m);if(!e)throw Error("useTodoContext must be used within a TodoProvider");return e}function b(){let{addTodo:e,text:t,setText:r}=p();return(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2 mb-4",children:[(0,i.jsx)(g,{value:t,onChange:e=>r(e.target.value),placeholder:"Nhập c\xf4ng việc...",className:"flex-grow text-sm sm:text-base"}),(0,i.jsx)(u,{onClick:e,className:"bg-blue-500 hover:bg-blue-700 text-white",children:t?"Cập nhật":"Th\xeam"})]})}function w(){let{todos:e,toggleComplete:t,editTodo:r,deleteTodo:s}=p();return(0,i.jsxs)("div",{className:"space-y-2",children:[0===e.length&&(0,i.jsx)("p",{className:"text-gray-500 text-center",children:"Danh s\xe1ch trống!"}),e.map(e=>(0,i.jsxs)(x,{className:"flex flex-row items-center justify-between p-3 border rounded-lg",children:[(0,i.jsx)("span",{className:"flex-grow cursor-pointer text-sm sm:text-base ".concat(e.completed?"line-through text-gray-400":""),onClick:()=>t(e.id),children:e.text}),(0,i.jsxs)("div",{className:"flex gap-2 flex-wrap",children:[(0,i.jsx)(u,{variant:"ghost",size:"icon",onClick:()=>r(e.id),children:(0,i.jsx)(f.A,{size:16})}),(0,i.jsx)(u,{variant:"ghost",size:"icon",onClick:()=>s(e.id),children:(0,i.jsx)(h.A,{size:16,className:"text-red-500"})})]})]},e.id))]})}},4572:(e,t,r)=>{Promise.resolve().then(r.bind(r,1078))}},e=>{var t=t=>e(e.s=t);e.O(0,[124,441,587,358],()=>t(4572)),_N_E=e.O()}]);