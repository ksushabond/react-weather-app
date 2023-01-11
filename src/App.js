import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by Oxana Bond and is{" "}
          <a
            href="https://github.com/ksushabond/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://superlative-heliotrope-41604a.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
