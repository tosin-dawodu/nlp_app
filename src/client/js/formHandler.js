async function handleSubmit(event, sectionResult, text) {
  event.preventDefault();

  if (text.value.length < 1) {
    alert("Please type in a message");
  } else {
    const response = await fetch("http://localhost:8081/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text.value,
      }),
      credentials: "same-origin",
    });
    try {
      const responseJson = await response.json();
      sectionResult.innerHTML = "";
      for (const key in responseJson) {
        const p = document.createElement("p");
        let value = responseJson[key];
        if (typeof value === "string") {
          value = value.toLowerCase();
        }
        p.append(`${key}: ${value}`);
        sectionResult.appendChild(p);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export { handleSubmit };
