interface Theme {
  theme: string;
  setTheme: (str: string) => void;
}

const Switch = ({ theme, setTheme }: Theme) => {
  return (
    <div className="switch-toggle">
      <input
        type="checkbox"
        id="background-switch"
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <label className={theme} htmlFor="background-switch">
        <span className={theme} />
      </label>
    </div>
  );
};

export default Switch;
