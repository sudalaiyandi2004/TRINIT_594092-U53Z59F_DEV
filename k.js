function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
    console.log(response.value)
    localStorage.setItem('Name', response.value);
}