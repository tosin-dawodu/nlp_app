/**
 * @jest-environment jsdom
 */

import "regenerator-runtime/runtime";
import { handleSubmit } from "../src/client/js/formHandler";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        agreement: "I agree",
        subjectivity: "Not at all",
        confidence: 100,
        irony: "Of course",
        form: "Yes",
      }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("Testing the submit functionality", () => {
  test("the fetch fails with an error", () => {
    document.body.innerHTML = `
    <textarea
            id="text"
            type="text"
            name="input"
            maxlength="500"
            placeholder="Type in your text"
          >
Nigeria doesn’t only have many people living within its borders, but it’s also multicultural. In fact, it’s also one of the most diverse countries in the world in terms of indigenous languages spoken on a regular basis. </textarea
          >
          <section id="section-result">
          <strong>Form Results:</strong>
          <div id="results"></div>
        </section>
  `;
    const sectionResult = document.getElementById("section-result");
    let text = document.getElementById("text");
    handleSubmit(
      {
        preventDefault: () => {},
      },
      sectionResult,
      text
    );

    expect(sectionResult.childNodes.length).toBe(5);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

