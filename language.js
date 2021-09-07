const res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "",
		source: "en",
		target: "es"
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json());