function goTo(subject) {
  alert("Let's study " + subject.charAt(0).toUpperCase() + subject.slice(1) + "!");
  // Replace with actual navigation logic if needed, e.g.:
  window.location.href = subject + ".html";
}
