function copyAddress(address) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(address)
        .then(() => alert("Address copied to clipboard!"))
        .catch(() => alert("Failed to copy address."));
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = address;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand("copy");
        alert("Address copied to clipboard!");
      } catch {
        alert("Failed to copy address.");
      }
      document.body.removeChild(tempInput);
    }
  }