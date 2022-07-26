interface Theme {
  theme: string;
  setTheme: (str: string) => void;
}

const Switch: React.FC<Theme> = ({ theme, setTheme }) => {
  return (
    <div className="switch-toggle">
      <input
        type="checkbox"
        id="background-switch"
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <label className={theme === "light" ? "dark" : "light"} htmlFor="background-switch">
        <span />
      </label>
    </div>
  );
};

export default Switch;
