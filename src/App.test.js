import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { AppProvider } from "./AppContext";

beforeEach(() => {
  fetch.resetMocks();
});

test("renders header and footer", () => {
  const { container } = render(
    <AppProvider>
      <App />
    </AppProvider>
  );
  expect(container.getElementsByClassName("app-header").length).toBe(1);
  expect(container.getElementsByClassName("home-screen").length).toBe(1);
  expect(container.getElementsByClassName("app-footer").length).toBe(1);
});

test("renders error if no data loaded", async () => {
  fetch.mockResponseOnce(JSON.stringify({}));

  render(
    <AppProvider>
      <App />
    </AppProvider>
  );

  await act(async () => {
    fireEvent.click(screen.getByText("Start"));
  });

  const error = await screen.findByText(
    "We are sorry, but something went wrong... Try again later"
  );

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(error).toBeInTheDocument();
});
