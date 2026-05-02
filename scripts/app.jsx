// ─────────────────────────────────────────────────────────────
// App entry point. Wires the resume into the DOM under #root,
// using the Modern Dark theme. Exposes a small Tweaks panel for
// language, motion, and accent color (these are runtime-only —
// no host persistence on a static site).
//
// To change the default language, default motion, or default
// accent color, edit DEFAULTS below.
// ─────────────────────────────────────────────────────────────

const DEFAULTS = {
  lang: "en",       // "en" | "es" | "de"
  motion: "on",     // "on" | "off"
  accent: "#7cb6ff" // any CSS color
};

function App() {
  const [lang,   setLang]   = React.useState(DEFAULTS.lang);
  const [motion, setMotion] = React.useState(DEFAULTS.motion);
  const [accent, setAccent] = React.useState(DEFAULTS.accent);

  return (
    <>
      <ResumeApp
        themeKey="dark"
        lang={lang}
        setLang={setLang}
        motion={motion}
        accent={accent}
        withTweaks={false}
      />

      {/* Tweaks panel: appears when host toggles edit mode.
          On a static GitHub Pages deploy there's no host, so this
          is mostly invisible — feel free to delete it if you don't
          use it. */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Content" />
        <TweakRadio
          label="Language"
          value={lang}
          options={['en', 'es', 'de']}
          onChange={setLang}
        />
        <TweakRadio
          label="Motion"
          value={motion}
          options={['on', 'off']}
          onChange={setMotion}
        />
        <TweakSection label="Theme" />
        <TweakColor
          label="Accent"
          value={accent}
          onChange={setAccent}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
