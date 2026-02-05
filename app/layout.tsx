export const metadata = {
  title: "3D - Форма жизни | Будущее обретает форму"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#007AFF",
        "accent-cyan": "#00F2FF",
        "obsidian": "#0B0E14",
        "card-bg": "rgba(255, 255, 255, 0.03)"
      },
      fontFamily: {
        "display": ["Exo 2", "sans-serif"],
        "sans": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      }
    }
  }
};`
          }}
        />
        <style
          type="text/tailwindcss"
          dangerouslySetInnerHTML={{
            __html: `@layer base {
  body {
    font-family: 'Inter', sans-serif;
    color: #FFFFFF;
    @apply bg-obsidian;
  }
  h1, h2, h3, h4 {
    font-family: 'Exo 2', sans-serif;
  }
}
.hero-gradient-overlay {
  background: radial-gradient(circle at 70% 50%, rgba(0, 242, 255, 0.05) 0%, rgba(11, 14, 20, 0.85) 60%, rgba(11, 14, 20, 1) 100%);
}
.service-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 122, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.service-card:hover {
  background: rgba(0, 122, 255, 0.08);
  border-color: rgba(0, 122, 255, 0.4);
  transform: translateY(-8px);
  box-shadow: 0 0 30px rgba(0, 122, 255, 0.15);
}
.nav-blur {
  background: rgba(11, 14, 20, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.glass-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}
.glass-input:focus {
  border-color: #007AFF;
  background: rgba(255, 255, 255, 0.08);
}
.glow-accent {
  box-shadow: 0 0 20px rgba(0, 122, 255, 0.4);
}
.render-container img {
  filter: contrast(1.1) brightness(0.9);
  mask-image: linear-gradient(to right, transparent 0%, black 40%, black 100%);
}
.dof-blur {
  backdrop-filter: blur(2px);
  pointer-events: none;
}`
          }}
        />
      </head>
      <body className="selection:bg-primary selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
