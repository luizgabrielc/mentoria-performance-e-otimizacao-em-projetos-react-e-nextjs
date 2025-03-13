import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import AvoidingReRendersCorrect from "./pages/avoiding-rerenders/Correct";
import AvoidingReRendersWrong from "./pages/avoiding-rerenders/Wrong";
import UseCallbackCorrect from "./pages/memoization/use-callback/Correct";
import UseCallbackWrong from "./pages/memoization/use-callback/Wrong";
import UseMemoCorrect from "./pages/memoization/use-memo/Correct";
import UseMemoWrong from "./pages/memoization/use-memo/Wrong";
import WithCodeSplitting from "./pages/optimization/example1/WithCodeSplitting";
import WithoutCodeSplitting from "./pages/optimization/example1/WithoutCodeSplitting";
import StatesExample1Correct from "./pages/states/example1/Correct";
import StatesExample1Wrong from "./pages/states/example1/Wrong";
import StatesExample2Correct from "./pages/states/example2/Correct";
import StatesExample2Wrong from "./pages/states/example2/Wrong";

const App = () => {
  return (
    <Router>
      <div className="flex items-center justify-between px-8 py-2">
        <Link
          className="border shadow rounded-lg py-1 px-2 font-semibold"
          to="/"
        >
          MENTORIA FRONT-END
        </Link>
        <Navbar />
      </div>
      <div className="px-8 mt-20 flex items-center justify-center">
        <Routes>
          <Route
            path="/avoiding-rerenders/correct"
            element={<AvoidingReRendersCorrect />}
          />
          <Route
            path="/avoiding-rerenders/wrong"
            element={<AvoidingReRendersWrong />}
          />
          <Route
            path="/memoization/use-callback/correct"
            element={<UseCallbackCorrect />}
          />
          <Route
            path="/memoization/use-callback/wrong"
            element={<UseCallbackWrong />}
          />
          <Route
            path="/memoization/use-memo/correct"
            element={<UseMemoCorrect />}
          />
          <Route
            path="/memoization/use-memo/wrong"
            element={<UseMemoWrong />}
          />
          <Route
            path="/optimization/example1/WithCodeSplitting"
            element={<WithCodeSplitting />}
          />
          <Route
            path="/optimization/example1/WithoutCodeSplitting"
            element={<WithoutCodeSplitting />}
          />
          <Route
            path="/states/example1/correct"
            element={<StatesExample1Correct />}
          />
          <Route
            path="/states/example1/wrong"
            element={<StatesExample1Wrong />}
          />
          <Route
            path="/states/example2/correct"
            element={<StatesExample2Correct />}
          />
          <Route
            path="/states/example2/wrong"
            element={<StatesExample2Wrong />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
