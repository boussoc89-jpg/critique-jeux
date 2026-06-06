import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchBar from "./SearchBar";

test("la barre de recherche s'affiche correctement", () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>,
  );
  const input = screen.getByPlaceholderText("🔍 Rechercher un jeu...");
  expect(input).toBeInTheDocument();
});
