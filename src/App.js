import Home from "./Views/Home";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import question from "./Store/reducers/question";

const rootReducer = combineReducers({
    question,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    return (
        <div>
            <Provider store={store}>
                <Home />
            </Provider>
        </div>
    );
}

export default App;
